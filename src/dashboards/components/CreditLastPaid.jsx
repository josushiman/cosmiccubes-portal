import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import useAsync from "../../hooks/useAsync";

const CreditLastPaid = () => {
  //   const { data, loading, error } = useAsync("/ynab/available-balance");

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
        <Typography variant="subtitle1">Credit Last Paid Dates</Typography>
        <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="body2">AMEX</Typography>
            <Typography variant="body2">12/12/2023</Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="body2">Barclays CC</Typography>
            <Typography variant="body2">28/12/2023</Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="body2">HSBC CC</Typography>
            <Typography variant="body2">01/12/2023</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CreditLastPaid;
