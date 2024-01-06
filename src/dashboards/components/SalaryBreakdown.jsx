import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import useAsync from "../../hooks/useAsync";
import formatCurrency from "../../hooks/formatCurrency";

const SalaryBreakdown = () => {
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

  return (
    <Card>
      <Grid container flexDirection={"column"} rowGap={"1rem"} padding={"1rem"}>
        <Typography variant="subtitle1">Salary Breakdown</Typography>
        <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
          <Grid container justifyContent={"space-between"}>
            <Typography
              variant="body2"
              fontStyle={"italic"}
              paddingLeft={"0.75rem"}
            >
              Earnings
            </Typography>
            <Typography variant="body2">
              <span>£</span> {formatCurrency(data.amount)}
            </Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography
              variant="body2"
              fontStyle={"italic"}
              paddingLeft={"0.75rem"}
            >
              Tax & NI
            </Typography>
            <Typography variant="body2">
              <span>£</span> {formatCurrency(data.amount)}
            </Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography
              variant="body2"
              fontStyle={"italic"}
              paddingLeft={"0.75rem"}
            >
              Benefits
            </Typography>
            <Typography variant="body2">
              <span>£</span> {formatCurrency(data.amount)}
            </Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography
              variant="body2"
              fontStyle={"italic"}
              paddingLeft={"0.75rem"}
              fontWeight={800}
            >
              Net
            </Typography>
            <Typography variant="body2" fontWeight={800}>
              <span>£</span> {formatCurrency(data.amount)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SalaryBreakdown;
