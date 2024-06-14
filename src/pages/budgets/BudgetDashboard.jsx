import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import BudgetSummary from "./BudgetSummary";
import BudgetsNeeded from "./BudgetsNeeded";
import InfoCardGrid from "../../commons/InfoCardGrid";
import InfoCard from "../../commons/InfoCard";
import LinkedInfoCard from "../../commons/LinkedInfoCard";
import TotalCard from "../../commons/TotalCard";

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
      <TotalCard value={data.total} />
      <BudgetSummary data={data} />
      <BudgetsNeeded />
    </Grid>
  );
};

export default BudgetDashboard;
