import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";

const AvailableBalance = () => {
  const { data, loading, error } = useAsync("/ynab/available-balance");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  // TODO turn this into a hook
  let GBPCurrency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).resolvedOptions().minimumFractionDigits;

  return (
    <Grid container justifyContent={"space-between"} rowGap={"1rem"}>
      <Typography variant="h4">Available Balance</Typography>
      <Typography variant="h5" fontWeight={300}>
        <span>£</span>{" "}
        {data.available.toLocaleString("en-GB", {
          minimumFractionDigits: GBPCurrency,
        })}
      </Typography>
    </Grid>
  );
};

export default AvailableBalance;
