import { Box, Typography } from "@mui/material";
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

  return (
    <Box>
      <Typography variant="h4">Available Balance</Typography>
      <Typography variant="h5" style={{ fontWeight: 300 }}>
        <span>£</span> {data.available}
      </Typography>
    </Box>
  );
};

export default AvailableBalance;
