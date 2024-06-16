import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import BudgetSummary from "./BudgetSummary";
import BudgetsNeeded from "./BudgetsNeeded";
import InfoCardGrid from "../../commons/InfoCardGrid";
import InfoCard from "../../commons/InfoCard";
import LinkedInfoCard from "../../commons/LinkedInfoCard";
import TotalCard from "../../commons/TotalCard";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

const BudgetDashboard = () => {
  const { data, loading, error } = useAsync("/budgets-dashboard");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <DefaultPageGrid>
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
    </DefaultPageGrid>
  );
};

export default BudgetDashboard;
