import Grid from "@mui/material/Unstable_Grid2";
import DefaultPageGrid from "../../commons/DefaultPageGrid";
import InfoCard from "../../commons/InfoCard";
import InfoCardGrid from "../../commons/InfoCardGrid";
import LinkedInfoCard from "../../commons/LinkedInfoCard";
import Insurance from "./Insurance";
import LoanPortfolio from "./LoanPortfolio";
import CustomAccordion from "../../commons/CustomAccordion";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";

const LoansAndRenewalsOverview = () => {
  const { data, loading, error } = useAsync("/loans-renewals-overview");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }
  //  Count of: Direct debits, Loans, Subscriptions
  //  Total Credit amount being used
  //  TODO get credit utilisation stats. Save credit limit per account
  //  Total yearly sum of: Direct Debits, Loans, Renewals, Subscriptions
  //  TBD - What detail for each item?

  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={2}>
        <InfoCard name="credit util." value={data.credit.utilisation} />
        <InfoCard name="loans" value={data.counts.loans} />
        <InfoCard name="subscriptions" value={data.counts.subscriptions} />
        <InfoCard name="total credit" value={data.credit.total} span={2} />
        <LinkedInfoCard
          icon
          name="view all"
          navLink="/portal/admin/loans-and-renewals"
        />
      </InfoCardGrid>
      <Grid>
        <CustomAccordion
          name="insurance"
          value={data.month_totals.insurance}
          details={<Insurance />}
        />
        <CustomAccordion
          name="loans"
          value={data.month_totals.loans}
          details={<LoanPortfolio />}
        />
        <CustomAccordion
          name="subscriptions"
          value={data.month_totals.subscriptions}
          details={"blah"}
        />
      </Grid>
    </DefaultPageGrid>
  );
};

export default LoansAndRenewalsOverview;
