import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
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

  // TODO replace negative sign when resolved on Backend
  let progress = (-balance_spent / balance_budget) * 100;

  if (progress >= 100) {
    progress = 100;
  }

  return (
    <Card>
      <Grid container padding={"2rem"} rowGap={"1rem"} flexDirection={"column"}>
        <Grid
          container
          justifyContent={"space-between"}
          flexDirection={"row"}
          width={"100%"}
        >
          <Typography variant="h4" fontWeight={500}>
            £ {formatCurrency(balance_available)}
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
        <Typography variant="body1">
          {/* TODO replace negative sign when resolved on Backend*/}
          <strong>£ {formatCurrency(-balance_spent)}</strong> of{" "}
          <strong>£ {formatCurrency(balance_budget)}</strong> spent this month
        </Typography>
        <hr style={{ width: "100%", opacity: "25%" }} />
        <Grid
          container
          justifyContent={"space-between"}
          flexDirection={"row"}
          width={"100%"}
        >
          <Typography variant="h5">Daily spend:</Typography>
          <Typography variant="h5" fontWeight={500}>
            £ {formatCurrency(daily_spend)}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Summary;
