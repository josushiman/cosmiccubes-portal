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
import { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import formatCurrency from "../hooks/formatCurrency";

function CustomTablePaginationActions(props) {
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
}

const CustomRow = ({ hasTransactions, row, tableKeys }) => {
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
            {value == "amount"
              ? formatCurrency(row[value], false, false)
              : value == "date"
              ? dayjs(row[value]).format("Do")
              : row[value]}
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

const CustomDataTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  let tableKeys = Object.keys(data[0]);
  const hasTransactions = tableKeys.includes("transactions");

  if (hasTransactions) {
    tableKeys.pop("transactions");
  }

  dayjs.extend(advancedFormat);

  // TODO figure out the way to remove the padding on the table for the bills summary page
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead style={{ backgroundColor: "#C06969" }}>
          <TableRow>
            {hasTransactions ? <TableCell /> : null}
            {tableKeys.map((value, index) => {
              return (
                <TableCell
                  key={index}
                  align={index > 0 ? "right" : "left"}
                  sx={{ textTransform: "capitalize" }}
                >
                  {value == "amount" ? "amount (£)" : value}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row, index) => (
            <CustomRow
              key={index}
              hasTransactions={hasTransactions}
              row={row}
              tableKeys={tableKeys}
            />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
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
              ActionsComponent={CustomTablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CustomDataTable;
