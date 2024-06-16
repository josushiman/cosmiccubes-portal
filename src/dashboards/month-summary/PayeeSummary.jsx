import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import HandleDataLoad from "../../commons/HandleDataLoad";
import useAsync from "../../hooks/useAsync";
import PayeesChart from "./components/PayeesChart";
import CustomDataTable from "../../commons/CustomDataTable";
import InfoCardGrid from "../../commons/InfoCardGrid";
import InfoCard from "../../commons/InfoCard";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

// Payees broken down by:
//  Number of unique payees (no bills)
//  Payee spent on the most
//  Bar Graph on payees sort by most spent to least
//  Data Table below to allow filter and result (show the big spender by default)

const PayeeSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(`/payee-summary${timePeriod}`);

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
