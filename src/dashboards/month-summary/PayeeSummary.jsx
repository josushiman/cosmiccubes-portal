import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import HandleDataLoad from "../../commons/HandleDataLoad";
import useAsync from "../../hooks/useAsync";
import PayeesChart from "./components/PayeesChart";
import CustomDataTable from "../../commons/CustomDataTable";
import InfoCardGrid from "../../commons/InfoCardGrid";
import InfoCard from "../../commons/InfoCard";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

//  Data Table below to allow filter and result (show the big spender by default)
//  Payee nice name

const PayeeSummary = () => {
  let { categoryName, subcategoryName } = useParams();
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(
    categoryName
      ? `/categories-summary/${categoryName}/${subcategoryName}/payees${timePeriod}`
      : `/payee-summary${timePeriod}`
  );

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={1}>
        <InfoCard name="count" value={data.count} />
        <InfoCard name="topspender" value={data.topspender.total} span={2} />
      </InfoCardGrid>
      <PayeesChart data={data.data} payeeCount={data.count} />
      <CustomDataTable data={data.data} defaultRowsPerPage={10} />
    </DefaultPageGrid>
  );
};

export default PayeeSummary;
