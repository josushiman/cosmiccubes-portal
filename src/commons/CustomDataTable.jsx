import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import {
  returnColumnKey,
  returnColumnValue,
} from "../hooks/returnColumnKeyValue";
import { CustomCard } from "./CustomCard";

const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.25 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
};

const DefaultHeader = ({ hasTransactions, tableKeys }) => {
  return (
    <TableRow>
      {hasTransactions ? <TableCell /> : null}
      {tableKeys.map((value, index) => {
        return (
          <TableCell
            key={index}
            align={index > 0 ? "right" : "left"}
            sx={{ textTransform: "capitalize" }}
          >
            {returnColumnKey(value)}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const DefaultRow = ({ hasTransactions, row, tableKeys }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {hasTransactions ? (
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        ) : null}
        {tableKeys.map((value, keyIndex) => (
          <TableCell key={keyIndex} align={keyIndex > 0 ? "right" : "left"}>
            {returnColumnValue(value, row)}
          </TableCell>
        ))}
      </TableRow>
      {hasTransactions ? (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="body1" gutterBottom component="div">
                  Breakdown
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead style={{ backgroundColor: "#C06969" }}>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">(£)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.transactions.map((breakdownRow, breakdownRowIndex) => (
                      <TableRow key={breakdownRowIndex}>
                        <TableCell component="th" scope="row">
                          {breakdownRow.memo
                            ? breakdownRow.memo
                            : breakdownRow.payee.length > 11
                            ? breakdownRow.payee.slice(0, 11) + "..."
                            : breakdownRow.payee}
                        </TableCell>
                        <TableCell>
                          {dayjs(breakdownRow.date).format("Do")}
                        </TableCell>
                        <TableCell align="right">
                          {breakdownRow.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
};

const TransactionHeader = () => {
  return (
    <TableRow>
      <TableCell>Payee/Cat</TableCell>
      <TableCell align="right">(£)/Date</TableCell>
    </TableRow>
  );
};

const TransactionRow = ({ row }) => {
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell style={{ borderBottom: "unset", paddingBottom: 0 }}>
          {returnColumnValue("payee", row)}
        </TableCell>
        <TableCell
          align="right"
          style={{ borderBottom: "unset", paddingBottom: 0, paddingLeft: 0 }}
        >
          £ {returnColumnValue("amount", row)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ fontStyle: "italic", paddingTop: 0 }}>
          <Typography variant="caption">{row.category}</Typography>
        </TableCell>
        <TableCell
          align="right"
          style={{ fontStyle: "italic", paddingTop: 0, paddingLeft: 0 }}
        >
          <Typography variant="caption">
            {dayjs(row.date).format("Do MMM")}
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

// TODO support clicking through to place based on item type (e.g. budgets and clicking through to their category overview)

const CustomDataTable = ({
  data,
  excludeKeys = undefined,
  defaultRowsPerPage = 5,
  accountId = undefined,
  showTransactions = false,
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    accountId !== undefined
      ? setFilteredData(data.filter((item) => item.account_id == accountId))
      : setFilteredData(data);
  }, [accountId, data]);

  if (filteredData.length < 1) {
    return (
      <CustomCard>
        <Typography variant="body1" padding={"1.5rem 2rem"}>
          No transactions during this period...
        </Typography>
      </CustomCard>
    );
  }

  let tableKeys = Object.keys(data[0]);
  const hasTransactions = tableKeys.includes("transactions");

  if (hasTransactions) {
    tableKeys.pop("transactions");
  }

  if (excludeKeys) {
    tableKeys = tableKeys.filter((tableKey) => !excludeKeys.includes(tableKey));
  }

  dayjs.extend(advancedFormat);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead style={{ backgroundColor: "#C06969" }}>
          {showTransactions ? (
            <TransactionHeader />
          ) : (
            <DefaultHeader
              hasTransactions={hasTransactions}
              tableKeys={tableKeys}
            />
          )}
        </TableHead>
        <TableBody style={{ backgroundColor: "#121212" }}>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row, index) => {
            return showTransactions ? (
              <TransactionRow key={index} row={row} />
            ) : (
              <DefaultRow
                key={index}
                hasTransactions={hasTransactions}
                row={row}
                tableKeys={tableKeys}
              />
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter style={{ backgroundColor: "#121212" }}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[{ label: "All", value: -1 }]}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CustomDataTable;
