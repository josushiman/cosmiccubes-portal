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

  // Example output
  const data = {
    since_date: "12/10/2023",
    data: [
      {
        name: "AMEX",
        date: "12/12/2023",
      },
      {
        name: "Barclays CC",
        date: "28/12/2023",
      },
      {
        name: "HSBC CC",
        date: "01/12/2023",
      },
    ],
  };

  const creditLastPaidData = data.data.map((item, index) => (
    <Grid key={index} container justifyContent={"space-between"}>
      <Typography variant="body2">{item.name}</Typography>
      <Typography variant="body2">{item.date}</Typography>
    </Grid>
  ));

  return (
    <Card>
      <Grid container flexDirection={"column"} rowGap={"1rem"} padding={"1rem"}>
        <Typography variant="subtitle1">Credit Last Paid Dates</Typography>
        <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
          {creditLastPaidData}
        </Grid>
      </Grid>
    </Card>
  );
};

export default CreditLastPaid;
