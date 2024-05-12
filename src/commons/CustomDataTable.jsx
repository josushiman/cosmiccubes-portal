import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import formatCurrency from "../hooks/formatCurrency";

const CustomDataTable = ({ data }) => {
  const dataLength = data.length;

  if (dataLength < 1) return null;

  const tableKeys = Object.keys(data[0]);

  dayjs.extend(advancedFormat);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
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
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {tableKeys.map((value, index) => (
                <TableCell key={index} align={index > 0 ? "right" : "left"}>
                  {value == "amount"
                    ? formatCurrency(row[value], false, false)
                    : value == "date"
                    ? dayjs(row[value]).format("Do")
                    : row[value]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomDataTable;
