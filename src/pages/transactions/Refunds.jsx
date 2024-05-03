import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import Transactions from "../../dashboards/month-summary/components/Transactions";

const Refunds = () => {
  const { data, loading, error } = useAsync(`/refunds`);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <>
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
            Refunds
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            {data.count}
          </Typography>
        </Grid>
        <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      </CustomCard>
      <Transactions data={data.transactions} accountId={undefined} />
    </>
  );
};

export default Refunds;
