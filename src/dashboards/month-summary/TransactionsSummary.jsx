import { useCallback, useContext, useState } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import Grid from "@mui/material/Unstable_Grid2";
import CreditSummary from "./components/CreditSummary";
import Transactions from "./components/Transactions";
import TimePeriod from "../commons/TimePeriod";
import HandleDataLoad from "../../commons/HandleDataLoad";

const TransactionsSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(
    `/transaction-summary${timePeriod}`
  );

  const [accountId, setAccountId] = useState(undefined);

  const setAccountType = useCallback(
    (value) => {
      if (value == accountId) {
        setAccountId(undefined);
      } else {
        setAccountId(value);
      }
    },
    [accountId]
  );

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }
  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <TimePeriod />
      <CreditSummary
        data={data.summary}
        accountId={accountId}
        setAccountType={setAccountType}
      />
      <Transactions data={data.transactions} accountId={accountId} />
    </Grid>
  );
};

export default TransactionsSummary;
