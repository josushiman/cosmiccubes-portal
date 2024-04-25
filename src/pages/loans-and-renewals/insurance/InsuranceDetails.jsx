import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, useLocation } from "react-router-dom";
import { CustomCard } from "../../../commons/CustomCard";
import Navigation from "../../../dashboards/commons/Navigation";
import formatCurrency from "../../../hooks/formatCurrency";

const InsuranceDetails = () => {
  const { data } = useLocation().state;

  if (!data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <Navigation />
      {data.map((value, index) => {
        return (
          <CustomCard
            key={index}
            sx={{
              padding: "1.5rem 2rem",
            }}
          >
            <Typography variant="h6" fontWeight={300}>
              {value.name}
            </Typography>
            <hr
              style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }}
            />
            <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
              <Grid container justifyContent={"space-between"}>
                <Typography>Provider</Typography>
                <Typography fontWeight={200}>{value.provider}</Typography>
              </Grid>
              <Grid container justifyContent={"space-between"}>
                <Typography>Period</Typography>
                <Typography fontWeight={200}>{value.period}</Typography>
              </Grid>
              <Grid container justifyContent={"space-between"}>
                <Typography>Amount paid</Typography>
                <Typography fontWeight={200}>
                  £ {formatCurrency(value.payment_amount, false, true)}
                </Typography>
              </Grid>
              <Grid container justifyContent={"space-between"}>
                <Typography>Start date</Typography>
                <Typography fontWeight={200}>{value.start_date}</Typography>
              </Grid>
              <Grid container justifyContent={"space-between"}>
                <Typography>End date</Typography>
                <Typography fontWeight={200}>{value.end_date}</Typography>
              </Grid>
              <Grid container justifyContent={"space-between"}>
                <Typography>Link to account</Typography>
                {value.notes ? (
                  <Link to={value.notes} target="_blank" fontWeight={200}>
                    LINK
                  </Link>
                ) : (
                  <Typography fontWeight={200}>
                    <em>N/A</em>
                  </Typography>
                )}
              </Grid>
            </Grid>
          </CustomCard>
        );
      })}
    </Grid>
  );
};

export default InsuranceDetails;
