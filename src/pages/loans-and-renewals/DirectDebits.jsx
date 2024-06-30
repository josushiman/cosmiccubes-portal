import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import formatCurrency from "../../hooks/formatCurrency";
import HandleDataLoad from "../../commons/HandleDataLoad";

const DirectDebits = () => {
  const { data, loading, error } = useAsync("/direct-debits");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
      <Grid container justifyContent={"space-between"}>
        <Typography>Monthly cost</Typography>
        <Typography>
          <strong>£ {formatCurrency(data.monthly_cost, false, true)}</strong>
        </Typography>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Typography>Yearly cost</Typography>
        <Typography>
          <strong>£ {formatCurrency(data.yearly_cost, false, true)}</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DirectDebits;
