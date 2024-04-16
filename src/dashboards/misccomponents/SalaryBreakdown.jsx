import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import useAsync from "../../hooks/useAsync";
import formatCurrency from "../../hooks/formatCurrency";

const SalaryBreakdown = () => {
  //   const { data, loading, error } = useAsync("/ynab/available-balance");

  // Example output
  const data = {
    earnings: 9500.55,
    tax_ni: 3400.12,
    benefits: 63.08,
    net: 5238.23,
  };

  //   if (loading || !data) {
  //     // Add skeleton
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     // Pass generic error message
  //     return <div>Error: {error.message}</div>;
  //   }

  const salaryBreakdownData = ["earnings", "tax_ni", "benefits", "net"].map(
    (item, index) => (
      <Grid key={index} container justifyContent={"space-between"}>
        <Typography
          variant="body2"
          fontStyle={"italic"}
          paddingLeft={"0.75rem"}
          textTransform={"capitalize"}
        >
          {item == "tax_ni" ? "Tax & NI" : item}
        </Typography>
        <Typography variant="body2">
          <span>£</span> {formatCurrency(data[item])}
        </Typography>
      </Grid>
    )
  );

  return (
    <Card>
      <Grid container flexDirection={"column"} rowGap={"1rem"} padding={"1rem"}>
        <Typography variant="subtitle1">Salary Breakdown</Typography>
        <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
          {salaryBreakdownData}
        </Grid>
      </Grid>
    </Card>
  );
};

export default SalaryBreakdown;
