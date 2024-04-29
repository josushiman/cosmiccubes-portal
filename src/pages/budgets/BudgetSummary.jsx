import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import formatCurrency from "../../hooks/formatCurrency";
import BudgetSummaryChart from "./BudgetSummaryChart";

const BudgetSummary = () => {
  const { data, loading, error } = useAsync("/budgets-summary");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <CustomCard
      sx={{
        padding: "1.5rem 2rem",
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
      >
        <Typography variant="h5" fontWeight={300}>
          Total budgeted
        </Typography>
        <Typography variant="h5" fontWeight={500}>
          £ {formatCurrency(data.total, false, true)}
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container flexDirection={"column"} rowGap={"0.25rem"}>
        <BudgetSummaryChart data={data.categories} />
        {/* <hr style={{ width: "100%", opacity: "5%", marginBottom: "0.25rem" }} />  TODO
        <Grid container justifyContent={"space-between"}>
          <Typography>On track</Typography>
          <Typography>
            <strong>{data.on_track}</strong>
          </Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography>Overspent</Typography>
          <Typography>
            <strong>{data.overspent}</strong>
          </Typography>
        </Grid> */}
      </Grid>
    </CustomCard>
  );
};

export default BudgetSummary;
