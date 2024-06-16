import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import HandleDataLoad from "../../commons/HandleDataLoad";
import formatCurrency from "../../hooks/formatCurrency";
import CustomDataTable from "../../commons/CustomDataTable";
import InfoCardGrid from "../../commons/InfoCardGrid";
import InfoCard from "../../commons/InfoCard";
import LinkedInfoCard from "../../commons/LinkedInfoCard";
import TotalCard from "../../commons/TotalCard";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

// Top spenders
//  - Most common payee?

const CustomAccordion = styled(Accordion)(() => ({
  "&.Mui-disabled": {
    backgroundColor: "#121212",
  },
}));

const TransactionsSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(
    `/transaction-summary${timePeriod}`
  );

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }
  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={2}>
        <InfoCard name="average" value={data.average_purchase} />
        <InfoCard
          name="biggest"
          value={data.biggest_purchase.amount}
          span={2}
        />
        <InfoCard name="refunds" value={data.refunds.count} />
        <InfoCard name="transactions" value={data.transaction_count} />
        <LinkedInfoCard icon={true} name="past bills" navLink="/past-bills" />
      </InfoCardGrid>
      <TotalCard value={data.total} />
      <Grid>
        {data.accounts.map((value, index) => {
          return (
            <CustomAccordion
              key={index}
              sx={{
                backgroundImage: "unset",
                borderTopLeftRadius: "0.25rem",
                borderTopRightRadius: "0.25rem",
              }}
              disabled={value.balance < 1 && true}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  variant="h6"
                  fontWeight={300}
                  sx={{ alignSelf: "center", width: "50%", flexShrink: 0 }}
                >
                  {value.name}
                </Typography>
                {value.balance > 0 && (
                  <Typography variant="h5" textAlign={"right"} width={"100%"}>
                    ( £ {formatCurrency(value.balance, false, true)} )
                  </Typography>
                )}
              </AccordionSummary>
              <AccordionDetails>
                <CustomDataTable
                  data={data.transactions}
                  accountId={value.id}
                  showTransactions={true}
                />
              </AccordionDetails>
            </CustomAccordion>
          );
        })}
        <CustomAccordion
          sx={{
            backgroundImage: "unset",
            borderTopLeftRadius: "0.25rem",
            borderTopRightRadius: "0.25rem",
          }}
          disabled={data.refunds.count < 1 && true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              variant="h6"
              fontWeight={300}
              sx={{ alignSelf: "center", width: "50%", flexShrink: 0 }}
            >
              Refunds
            </Typography>
            {data.refunds.count > 0 && (
              <Typography variant="h5" textAlign={"right"} width={"100%"}>
                £ {formatCurrency(data.refunds.total, false, true)}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <CustomDataTable
              data={data.refunds.transactions}
              showTransactions={true}
            />
          </AccordionDetails>
        </CustomAccordion>
      </Grid>
    </DefaultPageGrid>
  );
};

export default TransactionsSummary;
