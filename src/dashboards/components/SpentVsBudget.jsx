import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
import { BorderLinearProgressWhiteBackground } from "../../commons/BorderLinearProgress";
// import useAsync from "../../hooks/useAsync";

const SpentVsBudget = () => {
  // const {
  //   data,
  //   loading,
  //   error,
  // } = useAsync("/ynab/available-balance"); // TODO replace with real endpoint.

  // Example output
  const data = {
    spent: 1200.34,
    budget: 3500,
    progress: 34,
  };

  // if (loading || !data) {
  //   // Add skeleton
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   // Pass generic error message
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <Grid container flexDirection={"column"} gap={"0.25rem"}>
      <Typography variant="h6" style={{ alignSelf: "flex-end" }}>
        Spent vs Budget
      </Typography>
      <Grid container flexDirection={"column"} gap={"0.125rem"}>
        <Typography
          variant="body1"
          style={{ alignSelf: "flex-end", color: "white" }}
        >
          <span>£</span> {formatCurrency(data.spent)} /{" "}
          {formatCurrency(data.budget)}
        </Typography>
        <BorderLinearProgressWhiteBackground
          variant="determinate"
          value={data.progress}
        />
      </Grid>
    </Grid>
  );
};

export default SpentVsBudget;
