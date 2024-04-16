import dayjs from "dayjs";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";

const UpcomingRenewals = ({ data }) => {
  if (data.length < 1) {
    return null;
  }

  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <CustomCard>
      <Grid
        container
        flexDirection={"column"}
        rowGap={"1rem"}
        padding={"1.5rem 2rem"}
      >
        <Typography variant="h6">Upcoming renewals</Typography>
        {data.map((value, index) => {
          let dayValue = dayjs(value.date, "YYYY-MM-DD");

          return (
            <Grid container key={index} flexDirection={"column"}>
              <Grid
                container
                display={"grid"}
                gridTemplateColumns={"auto 1fr 33%"}
                gridTemplateRows={"1.25rem"}
                alignItems={"start"}
              >
                <Typography variant="subtitle1">{value.name}</Typography>
                <Typography variant="subtitle1" justifySelf={"flex-end"}>
                  {dayValue.date()}
                  <Typography variant="caption">
                    {getOrdinalSuffix(dayValue.date())}
                  </Typography>{" "}
                  {dayValue.format("MMM")}
                </Typography>
                <Typography variant="body1" justifySelf={"flex-end"}>
                  £ {formatCurrency(value.amount, false, false)}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </CustomCard>
  );
};

export default UpcomingRenewals;
