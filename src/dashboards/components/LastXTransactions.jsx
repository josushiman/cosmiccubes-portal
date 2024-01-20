import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
import useAsync from "../../hooks/useAsync";

const LastXTransactions = () => {
  const { data, loading, error } = useAsync(
    "/ynab/last-x-transactions?count=5"
  );

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
  //       payee: "Amazon",
  //       amount: 51.94,
  //       date: "02/01/2024",
  //       subcategory: "Technology",
  //     },
  //   ],
  // };

  const lastXTransactionsData = data.data.map((item, index) => (
    <Grid
      key={index}
      container
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Grid container justifyContent={"space-between"}>
        <Typography variant="subtitle1">{item.payee}</Typography>
        <Typography variant="subtitle1">
          £ {formatCurrency(item.amount)}
        </Typography>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography variant="caption" fontStyle={"italic"}>
          {item.subcategory}
        </Typography>
        <Typography variant="caption" fontStyle={"italic"}>
          {item.date}
        </Typography>
      </Grid>
    </Grid>
  ));

  return (
    <Card>
      <Grid
        container
        flexDirection={"column"}
        rowGap={"0.5rem"}
        padding={"1rem"}
      >
        {lastXTransactionsData}
      </Grid>
    </Card>
  );
};

export default LastXTransactions;
