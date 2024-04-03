import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../../hooks/formatCurrency";

const FinancialOverview = ({ data }) => {
  // "income_expenses": {
  //     "balance_available": 2195.88,
  //     "balance_spent": -44.35,
  //     "income": 5614.14,
  //     "bills": -3462.61
  // }

  return (
    <Card>
      <Grid container flexDirection={"column"} rowGap={"1rem"} padding={"2rem"}>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Last month income:</Typography>
          <Typography variant="body1">
            <span>£</span> {formatCurrency(data.income)}
          </Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Upcoming bills:</Typography>
          <Typography variant="body1">
            <span>£</span> {formatCurrency(-data.bills)}
          </Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Spent this month:</Typography>
          <Typography variant="body1">
            <span>£</span> {formatCurrency(-data.balance_spent)}
          </Typography>
        </Grid>
        <hr style={{ width: "100%", opacity: "25%" }} />
        <Grid container justifyContent={"space-between"}>
          <Typography variant="h5" fontWeight={500}>
            What`&lsquo;s left:
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            <span>£</span> {formatCurrency(data.balance_available)}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FinancialOverview;
