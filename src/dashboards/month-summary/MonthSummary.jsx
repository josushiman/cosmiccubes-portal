import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import CategoriesOverview from "./components/CategoriesOverview";
import FinancialOverview from "./components/FinancialOverview";
import NotificationCard from "./components/NotificationCard";
import "./styles.css";

const MonthSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(
    `/ynab/monthly-summary${timePeriod}`
  );

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  const notificationText = data?.notif ? data.notif : null;

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowGap={"1rem"}
      flexDirection={"column"}
      padding={"1rem"}
    >
      {notificationText ? <NotificationCard data={data.notif} /> : null}
      <Summary data={data.summary} />
      <CategoriesOverview data={data.categories} />
      <FinancialOverview data={data.income_expenses} />
    </Grid>
  );
};

export default MonthSummary;
