import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";
import { ThickBorderLinearProgressWithBackground } from "../../../commons/BorderLinearProgress";

const Summary = ({ data }) => {
  const {
    days_left,
    balance_available,
    balance_spent,
    balance_budget,
    daily_spend,
  } = data;

  let progress = (balance_spent / balance_budget) * 100;

  if (progress >= 100) {
    progress = 100;
  }

  const ProgressBarText = () => {
    if (progress < 100) {
      return (
        <Typography variant="body1">
          <strong>£ {formatCurrency(balance_spent, false, true)}</strong> of{" "}
          <strong>£ {formatCurrency(balance_budget, false, true)}</strong> spent
          this month
        </Typography>
      );
    }

    const overSpent = balance_spent - balance_budget;

    return (
      <Typography variant="body1">
        You are <strong>£ {formatCurrency(overSpent, false, true)}</strong> over
        budget
      </Typography>
    );
  };

  return (
    <CustomCard>
      <Grid
        container
        padding={"1.5rem 2rem"}
        rowGap={"1rem"}
        flexDirection={"column"}
      >
        <Grid
          container
          justifyContent={"space-between"}
          flexDirection={"row"}
          width={"100%"}
        >
          <Typography variant="h4" fontWeight={500}>
            £ {formatCurrency(balance_available, false, true)}
          </Typography>
          <hr style={{ opacity: "25%" }} />
          <Typography
            variant="body1"
            fontWeight={300}
            style={{
              alignSelf: "center",
            }}
          >
            {days_left} days left
          </Typography>
        </Grid>
        <ThickBorderLinearProgressWithBackground
          variant="determinate"
          value={progress}
        />
        <ProgressBarText />
        <hr style={{ width: "100%", opacity: "25%" }} />
        <Grid
          container
          justifyContent={"space-between"}
          flexDirection={"row"}
          width={"100%"}
        >
          <Typography variant="h5">Daily spend:</Typography>
          <Typography variant="h5" fontWeight={500}>
            £ {formatCurrency(daily_spend, false, true)}
          </Typography>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default Summary;
