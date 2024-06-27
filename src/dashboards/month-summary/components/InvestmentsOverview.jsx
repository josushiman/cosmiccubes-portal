import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { CustomCard } from "../../../commons/CustomCard";
import DefaultPageGrid from "../../../commons/DefaultPageGrid";
import formatCurrency from "../../../hooks/formatCurrency";

const InvestmentsOverview = () => {
  return (
    <CustomCard>
      <DefaultPageGrid>
        <Grid
          container
          flexDirection={"column"}
          rowGap={"1rem"}
          padding={"0 1rem"}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"33% 1fr 33%"}
            gridTemplateRows={"1rem"}
          >
            <Typography variant="body1">Coins</Typography>
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
              gridTemplateRows={"auto"}
              columnGap={"0.125rem"}
              justifySelf={"flex-end"}
              width={"100%"}
            >
              <TrendingDownIcon
                sx={{ color: "#DEF6CA", justifySelf: "flex-end" }}
              />
              <Typography variant="body1" justifySelf={"flex-end"}>
                {`${10}%`}
              </Typography>
            </Grid>
            <Typography variant="body1" justifySelf={"flex-end"}>
              £ {formatCurrency(12, false, true)}
            </Typography>
          </Grid>
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"33% 1fr 33%"}
            gridTemplateRows={"1rem"}
          >
            <Typography variant="body1">Savings</Typography>
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
              gridTemplateRows={"auto"}
              columnGap={"0.125rem"}
              justifySelf={"flex-end"}
              width={"100%"}
            >
              <TrendingFlatIcon
                sx={{ color: "#DEF6CA", justifySelf: "flex-end" }}
              />
              <Typography variant="body1" justifySelf={"flex-end"}>
                {`${10}%`}
              </Typography>
            </Grid>
            <Typography variant="body1" justifySelf={"flex-end"}>
              £ {formatCurrency(20, false, true)}
            </Typography>
          </Grid>
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"33% 1fr 33%"}
            gridTemplateRows={"1.5rem"}
          >
            <Typography variant="body1">Stocks</Typography>
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
              gridTemplateRows={"auto"}
              columnGap={"0.125rem"}
              justifySelf={"flex-end"}
              width={"100%"}
            >
              <TrendingUpIcon
                sx={{ color: "#C06969", justifySelf: "flex-end" }}
              />
              <Typography variant="body1" justifySelf={"flex-end"}>
                {`${10}%`}
              </Typography>
            </Grid>
            <Typography variant="body1" justifySelf={"flex-end"}>
              £ {formatCurrency(120, false, true)}
            </Typography>
          </Grid>
        </Grid>
      </DefaultPageGrid>
    </CustomCard>
  );
};

export default InvestmentsOverview;
