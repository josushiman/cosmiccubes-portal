import { useState, useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import Categories from "./components/Categories";
import FinancialOverview from "./components/FinancialOverview";
import "./styles.css";
import TimeRangeSelector from "./components/TimeRangeSelector";

const MonthSummary = () => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const { data, loading, error } = useAsync("/ynab/monthly-summary");
  const [months, setMonths] = useState(undefined);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  const setMonthIntervals = useCallback(
    (value) => () => {
      // Only set the month intervals if it does not match what is currently set.
      if (value != months) {
        setMonths(value);
      }
      // Unset both the year and the month.
      setYear(undefined);
      setMonth(undefined);
    },
    [months]
  );

  const setYearInterval = useCallback(
    (value) => () => {
      // Only set the year if it does not match the current year that is already set.
      if (value != year) {
        setYear(value);
      }
      // Unset the month intervals.
      setMonths(undefined);
    },
    [year]
  );

  const setMonthInterval = useCallback(
    (value) => () => {
      // Unset the month if it's selected again.
      if (value == month) {
        setMonth(undefined);
      }
      // If no year is set, set it to the current year.
      if (!year) {
        setYear(2024);
      }
      // Finally set the month to the value if it doesn't match what is already set, and also unset the month intervals.
      if (value != month) {
        // Handle month values on the BE by adding a 0 infront of any that is less than 10.
        value < 10 ? setMonth(`0${value}`) : setMonth(value);
      }
      setMonths(undefined);
    },
    [month, year]
  );

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowGap={"0.5rem"}
      flexDirection={"column"}
    >
      <TimeRangeSelector
        months={months}
        setMonthIntervals={setMonthIntervals}
        year={year}
        setYearInterval={setYearInterval}
        month={month}
        setMonthInterval={setMonthInterval}
      />
      <Summary data={data.summary} />
      <Categories data={data.categories} />
      <FinancialOverview data={data.income_expenses} />
    </Grid>
  );
};

export default MonthSummary;
