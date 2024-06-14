import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";
import BudgetSummary from "./BudgetSummary";
import BudgetsNeeded from "./BudgetsNeeded";
import InfoCardGrid from "../../commons/InfoCardGrid";
import InfoCard from "../../commons/InfoCard";
import LinkedInfoCard from "../../commons/LinkedInfoCard";

const BudgetDashboard = () => {
  const { data, loading, error } = useAsync("/budgets-dashboard");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
      <InfoCardGrid rows={1}>
        <InfoCard name="on track" value={data.on_track} />
        <InfoCard name="overspent" value={data.overspent} />
        <LinkedInfoCard
          icon={true}
          name="view all"
          navLink="/portal/admin/budgets"
        />
      </InfoCardGrid>
      <CustomCard>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Typography variant="h5" fontWeight={300}>
            Total budgeted
          </Typography>
          <Typography variant="h4" fontWeight={500}>
            £ {formatCurrency(data.total, false, true)}
          </Typography>
        </Grid>
      </CustomCard>
      <BudgetSummary data={data} />
      <BudgetsNeeded />
    </Grid>
  );
};

export default BudgetDashboard;
