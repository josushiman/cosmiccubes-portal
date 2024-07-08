import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import formatCurrency from "../../hooks/formatCurrency";
import { ThickBorderLinearProgressWithBackground } from "../../commons/BorderLinearProgress";
// import LoanPortfolio from "./LoanPortfolio";

dayjs.extend(advancedFormat);

const LoansOverview = ({ loans }) => {
  return (
    <Grid container flexDirection={"column"} rowGap={"1rem"}>
      {loans.map((value, index) => (
        <Grid container key={index} flexDirection={"column"} rowGap={"0.5rem"}>
          <Typography variant="body2" textAlign={"right"}>
            {value.name} - {value.provider}
          </Typography>
          <Grid
            container
            flexDirection={"column"}
            height={"100%"}
            width={"100%"}
            justifyContent={"center"}
          >
            <ThickBorderLinearProgressWithBackground
              variant="determinate"
              value={value.progress}
            />
            <Typography variant="caption" alignSelf={"end"}>
              <strong>
                £ {formatCurrency(value.paid_balance, false, true)}
              </strong>{" "}
              of{" "}
              <strong>
                £ {formatCurrency(value.starting_balance, false, true)}
              </strong>
            </Typography>
            <Typography variant="caption" textAlign={"right"}>
              End date: {dayjs(value.end_date).format("Do MMM `YY")}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

// {/* <LoanPortfolio /> */}
export default LoansOverview;
