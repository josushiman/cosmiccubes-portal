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
      <BudgetSummaryChart data={data.categories} />
    </CustomCard>
  );
};

// Summary - total amount budgeted
// Pie chart with the main categories for what they take up in terms of budget
// On Track count
// Overspent count
// Click through for details

export default BudgetSummary;
