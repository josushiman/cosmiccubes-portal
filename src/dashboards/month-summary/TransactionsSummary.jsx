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
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { CustomCard } from "../../commons/CustomCard";
import Transactions from "./components/Transactions";
import HandleDataLoad from "../../commons/HandleDataLoad";
import formatCurrency from "../../hooks/formatCurrency";

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
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <Grid
        container
        display={"grid"}
        columnGap={"0.5rem"}
        rowGap={"0.5rem"}
        gridTemplateRows={"6rem"}
        gridTemplateColumns={"repeat(3, 1fr)"}
      >
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Typography variant="h5">
              £ {formatCurrency(data.average_purchase, false, true)}
            </Typography>
            <Typography>Average</Typography>
          </Grid>
        </CustomCard>
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
            gridColumn: "span 2",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            columns={2}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Grid container alignItems={"center"}>
              <Typography variant="h5">
                £ {formatCurrency(data.biggest_purchase.amount, false, true)}
              </Typography>
            </Grid>
            <Typography>Biggest</Typography>
          </Grid>
        </CustomCard>
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Typography variant="h5">{data.refunds.count}</Typography>
            <Typography>Refunds</Typography>
          </Grid>
        </CustomCard>
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Typography variant="h5">{data.transaction_count}</Typography>
            <Typography>Transactions</Typography>
          </Grid>
        </CustomCard>
        <Link
          to={"/past-bills"}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <CustomCard
            sx={{
              width: "100%",
              height: "100%",
            }}
            backgroundcolor={"#F0F0C9"}
          >
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gridTemplateRows={"1fr auto"}
              padding={"1rem"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyItems={"center"}
              color={"#121212"}
            >
              <LeaderboardIcon />
              <Typography>Past bills</Typography>
            </Grid>
          </CustomCard>
        </Link>
      </Grid>
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
                <Transactions data={data.transactions} accountId={value.id} />
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
            <Transactions data={data.refunds.transactions} />
          </AccordionDetails>
        </CustomAccordion>
      </Grid>
    </Grid>
  );
};

export default TransactionsSummary;
