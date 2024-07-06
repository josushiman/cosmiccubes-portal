import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import formatCurrency from "../../../hooks/formatCurrency";

const InsuranceDetails = ({ data }) => {
  return (
    <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
      <Grid container justifyContent={"space-between"}>
        <Typography>Type</Typography>
        <Typography fontWeight={200}>{data.name}</Typography>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography>Provider</Typography>
        <Typography fontWeight={200}>{data.provider}</Typography>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography>Period</Typography>
        <Typography fontWeight={200}>{data.period}</Typography>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography>Amount paid</Typography>
        <Typography fontWeight={200}>
          £ {formatCurrency(data.payment_amount, false, true)}
        </Typography>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography>Start date</Typography>
        <Typography fontWeight={200}>{data.start_date}</Typography>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography>End date</Typography>
        <Typography fontWeight={200}>{data.end_date}</Typography>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography>Link to account</Typography>
        {data.notes ? (
          <Link to={data.notes} target="_blank" fontWeight={200}>
            LINK
          </Link>
        ) : (
          <Typography fontWeight={200}>
            <em>N/A</em>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default InsuranceDetails;
