import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import useAsync from "../../hooks/useAsync";

const SpentVsBudget = () => {
  const {
    data: realData, // TODO change this to data
    loading,
    error,
  } = useAsync("/ynab/available-balance"); // TODO replace with real endpoint.

  // Example output
  const data = {
    spent: 1200.34,
    budget: 3500,
    progress: 34,
  };

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      <Typography variant="h6" style={{ alignSelf: "flex-end" }}>
        Spent vs Budget
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.125rem",
          color: "#C06969",
        }}
      >
        <Typography
          variant="body1"
          style={{ alignSelf: "flex-end", color: "white" }}
        >
          <span>£</span> {data.spent} / {data.budget}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={data.progress}
          color="inherit"
        />
      </Box>
    </Box>
  );
};

export default SpentVsBudget;
