import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
// import useAsync from "../../hooks/useAsync";

const CategoriesSpent = () => {
  //   const {
  //     data: realData, // TODO change this to data
  //     loading,
  //     error,
  //   } = useAsync("/ynab/available-balance"); // TODO replace with real endpoint.

  // Example output
  const data = {
    spent: 1200.34,
    budget: 3500,
    progress: 34,
  };

  //   if (loading || !data) {
  //     // Add skeleton
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     // Pass generic error message
  //     return <div>Error: {error.message}</div>;
  //   }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: "#C06969",
    },
  }));

  return (
    <Card>
      <Grid
        container
        xs={12}
        flexDirection={"column"}
        gap={"1.5rem"}
        padding={"1rem"}
      >
        <Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Bills</Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              <span>£</span> {formatCurrency(data.spent)} /{" "}
              {formatCurrency(data.budget)}
            </Typography>
          </Grid>
          <BorderLinearProgress variant="determinate" value={data.progress} />
        </Grid>
        <Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Essentials</Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              <span>£</span> {formatCurrency(data.spent)} /{" "}
              {formatCurrency(data.budget)}
            </Typography>
          </Grid>
          <BorderLinearProgress variant="determinate" value={data.progress} />
        </Grid>
        <Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Loans</Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              <span>£</span> {formatCurrency(data.spent)} /{" "}
              {formatCurrency(data.budget)}
            </Typography>
          </Grid>
          <BorderLinearProgress variant="determinate" value={data.progress} />
        </Grid>
        <Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Luxury</Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              <span>£</span> {formatCurrency(data.spent)} /{" "}
              {formatCurrency(data.budget)}
            </Typography>
          </Grid>
          <BorderLinearProgress variant="determinate" value={data.progress} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CategoriesSpent;
