import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import formatCurrency from "../../../hooks/formatCurrency";

const SpentButton = () => {
  return (
    <Link to="/monthly-summary/transactions">
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
              <span>£</span> {formatCurrency(1000)}{" "}
              {/* TODO replace with actual savings from DB */}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Upcoming bills:</Typography>
          <Typography variant="body1">
            <span>£</span> {formatCurrency(data.bills)}
          </Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="body1">Spent this month:</Typography>
          <Grid container>
            <Typography variant="body1" paddingRight={"1rem"}>
              <span>£</span> {formatCurrency(data.balance_spent)}
            </Typography>
            <SpentButton />
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
