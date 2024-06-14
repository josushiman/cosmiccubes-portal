import { columnValueFormatMap } from "./returnColumnKeyValue";

export const returnValue = (name, originalValue) => {
  const formatter = columnValueFormatMap[name];
  return formatter ? formatter(originalValue) : originalValue;
};
