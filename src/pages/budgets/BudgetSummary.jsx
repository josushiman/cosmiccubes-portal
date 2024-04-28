import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";
import BudgetSummaryChart from "./BudgetSummaryChart";

const BudgetSummary = () => {
  const data = {
    total: 1234,
    on_track: 6,
    overspent: 12,
    categories: [
      {
        name: "Frequent",
        budgeted: 1231,
      },
      {
        name: "Work",
        budgeted: 123,
      },
      {
        name: "Giving",
        budgeted: 80,
      },
      {
        name: "Non-Monthly Expenses",
        budgeted: 210,
      },
    ],
  };

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
          Summary
        </Typography>
        <Typography variant="h5" fontWeight={500}>
          £ {formatCurrency(data.total, false, true)}
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container flexDirection={"column"} rowGap={"0.25rem"}>
        <BudgetSummaryChart data={data.categories} />
        <hr style={{ width: "100%", opacity: "5%", marginBottom: "0.25rem" }} />
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
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default BudgetSummary;
