import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";

const CreditLastPaid = ({ months, year, month }) => {
  const params = months
    ? `?months=${months}`
    : year && month
    ? `?year=${year}&month=${month}`
    : year
    ? `?year=${year}`
    : `?month=${month}`;
  const urlParam = `/ynab/last-paid-date-for-accounts${params}`;

  const { data, loading, error } = useAsync(urlParam);

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  // // Example output
  // const data = {
  //   since_date: "12/10/2023",
  //   data: [
  //     {
  //       id: 'UUID',
  //       account_name: "AMEX",
  //       date: "12/12/2023",
  //       amount: 148
  //     },
  //   ],
  // };

  const creditLastPaidData = data.data.map((item, index) => (
    <Grid key={index} container justifyContent={"space-between"}>
      <Typography variant="body2">{item.account_name}</Typography>
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
