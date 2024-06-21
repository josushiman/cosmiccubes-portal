import DefaultPageGrid from "../../commons/DefaultPageGrid";
import InfoCard from "../../commons/InfoCard";
import InfoCardGrid from "../../commons/InfoCardGrid";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import AverageCardBill from "./AverageCardBill";

const PastBills = () => {
  const { data, loading, error } = useAsync("/average-card-bill?months=6");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  // Include current month

  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={1}>
        <InfoCard value={5} name={"last month difference"} span={2} />
        <InfoCard value={5} name={"trend"} />
      </InfoCardGrid>
      <AverageCardBill data={data} />
    </DefaultPageGrid>
  );
};

export default PastBills;
