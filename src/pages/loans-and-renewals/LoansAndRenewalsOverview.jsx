import Grid from "@mui/material/Unstable_Grid2";
import DefaultPageGrid from "../../commons/DefaultPageGrid";
import InfoCard from "../../commons/InfoCard";
import InfoCardGrid from "../../commons/InfoCardGrid";
import LinkedInfoCard from "../../commons/LinkedInfoCard";
import DirectDebits from "./DirectDebits";
import Insurance from "./Insurance";
import LoanPortfolio from "./LoanPortfolio";
import CustomAccordion from "../../commons/CustomAccordion";

const LoansAndRenewalsOverview = () => {
  //  Count of: Direct debits, Loans, Subscriptions
  //  Total Credit amount being used
  //  TODO get credit utilisation stats. Save credit limit per account
  //  Total yearly sum of: Direct Debits, Loans, Renewals, Subscriptions
  //  TBD - What detail for each item?

  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={2}>
        <InfoCard name="direct debits" value={2} />
        <InfoCard name="loans" value={4} />
        <InfoCard name="subscriptions" value={2} />
        <InfoCard name="total credit" value={12021} span={2} />
        <LinkedInfoCard
          icon
          name="view all"
          navLink="/portal/admin/loans-and-renewals"
        />
      </InfoCardGrid>
      <Grid>
        <CustomAccordion
          name="direct debits"
          value={1029}
          details={<DirectDebits />}
        />
        <CustomAccordion name="loans" value={128} details={<LoanPortfolio />} />
        <CustomAccordion name="renewals" value={2831} details={<Insurance />} />
        <CustomAccordion name="subscriptions" value={123} details={"blah"} />
      </Grid>
    </DefaultPageGrid>
  );
};

export default LoansAndRenewalsOverview;
