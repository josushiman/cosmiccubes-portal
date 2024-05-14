import {
  Box,
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
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";

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

const CustomRow = ({ row }) => {
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell style={{ borderBottom: "unset", paddingBottom: 0 }}>
          {row.payee.length > 20 ? row.payee.slice(0, 20) + "..." : row.payee}
        </TableCell>
        <TableCell
          align="right"
          style={{ borderBottom: "unset", paddingBottom: 0 }}
        >
          £ {formatCurrency(row.amount, false, false)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ fontStyle: "italic", paddingTop: 0 }}>
          <Typography variant="caption">
            {row.category} - {row.subcategory}
          </Typography>
        </TableCell>
        <TableCell align="right" style={{ fontStyle: "italic", paddingTop: 0 }}>
          <Typography variant="caption">
            {dayjs(row.date).format("Do MMM")}
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

const Transactions = ({ data, accountId }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredData.length) : 0;

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

  dayjs.extend(advancedFormat);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead style={{ backgroundColor: "#C06969" }}>
          <TableRow>
            <TableCell>Payee/Cat</TableCell>
            <TableCell align="right" colSpan={6}>
              (£)/Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: "#121212" }}>
          {(rowsPerPage > 0
            ? filteredData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : filteredData
          ).map((row, rowIndex) => (
            <CustomRow key={rowIndex} row={row} />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter style={{ backgroundColor: "#121212" }}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={filteredData.length}
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

export default Transactions;
