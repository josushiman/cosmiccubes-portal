import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../../hooks/useAsync";
import HandleDataLoad from "../../../commons/HandleDataLoad";
import { CustomCard } from "../../../commons/CustomCard";
import AverageCardBillChart from "./AverageCardBillChart";

const AverageCardBill = () => {
  const { data, loading, error } = useAsync("/average-card-bill?months=6");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const billsLength = data.length;

  return (
    <CustomCard
      sx={{
        padding: "1.5rem 1rem",
      }}
    >
      <Grid container paddingBottom={"1rem"}>
        <Typography variant="h5" fontWeight={300}>
          Average bills
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
        {billsLength > 0 ? (
          <AverageCardBillChart data={data} />
        ) : (
          <Typography>No card bill data.</Typography>
        )}
      </Grid>
    </CustomCard>
  );
};

export default AverageCardBill;
