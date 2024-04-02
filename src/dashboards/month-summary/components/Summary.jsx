import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
// import formatCurrency from "../../../hooks/formatCurrency";

const BorderLinearProgressWithBackground = styled(LinearProgress)(
  ({ theme }) => ({
    height: 25,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: "#C06969",
    },
  })
);

const Summary = ({ data }) => {
  const {
    days_left,
    balance_available,
    balance_spent,
    balance_budget,
    daily_spend,
  } = data;

  // console.table(data);

  return (
    <Card>
      <Grid container padding={"2rem"} rowGap={"1rem"} flexDirection={"column"}>
        <Grid
          container
          justifyContent={"space-between"}
          flexDirection={"row"}
          width={"100%"}
        >
          <Typography variant="h3" fontWeight={500}>
            £ {balance_available}
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
        {/* TODO replace negative sign when resolved on Backend*/}
        <BorderLinearProgressWithBackground
          variant="determinate"
          value={balance_budget / -balance_spent}
        />
        <Typography variant="body1">
          {/* TODO replace negative sign when resolved on Backend*/}
          <strong>£ {-balance_spent}</strong> of{" "}
          <strong>£ {balance_budget}</strong> spent this month
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
            £ {daily_spend}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Summary;
