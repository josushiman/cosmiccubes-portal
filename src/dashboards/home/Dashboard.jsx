// import { Grid } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AvailableBalance from "../components/AvailableBalance";
import CardBalances from "../components/CardBalances";
import SpentVsBudget from "../components/SpentVsBudget";

const Dashboard = () => {
  return (
    <Grid container style={{ padding: "1rem" }} spacing={2}>
      <Grid xs={2}>
        <AvailableBalance />
      </Grid>
      <Grid xs={6} style={{ alignSelf: "flex-end" }}>
        <CardBalances />
      </Grid>
      <Grid xs={4} style={{ alignSelf: "flex-end" }}>
        <SpentVsBudget />
      </Grid>
      <Grid xs={2}>
        {/* <Card>
          <CardHeader title="Welcome to the administration" />
          <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card> */}
        earned and spent
      </Grid>
      <Grid xs={6}>income and expenses</Grid>
      <Grid xs={4}>categories overview</Grid>
    </Grid>
  );
};

export default Dashboard;
