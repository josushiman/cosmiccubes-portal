import { useState, useCallback, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import Categories from "./components/Categories";
import FinancialOverview from "./components/FinancialOverview";
import "./styles.css";
import TimeRangeSelector from "./components/TimeRangeSelector";

const MonthSummary = () => {
  const { data, loading, error } = useAsync("/ynab/monthly-summary");
  const [urlParams, setUrlParams] = useState(undefined);

  const urlParamsCallback = useCallback(
    (value) => () => {
      console.log(value);
      setUrlParams(value);
    },
    []
  );

  useEffect(() => {
    console.log(urlParams);
  }, [urlParams]);

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
      <TimeRangeSelector urlParamsCallback={urlParamsCallback} />
      <Summary data={data.summary} />
      <Categories data={data.categories} />
      <FinancialOverview data={data.income_expenses} />
    </Grid>
  );
};

export default MonthSummary;
