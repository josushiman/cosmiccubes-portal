import useAsync from "../../hooks/useAsync";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";
import HandleDataLoad from "../../commons/HandleDataLoad";
import CustomDataTable from "../../commons/CustomDataTable";

const BillsSummary = () => {
  const { data, loading, error } = useAsync("/upcoming-bills");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const renewalsLength = data.renewals.length;
  const loansLength = data.loans.length;

  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        columnGap={"0.5rem"}
        gridTemplateRows={"6rem"}
      >
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            flexDirection={"column"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h5">{data.count_bills}</Typography>
            <Typography>Bills</Typography>
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
            flexDirection={"column"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h5">{renewalsLength}</Typography>
            <Typography>Renewals</Typography>
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
            flexDirection={"column"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h5">{loansLength}</Typography>
            <Typography>Loans</Typography>
          </Grid>
        </CustomCard>
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
        <Accordion
          sx={{
            backgroundImage: "unset",
            borderTopLeftRadius: "0.25rem",
            borderTopRightRadius: "0.25rem",
          }}
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
              Bills
            </Typography>
            <Typography variant="h5" textAlign={"right"} width={"100%"}>
              £ {formatCurrency(data.total_bills, false, true)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomDataTable data={data.bills} />
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundImage: "unset",
          }}
          defaultExpanded={loansLength > 0 ? true : false}
          disabled={loansLength > 0 ? false : true}
        >
          <AccordionSummary
            expandIcon={loansLength > 0 ? <ExpandMoreIcon /> : null}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              variant="h6"
              fontWeight={300}
              sx={{ alignSelf: "center", width: "50%", flexShrink: 0 }}
            >
              Loans
            </Typography>
            {loansLength > 0 ? (
              <Typography variant="h5" textAlign={"right"} width={"100%"}>
                £ {formatCurrency(data.total_loans, false, true)}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                textAlign={"right"}
                width={"100%"}
                alignSelf={"center"}
                fontStyle={"italic"}
              >
                None this month
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            {loansLength > 0 ? <CustomDataTable data={data.loans} /> : null}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundImage: "unset",
            borderBottomLeftRadius: "0.25rem",
            borderBottomRightRadius: "0.25rem",
          }}
          defaultExpanded={renewalsLength > 0 ? true : false}
          disabled={renewalsLength > 0 ? false : true}
        >
          <AccordionSummary
            expandIcon={renewalsLength > 0 ? <ExpandMoreIcon /> : null}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              variant="h6"
              fontWeight={300}
              sx={{ alignSelf: "center", width: "50%", flexShrink: 0 }}
            >
              Renewals
            </Typography>
            {renewalsLength > 0 ? (
              <Typography variant="h5" textAlign={"right"} width={"100%"}>
                £ {formatCurrency(data.total_renewals, false, true)}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                textAlign={"right"}
                width={"100%"}
                alignSelf={"center"}
                fontStyle={"italic"}
              >
                None this month
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            {renewalsLength > 0 ? (
              <CustomDataTable data={data.renewals} />
            ) : null}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default BillsSummary;
