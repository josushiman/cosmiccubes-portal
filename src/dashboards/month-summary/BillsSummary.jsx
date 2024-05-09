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
import { BorderLinearProgressWithBackground } from "../../commons/BorderLinearProgress";
import HandleDataLoad from "../../commons/HandleDataLoad";

const BillsSummary = () => {
  const { data, loading, error } = useAsync("/upcoming-bills");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const SubCategoryList = ({ data, total_bills }) => {
    return data.map((value, index) => {
      const progress = (value.total / total_bills) * 100;

      return (
        <Grid key={index}>
          <Grid
            container
            justifyContent={"space-between"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="subtitle1" textTransform={"capitalize"}>
              {value.name}
            </Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              £ {formatCurrency(value.total)}
            </Typography>
          </Grid>
          <BorderLinearProgressWithBackground
            variant="determinate"
            value={progress}
          />
        </Grid>
      );
    });
  };

  const renewalsLength = data.renewals.length;
  const loansLength = data.loans.length;
  // TODO when none - show a diff message

  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
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
            <Typography>Loan Payments</Typography>
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
            {/* <SubCategoryList data={data.bills} total_bills={data.total_bills} /> */}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundImage: "unset",
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
              Loans
            </Typography>
            <Typography variant="h5" textAlign={"right"} width={"100%"}>
              £ {formatCurrency(data.total_loans, false, true)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundImage: "unset",
            borderBottomLeftRadius: "0.25rem",
            borderBottomRightRadius: "0.25rem",
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
              Renewals
            </Typography>
            <Typography variant="h5" textAlign={"right"} width={"100%"}>
              £ {formatCurrency(data.total_renewals, false, true)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default BillsSummary;
