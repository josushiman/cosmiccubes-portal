import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import { useContext } from "react";

const TimePeriod = () => {
  const { getAppBarText } = useContext(TimePeriodContext);

  return (
    <Grid container justifyContent={"center"}>
      <CustomCard
        sx={{
          padding: "0.75rem 2rem",
        }}
      >
        <Typography>{getAppBarText()}</Typography>
      </CustomCard>
    </Grid>
  );
};

export default TimePeriod;
