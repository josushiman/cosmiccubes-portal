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
import LastXTransactions from "../components/LastXTransactions";
import "./styles.css";

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
    <>
      <div className="dashboard-container">
        <Grid style={{ gridArea: "available-balance" }}>
          <AvailableBalance />
        </Grid>
        <Grid style={{ gridArea: "card-balances", alignSelf: "flex-end" }}>
          <CardBalances />
        </Grid>
        <Grid style={{ gridArea: "spent-vs-budget", alignSelf: "flex-end" }}>
          <SpentVsBudget />
        </Grid>
        <Grid style={{ gridArea: "earned-vs-spent" }}>
          <EarnedVsSpent />
        </Grid>
        <Grid style={{ gridArea: "income-vs-expenses" }}>
          <IncomeVsExpenses />
        </Grid>
        <Grid style={{ gridArea: "categories-spent" }}>
          <CategoriesSpent />
        </Grid>
        <Grid style={{ gridArea: "time-period" }}>
          <TimePeriod
            months={months}
            setMonthIntervals={setMonthIntervals}
            year={year}
            setYearInterval={setYearInterval}
            month={month}
            setMonthInterval={setMonthInterval}
          />
        </Grid>
        <Grid style={{ gridArea: "sub-categories-spent" }}>
          <SubCategoriesSpent />
        </Grid>
        <Grid style={{ gridArea: "upcoming-bills" }}>
          <UpcomingBills />
        </Grid>
        <Grid style={{ gridArea: "credit-last-paid" }}>
          <CreditLastPaid />
        </Grid>
        <Grid style={{ gridArea: "upcoming-renewals" }}>
          <UpcomingRenewals />
        </Grid>
        <Grid style={{ gridArea: "salary-breakdown" }}>
          <SalaryBreakdown />
        </Grid>
        <Grid style={{ gridArea: "last-x-transactions" }}>
          <LastXTransactions />
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
