import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Grid from "@mui/material/Unstable_Grid2";
// import useAsync from "../../hooks/useAsync";

const SubCategoriesSpent = () => {
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

  //   TODO make this useable by additional classes.
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#121212",
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: "#C06969",
    },
  }));

  //   Loop over a list to generate this stuff.
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
          <Grid
            container
            justifyContent={"space-between"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="subtitle1">Going Out</Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              <span>£</span> {data.spent}
            </Typography>
          </Grid>
          <BorderLinearProgress variant="determinate" value={data.progress} />
        </Grid>
        <Grid>
          <Grid
            container
            justifyContent={"space-between"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="subtitle1">Technology</Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              <span>£</span> {data.spent}
            </Typography>
          </Grid>
          <BorderLinearProgress variant="determinate" value={data.progress} />
        </Grid>
        <Grid>
          <Grid
            container
            justifyContent={"space-between"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="subtitle1">Groceries</Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              <span>£</span> {data.spent}
            </Typography>
          </Grid>
          <BorderLinearProgress variant="determinate" value={data.progress} />
        </Grid>
        <Grid>
          <Grid
            container
            justifyContent={"space-between"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="subtitle1">Coffee</Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              <span>£</span> {data.spent}
            </Typography>
          </Grid>
          <BorderLinearProgress variant="determinate" value={data.progress} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default SubCategoriesSpent;
