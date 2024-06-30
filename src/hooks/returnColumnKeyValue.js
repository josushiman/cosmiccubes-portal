import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import formatCurrency from "./formatCurrency";

const columnKeyMap = {
  amount: "amount (£)",
  payee_name: "payee",
  total: "total (£)",
};

export const columnValueFormatMap = {
  amount: (value) => formatCurrency(value, false, false),
  average: (value) => `£ ${formatCurrency(value, false, true)}`,
  biggest: (value) => `£ ${formatCurrency(value, false, false)}`,
  budget: (value) =>
    value > 0
      ? `£ ${formatCurrency(value, false, true)}`
      : value == 0
      ? `£ ${formatCurrency(0, false, true)}`
      : "∞",
  "daily spend": (value) => `£ ${formatCurrency(value, false, true)}`,
  date: (value) => dayjs(value).format("Do"),
  "last month diff": (value) =>
    value < 0
      ? `£ ( ${formatCurrency(-value, false, false)} )`
      : `£ ${formatCurrency(value, false, false)}`,
  month: (value) => dayjs(value).format("MMMM 'YY"),
  payee: (value) => (value.length > 20 ? value.slice(0, 20) + "..." : value),
  payee_name: (value) =>
    value.length > 20 ? value.slice(0, 20) + "..." : value,
  topspender: (value) => `£ ${formatCurrency(value, false, false)}`,
  total: (value) => formatCurrency(value, false, false),
  "total credit": (value) => `£ ${formatCurrency(value, false, true)}`,
  "total spent": (value) => `£ ${formatCurrency(value, false, false)}`,
  "whats left": (value) => `£ ${formatCurrency(value, false, false)}`,
};

export const returnColumnKey = (originalKey) => {
  return columnKeyMap[originalKey] ?? originalKey;
};

export const returnColumnValue = (originalValue, row) => {
  dayjs.extend(advancedFormat);

  const formatter = columnValueFormatMap[originalValue];
  return formatter ? formatter(row[originalValue]) : row[originalValue];
};
