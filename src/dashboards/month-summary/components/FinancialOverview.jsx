import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";

const FinancialOverview = ({ data }) => {
  return (
    <CustomCard nopadding={"true"}>
      <Grid
        container
        flexDirection={"column"}
        rowGap={"0.75rem"}
        padding={"1.5rem 2rem"}
      >
        <Grid container justifyContent={"space-between"}>
          <Typography variant="subtitle1">Last month income</Typography>
          <Typography variant="subtitle1">
            <span>£</span> {formatCurrency(data.income, false, true)}
          </Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="subtitle1">Savings goal</Typography>
          <Grid container>
            <Typography variant="subtitle1" paddingRight={"0.25rem"}>
              ( <span>£</span> {formatCurrency(data.savings, false, true)} )
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="subtitle1">Bills & renewals</Typography>
          <Grid container>
            <Typography variant="subtitle1" paddingRight={"0.25rem"}>
              ( <span>£</span> {formatCurrency(data.bills, false, true)} )
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="subtitle1">Spent this month</Typography>
          <Grid container>
            <Typography variant="subtitle1" paddingRight={"0.25rem"}>
              ( <span>£</span> {formatCurrency(data.balance_spent, false, true)}{" "}
              )
            </Typography>
          </Grid>
        </Grid>
        <hr style={{ width: "100%", opacity: "25%" }} />
        <Grid container justifyContent={"space-between"}>
          <Typography variant="h5" fontWeight={500}>
            What&lsquo;s left:
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            <span>£</span> {formatCurrency(data.balance_available, false, true)}
          </Typography>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default FinancialOverview;
