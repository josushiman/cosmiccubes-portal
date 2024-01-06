import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import formatCurrency from "../../hooks/formatCurrency";

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
