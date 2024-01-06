import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import formatCurrency from "../../hooks/formatCurrency";

const EarnedVsSpent = () => {
  const { data, loading, error } = useAsync("/ynab/available-balance");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card>
      <Grid
        container
        justifyContent={"space-between"}
        rowGap={"1.5rem"}
        flexDirection={"column"}
        padding={"1rem"}
      >
        <Box>
          <Typography variant="subtitle1" paddingBottom={"0.5rem"}>
            Total Earned
          </Typography>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"1rem"}
            borderRadius={"0.5rem"}
            padding={"0 1rem"}
            sx={{
              backgroundColor: "#242424",
            }}
          >
            <span>£</span>
            <p>{formatCurrency(data.available)}</p>
          </Grid>
        </Box>
        <Box>
          <Typography variant="subtitle1" paddingBottom={"0.5rem"}>
            Total Spent
          </Typography>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"1rem"}
            borderRadius={"0.5rem"}
            padding={"0 1rem"}
            sx={{
              backgroundColor: "#242424",
            }}
          >
            <span>£</span>
            <p>{formatCurrency(data.available)}</p>
          </Grid>
        </Box>
      </Grid>
    </Card>
  );
};

export default EarnedVsSpent;
