import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "./CustomCard";

const CustomErrorScreen = ({ error }) => {
  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <CustomCard>
        <Grid
          container
          flexDirection={"column"}
          alignItems={"center"}
          rowGap={"0.5rem"}
        >
          <Typography variant="body1" fontWeight={300}>
            oh dear, an error occurred...
          </Typography>
          <Typography variant="subtitle1" fontWeight={300}>
            {error?.message}
          </Typography>
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default CustomErrorScreen;
