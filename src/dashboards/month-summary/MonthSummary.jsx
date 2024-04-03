import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import "./styles.css";
import Categories from "./components/Categories";
import FinancialOverview from "./components/FinancialOverview";

const MonthSummary = () => {
  const { data, loading, error } = useAsync("/ynab/monthly-summary");

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
      <Summary data={data.summary} />
      <Categories data={data.categories} />
      <FinancialOverview data={data.income_expenses} />
    </Grid>
  );
};

export default MonthSummary;
