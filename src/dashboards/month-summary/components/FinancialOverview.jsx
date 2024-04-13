import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import formatCurrency from "../../../hooks/formatCurrency";

const ChevronButton = ({ pageLink }) => {
  return (
    <Link to={pageLink}>
      <ChevronRightIcon
        sx={{
          opacity: "50%",
          color: "white",
        }}
      />
    </Link>
  );
};

const FinancialOverview = ({ data }) => {
  return (
    <CustomCard>
      <Grid
        container
        flexDirection={"column"}
        rowGap={"1rem"}
        padding={"1.5rem 2rem"}
      >
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Last month income:</Typography>
          <Typography variant="body1">
            <span>£</span> {formatCurrency(data.income)}
          </Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Savings:</Typography>
          <Grid container>
            <Typography variant="body1">
              <span>£</span> {formatCurrency(data.savings)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Upcoming bills:</Typography>
          <Grid container>
            <Typography variant="body1" paddingRight={"1rem"}>
              <span>£</span> {formatCurrency(data.bills)}
            </Typography>
            <ChevronButton pageLink={"/monthly-summary/bills"} />
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Spent this month:</Typography>
          <Grid container>
            <Typography variant="body1" paddingRight={"1rem"}>
              <span>£</span> {formatCurrency(data.balance_spent)}
            </Typography>
            <ChevronButton pageLink={"/monthly-summary/transactions"} />
          </Grid>
        </Grid>
        <hr style={{ width: "100%", opacity: "25%" }} />
        <Grid container justifyContent={"space-between"}>
          <Typography variant="h5" fontWeight={500}>
            What&lsquo;s left:
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            <span>£</span> {formatCurrency(data.balance_available)}
          </Typography>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default FinancialOverview;
