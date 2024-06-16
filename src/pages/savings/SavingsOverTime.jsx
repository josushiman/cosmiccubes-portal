import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import { CustomCard } from "../../commons/CustomCard";
import HandleDataLoad from "../../commons/HandleDataLoad";
import SavingsChart from "./SavingsChart";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

const SavingsOverTime = () => {
  const { data, loading, error } = useAsync("/savings");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const savingsLength = data.length;

  return (
    <CustomCard>
      <DefaultPageGrid>
        <Grid container justifyContent={"space-between"}>
          <Typography>Savings over time</Typography>
        </Grid>
        {savingsLength > 0 ? <SavingsChart data={data} /> : null}
      </DefaultPageGrid>
    </CustomCard>
  );
};

export default SavingsOverTime;
