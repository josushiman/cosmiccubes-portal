import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";
import { Link } from "react-router-dom";

const UpcomingRenewals = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <Link
      to={"/portal/admin/loans-and-renewals"}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <CustomCard nopadding={"true"}>
        <Grid
          container
          flexDirection={"column"}
          rowGap={"1rem"}
          padding={"1.5rem 2rem"}
        >
          <Typography variant="h6">Upcoming renewals</Typography>
          <Grid container flexDirection={"column"}>
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"auto 1fr 33%"}
              gridTemplateRows={"1.25rem"}
              alignItems={"start"}
            >
              <Typography variant="subtitle1">Yearly</Typography>
              <Typography variant="subtitle1" justifySelf={"flex-end"}>
                {data.count}
              </Typography>
              <Typography variant="body1" justifySelf={"flex-end"}>
                £ {formatCurrency(data.total, false, false)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CustomCard>
    </Link>
  );
};

export default UpcomingRenewals;
