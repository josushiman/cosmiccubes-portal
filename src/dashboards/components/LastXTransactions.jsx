import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import useAsync from "../../hooks/useAsync";

const LastXTransactions = () => {
  //   const { data, loading, error } = useAsync("/ynab/available-balance");

  //   if (loading || !data) {
  //     // Add skeleton
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     // Pass generic error message
  //     return <div>Error: {error.message}</div>;
  //   }

  return (
    <Card>
      <Grid
        container
        flexDirection={"column"}
        rowGap={"0.5rem"}
        padding={"1rem"}
      >
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Amazon</Typography>
            <Typography variant="subtitle1">£51.94</Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="caption" fontStyle={"italic"}>
              Technology
            </Typography>
            <Typography variant="caption" fontStyle={"italic"}>
              02/01/2024
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Amazon</Typography>
            <Typography variant="subtitle1">£51.94</Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="caption" fontStyle={"italic"}>
              Technology
            </Typography>
            <Typography variant="caption" fontStyle={"italic"}>
              02/01/2024
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Amazon</Typography>
            <Typography variant="subtitle1">£51.94</Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="caption" fontStyle={"italic"}>
              Technology
            </Typography>
            <Typography variant="caption" fontStyle={"italic"}>
              02/01/2024
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Amazon</Typography>
            <Typography variant="subtitle1">£51.94</Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="caption" fontStyle={"italic"}>
              Technology
            </Typography>
            <Typography variant="caption" fontStyle={"italic"}>
              02/01/2024
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">Amazon</Typography>
            <Typography variant="subtitle1">£51.94</Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="caption" fontStyle={"italic"}>
              Technology
            </Typography>
            <Typography variant="caption" fontStyle={"italic"}>
              02/01/2024
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default LastXTransactions;
