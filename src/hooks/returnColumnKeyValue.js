import formatCurrency from "./formatCurrency";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

const columnKeyMap = {
  amount: "amount (£)",
  payee_name: "payee",
  total: "total (£)",
};

const columnValueFormatMap = {
  amount: (value) => formatCurrency(value, false, false),
  total: (value) => formatCurrency(value, false, false),
  date: (value) => dayjs(value).format("Do"),
  month: (value) => dayjs(value).format("MMMM 'YY"),
  payee: (value) => (value.length > 20 ? value.slice(0, 20) + "..." : value),
  payee_name: (value) =>
    value.length > 20 ? value.slice(0, 20) + "..." : value,
};

export const returnColumnKey = (originalKey) => {
  return columnKeyMap[originalKey] ?? originalKey;
};

export const returnColumnValue = (originalValue, row) => {
  dayjs.extend(advancedFormat);
  console.log(originalValue, row);
  const formatter = columnValueFormatMap[originalValue];
  return formatter ? formatter(row[originalValue]) : row[originalValue];
};
