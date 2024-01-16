import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
import useAsync from "../../hooks/useAsync";

const EarnedVsSpent = ({ months, year, month }) => {
  const params = months
    ? `?months=${months}`
    : year && month
    ? `?year=${year}&month=${month}`
    : year
    ? `?year=${year}`
    : `?month=${month}`;
  const urlParam = `/ynab/earned-vs-spent${params}`;
  const { data, loading, error } = useAsync(urlParam);

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  // // Example output
  // const data = {
  //   since_date: "12/10/2023",
  //   earned: 6837.27,
  //   spent: -2348.11,
  // };

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
            <p>{formatCurrency(data.earned)}</p>
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
            <p>{formatCurrency(data.spent)}</p>
          </Grid>
        </Box>
      </Grid>
    </Card>
  );
};

export default EarnedVsSpent;
