import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import PushPullLegs from "./components/PushPullLegs";
import BroSplit from "./components/BroSplit";
import Other from "./components/Other";
import Last7Sessions from "./components/Last7Session";

const GymSummary = () => {
  // PPL section
  // Bro Split Section
  // Apple Health details

  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <CustomCard>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Typography variant="h5" fontWeight={300}>
            Next session
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            Push
          </Typography>
        </Grid>
      </CustomCard>
      <Last7Sessions />
      <PushPullLegs />
      <BroSplit />
      <Other />
    </Grid>
  );
};

export default GymSummary;
