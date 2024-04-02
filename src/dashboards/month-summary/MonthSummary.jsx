import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import "./styles.css";

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
      rowGap={"0.25rem"}
      flexDirection={"column"}
    >
      <Summary data={data.summary} />
    </Grid>
  );
};

export default MonthSummary;
