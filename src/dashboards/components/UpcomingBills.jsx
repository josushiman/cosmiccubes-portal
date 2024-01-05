import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import useAsync from "../../hooks/useAsync";

const UpcomingBills = () => {
  //   const { data, loading, error } = useAsync("/ynab/available-balance");

  // Example output
  const data = {
    spent: 1200.34,
    budget: 3500,
    amount: 34.1,
  };

  //   if (loading || !data) {
  //     // Add skeleton
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     // Pass generic error message
  //     return <div>Error: {error.message}</div>;
  //   }

  // TODO turn this into a hook
  let GBPCurrency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).resolvedOptions().minimumFractionDigits;

  return (
    <Card>
      <Grid container flexDirection={"column"} rowGap={"1rem"} padding={"1rem"}>
        <Typography variant="subtitle1">Upcoming Bills</Typography>
        <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
          <Grid container columns={3} justifyContent={"space-between"}>
            <Typography variant="body2">Gym</Typography>
            <Typography variant="body2">1 day</Typography>
            <Typography variant="body2" fontWeight={300}>
              <span>£</span>{" "}
              {data.amount.toLocaleString("en-GB", {
                minimumFractionDigits: GBPCurrency,
              })}
            </Typography>
          </Grid>
          <Grid container columns={3} justifyContent={"space-between"}>
            <Typography variant="body2">Gym</Typography>
            <Typography variant="body2">1 day</Typography>
            <Typography variant="body2" fontWeight={300}>
              <span>£</span>{" "}
              {data.amount.toLocaleString("en-GB", {
                minimumFractionDigits: GBPCurrency,
              })}
            </Typography>
          </Grid>
          <Grid container columns={3} justifyContent={"space-between"}>
            <Typography variant="body2">Gym</Typography>
            <Typography variant="body2">1 day</Typography>
            <Typography variant="body2" fontWeight={300}>
              <span>£</span>{" "}
              {data.amount.toLocaleString("en-GB", {
                minimumFractionDigits: GBPCurrency,
              })}
            </Typography>
          </Grid>
          <Grid container columns={3} justifyContent={"space-between"}>
            <Typography variant="body2">Gym</Typography>
            <Typography variant="body2">1 day</Typography>
            <Typography variant="body2" fontWeight={300}>
              <span>£</span>{" "}
              {data.amount.toLocaleString("en-GB", {
                minimumFractionDigits: GBPCurrency,
              })}
            </Typography>
          </Grid>
          <Grid container columns={3} justifyContent={"space-between"}>
            <Typography variant="body2">Gym</Typography>
            <Typography variant="body2">1 day</Typography>
            <Typography variant="body2" fontWeight={300}>
              <span>£</span>{" "}
              {data.amount.toLocaleString("en-GB", {
                minimumFractionDigits: GBPCurrency,
              })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UpcomingBills;
