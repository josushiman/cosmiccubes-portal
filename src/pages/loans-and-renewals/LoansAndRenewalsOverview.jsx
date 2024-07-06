import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import DefaultPageGrid from "../../commons/DefaultPageGrid";
import formatCurrency from "../../hooks/formatCurrency";
import { CustomCard } from "../../commons/CustomCard";
import { ThickBorderLinearProgressWithBackground } from "../../commons/BorderLinearProgress";
import InfoCard from "../../commons/InfoCard";
import InfoCardGrid from "../../commons/InfoCardGrid";
import LinkedInfoCard from "../../commons/LinkedInfoCard";
import LoanPortfolio from "./LoanPortfolio";
import CustomAccordion from "../../commons/CustomAccordion";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import Insurance from "./Insurance";

const LoansAndRenewalsOverview = () => {
  const { data, loading, error } = useAsync("/loans-renewals-overview");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={3}>
        <InfoCard
          name="total credit spent"
          value={data.credit.total}
          span={2}
        />
        <LinkedInfoCard
          icon
          name="view all"
          navLink="/portal/admin/loans-and-renewals"
        />
        <InfoCard name="credit util." value={data.credit.utilisation} />
        <CustomCard
          sx={{
            gridColumn: "span 2",
          }}
        >
          <Grid
            container
            flexDirection={"column"}
            height={"100%"}
            width={"100%"}
            justifyContent={"center"}
          >
            <ThickBorderLinearProgressWithBackground
              variant="determinate"
              value={data.credit.utilisation}
            />
            <Typography variant="caption" alignSelf={"end"}>
              <strong>
                £ {formatCurrency(data.credit.total, false, true)}
              </strong>{" "}
              of{" "}
              <strong>
                £ {formatCurrency(data.credit.limit, false, true)}
              </strong>
            </Typography>
          </Grid>
        </CustomCard>
        <InfoCard name="insurance" value={data.counts.insurance} />
        <InfoCard name="loans" value={data.counts.loans} />
        <InfoCard name="subscriptions" value={data.counts.subscriptions} />
      </InfoCardGrid>
      <Grid container flexDirection={"column"}>
        <Typography
          variant="caption"
          alignSelf={"flex-end"}
          marginRight={"0.5rem"}
        >
          Cost per year
        </Typography>
        <CustomAccordion
          name="insurance"
          value={data.totals.insurance}
          details={<Insurance />}
          // details={<SwipeableGrid components={components} />}
        />
        <CustomAccordion
          name="loans"
          value={data.totals.loans}
          details={<LoanPortfolio />}
        />
        <CustomAccordion
          name="subscriptions"
          value={data.totals.subscriptions}
          details={"blah"}
        />
      </Grid>
    </DefaultPageGrid>
  );
};

export default LoansAndRenewalsOverview;
