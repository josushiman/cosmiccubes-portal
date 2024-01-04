import { useState, useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import AvailableBalance from "../components/AvailableBalance";
import CardBalances from "../components/CardBalances";
import SpentVsBudget from "../components/SpentVsBudget";
import TimePeriod from "../components/TimePeriod";

const Dashboard = () => {
  const [months, setMonths] = useState(3);
  const [year, setYear] = useState(undefined);
  const [month, setMonth] = useState(undefined);

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
        setMonth(value);
      }
      setMonths(undefined);
    },
    [month, year]
  );

  // TODO set up a custom hook to take the month, years, and months values in order to build the URL to call out to CosmicCubes.

  return (
    <Grid container style={{ padding: "1rem" }} spacing={2}>
      <Grid md={2}>
        <AvailableBalance />
      </Grid>
      <Grid md={6} style={{ alignSelf: "flex-end" }}>
        <CardBalances />
      </Grid>
      <Grid md={4} style={{ alignSelf: "flex-end" }}>
        <SpentVsBudget />
      </Grid>
      <Grid md={2}>
        <TimePeriod
          months={months}
          setMonthIntervals={setMonthIntervals}
          year={year}
          setYearInterval={setYearInterval}
          month={month}
          setMonthInterval={setMonthInterval}
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
