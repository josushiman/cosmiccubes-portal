import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import formatCurrency from "../hooks/formatCurrency";

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
                  <TableHead>
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
  let tableKeys = Object.keys(data[0]);
  const hasTransactions = tableKeys.includes("transactions");

  if (hasTransactions) {
    tableKeys.pop("transactions");
  }

  dayjs.extend(advancedFormat);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead>
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
          {data.map((row, index) => (
            <CustomRow
              key={index}
              hasTransactions={hasTransactions}
              row={row}
              tableKeys={tableKeys}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomDataTable;
