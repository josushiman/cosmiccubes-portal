import DefaultPageGrid from "../../commons/DefaultPageGrid";
import InfoCard from "../../commons/InfoCard";
import InfoCardGrid from "../../commons/InfoCardGrid";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import AverageCardBill from "./AverageCardBill";

const PastBills = () => {
  const { data, loading, error } = useAsync("/past-bills?months=6");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  // Include current month

  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={1}>
        <InfoCard
          value={data.summary.last_month_diff}
          name={"last month diff"}
          span={2}
        />
        <InfoCard
          icon={true}
          name={"trending"}
          value={data.summary.last_month_trend}
        />
      </InfoCardGrid>
      <AverageCardBill data={data.data} />
    </DefaultPageGrid>
  );
};

export default PastBills;
