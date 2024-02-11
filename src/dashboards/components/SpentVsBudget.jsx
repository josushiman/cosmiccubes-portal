import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
import { BorderLinearProgressWhiteBackground } from "../../commons/BorderLinearProgress";
import useAsync from "../../hooks/useAsync";

const SpentVsBudget = () => {
  const { data, loading, error } = useAsync("/ynab/spent-vs-budget");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  // // Example output
  // const data = {"balance":474.33,"budget":0.0,"spent":199.6,"progress":0}

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
