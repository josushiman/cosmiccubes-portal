import { Grid } from "@mui/material";
import AvailableBalance from "../components/AvailableBalance";
import CardBalances from "../components/CardBalances";

const Dashboard = () => {
  return (
    <Grid container style={{ marginTop: "1rem", paddingLeft: "1rem" }}>
      <Grid item xs={2}>
        <AvailableBalance />
      </Grid>
      <Grid item xs={6} style={{ alignSelf: "flex-end" }}>
        <CardBalances />
      </Grid>
      <Grid item xs={4}>
        spent vs budget
      </Grid>
      <Grid item xs={2}>
        {/* <Card>
          <CardHeader title="Welcome to the administration" />
          <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card> */}
        earned and spent
      </Grid>
      <Grid item xs={6}>
        income and expenses
      </Grid>
      <Grid item xs={4}>
        categories overview
      </Grid>
    </Grid>
  );
};

export default Dashboard;
