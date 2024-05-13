import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";

const CustomRow = ({ row }) => {
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell style={{ borderBottom: "unset", paddingBottom: 0 }}>
          {row.payee.length > 20 ? row.payee.slice(0, 20) + "..." : row.payee}
        </TableCell>
        <TableCell
          align="right"
          colSpan={6}
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
        <TableCell
          align="right"
          colSpan={6}
          style={{ fontStyle: "italic", paddingTop: 0 }}
        >
          <Typography variant="caption">
            {dayjs(row.date).format("Do MMM")}
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

const Transactions = ({ data, accountId }) => {
  let filteredData =
    accountId !== undefined
      ? data.filter((item) => item.account_id == accountId)
      : data;

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
          {filteredData.map((row, rowIndex) => (
            <CustomRow key={rowIndex} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Transactions;
