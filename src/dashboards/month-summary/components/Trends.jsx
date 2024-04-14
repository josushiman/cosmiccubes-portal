import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Trends = ({ data }) => {
  return (
    <CustomCard>
      <Grid container flexDirection={"column"} rowGap={"1rem"} padding={"2rem"}>
        {data.map((value, index) => {
          return (
            <Grid key={index} container justifyContent={"space-between"}>
              <Typography variant="body1">{value.period}</Typography>
              <Grid container columnGap={"1rem"}>
                {value.trend == "up" ? (
                  <TrendingUpIcon sx={{ color: "#C06969" }} />
                ) : value.trend == "down" ? (
                  <TrendingDownIcon />
                ) : (
                  <TrendingFlatIcon />
                )}
                <Typography variant="body1">
                  {value.percentage !== "-" ? `${value.percentage}%` : ""}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </CustomCard>
  );
};

export default Trends;
