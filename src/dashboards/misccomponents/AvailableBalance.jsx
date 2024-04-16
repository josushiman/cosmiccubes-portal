import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
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

  // // Example output
  // const data = { total: 21012.91, spent: -6246.45, available: 14766.46 };

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowGap={"0.25rem"}
      flexDirection={"column"}
    >
      <Typography variant="h4">Available Balance</Typography>
      <Typography variant="h5" fontWeight={300}>
        <span>£</span> {formatCurrency(data.available)}
      </Typography>
    </Grid>
  );
};

export default AvailableBalance;
