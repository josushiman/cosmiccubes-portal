import { useState, useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import AvailableBalance from "../components/AvailableBalance";
import CardBalances from "../components/CardBalances";
import SpentVsBudget from "../components/SpentVsBudget";
import TimePeriod from "../components/TimePeriod";
import EarnedVsSpent from "../components/EarnedVsSpent";
import IncomeVsExpenses from "../components/IncomeVsExpenses";
import CategoriesSpent from "../components/CategoriesSpent";
import SubCategoriesSpent from "../components/SubCategoriesSpent";
import UpcomingBills from "../components/UpcomingBills";
import UpcomingRenewals from "../components/UpcomingRenewals";
import SalaryBreakdown from "../components/SalaryBreakdown";
import CreditLastPaid from "../components/CreditLastPaid";

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

  // TODO replace Grid with custom CSS grid.
  return (
    <Grid container style={{ padding: "1rem" }} spacing={2}>
      <Grid md={2} xs={12}>
        <AvailableBalance />
      </Grid>
      <Grid md={6} xs={12} style={{ alignSelf: "flex-end" }}>
        <CardBalances />
      </Grid>
      <Grid md={4} xs={12} style={{ alignSelf: "flex-end" }}>
        <SpentVsBudget />
      </Grid>
      <Grid md={2} xs={12}>
        <EarnedVsSpent />
      </Grid>
      <Grid md={6} xs={12}>
        <IncomeVsExpenses />
      </Grid>
      <Grid md={4} xs={12}>
        <SubCategoriesSpent />
      </Grid>
      <Grid md={3} xs={12}>
        <UpcomingBills />
      </Grid>
      <Grid md={3} xs={12}>
        <UpcomingRenewals />
      </Grid>
      <Grid md={3} xs={12}>
        <SalaryBreakdown />
      </Grid>
      <Grid md={3} xs={12}>
        <CreditLastPaid />
      </Grid>
      <Grid md={4} xs={12}>
        <CategoriesSpent />
      </Grid>
      <Grid md={2} xs={12}>
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
