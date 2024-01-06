import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Grid from "@mui/material/Unstable_Grid2";
// import useAsync from "../../hooks/useAsync";
import formatCurrency from "../../hooks/formatCurrency";

const SpentVsBudget = () => {
  // const {
  //   data: realData, // TODO change this to data
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

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: "#C06969",
    },
  }));

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
        <BorderLinearProgress variant="determinate" value={data.progress} />
      </Grid>
    </Grid>
  );
};

export default SpentVsBudget;
