import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";

const DirectDebits = () => {
  const { data, loading, error } = useAsync("/direct-debits");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

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
          Direct debits
        </Typography>
        <Typography variant="h5" fontWeight={500}>
          {data.count}
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
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
    </CustomCard>
  );
};

export default DirectDebits;
