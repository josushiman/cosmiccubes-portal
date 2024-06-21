import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";
import { ThickBorderLinearProgressWithBackground } from "../../../commons/BorderLinearProgress";
import InfoCardGrid from "../../../commons/InfoCardGrid";
import InfoCard from "../../../commons/InfoCard";

const Summary = ({ data, isCurrentMonth }) => {
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
        <Typography variant="caption" alignSelf={"end"}>
          <strong>£ {formatCurrency(balance_spent, false, true)}</strong> of{" "}
          <strong>£ {formatCurrency(balance_budget, false, true)}</strong> spent
          this month
        </Typography>
      );
    }

    const overSpent = balance_spent - balance_budget;

    return (
      <Typography variant="caption" alignSelf={"right"}>
        You {isCurrentMonth() ? "are" : "were"}{" "}
        <strong>£ {formatCurrency(overSpent, false, true)}</strong> over budget
      </Typography>
    );
  };

  return (
    <InfoCardGrid rows={2}>
      <InfoCard name="whats left" value={balance_available} span={2} />
      {isCurrentMonth() && <InfoCard name="days left" value={days_left} />}
      <InfoCard name="daily spend" value={daily_spend} />
      <CustomCard
        sx={{
          gridColumn: "span 2",
        }}
      >
        <Grid
          container
          flexDirection={"column"}
          height={"100%"}
          width={"100%"}
          justifyContent={"center"}
        >
          <ThickBorderLinearProgressWithBackground
            variant="determinate"
            value={progress}
          />
          <ProgressBarText />
        </Grid>
      </CustomCard>
    </InfoCardGrid>
  );
};

export default Summary;
