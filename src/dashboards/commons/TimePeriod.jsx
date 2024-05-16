import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import { useContext } from "react";

const TimePeriod = () => {
  const { getAppBarText } = useContext(TimePeriodContext);

  return (
    <Grid container justifyContent={"center"} width={"100%"}>
      <Typography variant="subtitle1">{getAppBarText()}</Typography>
    </Grid>
  );
};

export default TimePeriod;
