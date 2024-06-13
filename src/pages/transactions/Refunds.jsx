import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import CustomDataTable from "../../commons/CustomDataTable";

const Refunds = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(`/refunds${timePeriod}`);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <>
      <CustomCard>
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
      <CustomDataTable
        data={data.transactions}
        accountId={undefined}
        showTransactions={true}
      />
    </>
  );
};

export default Refunds;
