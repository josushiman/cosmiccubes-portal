import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import formatCurrency from "../../../hooks/formatCurrency";

const Trends = ({ data }) => {
  return (
    <CustomCard>
      <Grid container flexDirection={"column"} rowGap={"1rem"} padding={"2rem"}>
        <Grid container display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"}>
          <Typography
            variant="subtitle1"
            sx={{
              textDecoration: "underline",
            }}
          >
            Period
          </Typography>
          <Typography
            variant="subtitle1"
            justifySelf={"flex-end"}
            sx={{
              textDecoration: "underline",
            }}
          >
            Trend
          </Typography>
          <Typography
            variant="subtitle1"
            justifySelf={"flex-end"}
            sx={{
              textDecoration: "underline",
            }}
          >
            Avg spent
          </Typography>
        </Grid>
        {data.map((value, index) => {
          return (
            <Grid
              key={index}
              container
              display={"grid"}
              gridTemplateColumns={"auto 1fr 33%"}
              gridTemplateRows={"1rem"}
            >
              <Typography variant="body1">{value.period}</Typography>
              <Grid container columnGap={"1rem"} justifySelf={"flex-end"}>
                {value.trend == "up" ? (
                  <TrendingUpIcon sx={{ color: "#C06969" }} />
                ) : value.trend == "down" ? (
                  <TrendingDownIcon sx={{ color: "#DEF6CA" }} />
                ) : (
                  <TrendingFlatIcon sx={{ color: "grey" }} />
                )}
                <Typography variant="body1">
                  {value.percentage !== "-" ? `${value.percentage}%` : ""}
                </Typography>
              </Grid>
              <Typography variant="body1" justifySelf={"flex-end"}>
                £ {formatCurrency(value.avg_spend, false, true)}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </CustomCard>
  );
};

export default Trends;
