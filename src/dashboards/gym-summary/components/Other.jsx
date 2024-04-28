import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";

const Other = () => {
  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <CustomCard
        sx={{
          padding: "1.5rem 2rem",
        }}
      >
        <Typography variant="h5" fontWeight={300}>
          Sauna & Cold Plunge
        </Typography>
      </CustomCard>
    </Grid>
  );
};

export default Other;
