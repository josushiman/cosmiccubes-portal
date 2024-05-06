import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import { CustomCard } from "../../commons/CustomCard";
import HandleDataLoad from "../../commons/HandleDataLoad";
import SavingsChart from "./SavingsChart";

const SavingsOverTime = () => {
  const { data, loading, error } = useAsync("/savings");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const savingsLength = data.length;

  return (
    <CustomCard
      sx={{
        padding: "1.5rem 2rem",
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
      >
        <Typography variant="h5" fontWeight={300}>
          Savings
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
        <Grid container justifyContent={"space-between"}>
          <Typography>Savings over time</Typography>
        </Grid>
        {savingsLength > 0 ? <SavingsChart data={data} /> : null}
      </Grid>
    </CustomCard>
  );
};

export default SavingsOverTime;
