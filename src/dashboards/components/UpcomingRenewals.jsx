import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
// import useAsync from "../../hooks/useAsync";

const UpcomingRenewals = () => {
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
        name: "Gym",
        days: 1,
        amount: 34.1,
      },
      {
        name: "Gym",
        days: 2,
        amount: 34.1,
      },
      {
        name: "Gym",
        days: 2,
        amount: 34.1,
      },
      {
        name: "Gym",
        days: 2,
        amount: 34.1,
      },
      {
        name: "Gym",
        days: 3,
        amount: 34.1,
      },
    ],
  };

  const upcomingRenewalsData = data.data.map((item, index) => (
    <Grid key={index} container columns={3} justifyContent={"space-between"}>
      <Typography variant="body2">{item.name}</Typography>
      <Typography variant="body2">
        {item.days} day{item.days > 1 ? "s" : ""}
      </Typography>
      <Typography variant="body2" fontWeight={300}>
        <span>£</span> {formatCurrency(item.amount)}
      </Typography>
    </Grid>
  ));

  return (
    <Card>
      <Grid container flexDirection={"column"} rowGap={"1rem"} padding={"1rem"}>
        <Typography variant="subtitle1">Upcoming Renewals</Typography>
        <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
          {upcomingRenewalsData}
        </Grid>
      </Grid>
    </Card>
  );
};

export default UpcomingRenewals;
