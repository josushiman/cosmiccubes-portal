import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import formatCurrency from "../../../hooks/formatCurrency";

const Trends = ({ data }) => {
  return (
    <CustomCard nopadding={"true"}>
      <Grid container flexDirection={"column"} padding={"2rem"}>
        <Grid container flexDirection={"column"} rowGap={"1rem"}>
          {data.map((value, index) => {
            return (
              <Grid
                key={index}
                container
                display={"grid"}
                gridTemplateColumns={"33% 1fr 33%"}
                gridTemplateRows={"1rem"}
              >
                <Typography variant="body1">{value.period}</Typography>
                <Grid
                  container
                  display={"grid"}
                  gridTemplateColumns={"repeat(2, 1fr)"}
                  gridTemplateRows={"auto"}
                  columnGap={"0.125rem"}
                  justifySelf={"flex-end"}
                  width={"100%"}
                >
                  {value.trend == "up" ? (
                    <TrendingUpIcon
                      sx={{ color: "#C06969", justifySelf: "flex-end" }}
                    />
                  ) : value.trend == "down" ? (
                    <TrendingDownIcon
                      sx={{ color: "#DEF6CA", justifySelf: "flex-end" }}
                    />
                  ) : (
                    <TrendingFlatIcon
                      sx={{ color: "grey", justifySelf: "flex-end" }}
                    />
                  )}
                  <Typography variant="body1" justifySelf={"flex-end"}>
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
      </Grid>
    </CustomCard>
  );
};

export default Trends;
