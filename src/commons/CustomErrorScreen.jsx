import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation } from "react-router-dom";
import { CustomCard } from "./CustomCard";
import Navigation from "../dashboards/commons/Navigation";

const CustomErrorScreen = ({ error }) => {
  const { pathname } = useLocation();

  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      {pathname != "/" ? <Navigation /> : null}
      <CustomCard
        sx={{
          padding: "1.5rem 2rem",
        }}
      >
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
