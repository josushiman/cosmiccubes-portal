import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "./CustomCard";
import "./styles.css";

const CustomLoadingScreen = () => {
  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
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
          <Typography variant="subtitle1" fontWeight={300}>
            <em>getting data...</em>
          </Typography>
          <Box className="customloader"></Box>
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default CustomLoadingScreen;
