import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import Categories from "./components/Categories";
import FinancialOverview from "./components/FinancialOverview";
import "./styles.css";
import NotificationCard from "./components/NotificationCard";

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

  data.notif = "1 uncategorised transaction";
  const notificationText = data?.notif ? data.notif : null;

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowGap={"0.5rem"}
      flexDirection={"column"}
    >
      {notificationText ? (
        <NotificationCard data={"1 uncategorised transaction"} />
      ) : null}
      <Summary data={data.summary} />
      <Categories data={data.categories} />
      <FinancialOverview data={data.income_expenses} />
    </Grid>
  );
};

export default MonthSummary;
