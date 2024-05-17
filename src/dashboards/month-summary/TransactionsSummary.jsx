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
import { CustomCard } from "../../commons/CustomCard";
import Transactions from "./components/Transactions";
import HandleDataLoad from "../../commons/HandleDataLoad";
import formatCurrency from "../../hooks/formatCurrency";

// Average credit card bill, trends?
// Top spenders
//  - Biggest purchase
//  - Most common purchase & payee?

const TransactionsSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(
    `/transaction-summary${timePeriod}`
  );

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }
  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <CustomCard
        sx={{
          padding: "1.5rem 1rem",
        }}
      >
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Typography variant="h5" fontWeight={300}>
            Total
          </Typography>
          <Typography variant="h4" fontWeight={500}>
            £ {formatCurrency(data.total, false, true)}
          </Typography>
        </Grid>
      </CustomCard>
      <Grid>
        {data.accounts.map((value, index) => {
          return (
            <Accordion
              key={index}
              sx={{
                backgroundImage: "unset",
                borderTopLeftRadius: "0.25rem",
                borderTopRightRadius: "0.25rem",
              }}
              defaultExpanded={value.name == "BA AMEX" && true}
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
                <Typography variant="h5" textAlign={"right"} width={"100%"}>
                  £ {formatCurrency(value.balance, false, true)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Transactions data={data.transactions} accountId={value.id} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default TransactionsSummary;
