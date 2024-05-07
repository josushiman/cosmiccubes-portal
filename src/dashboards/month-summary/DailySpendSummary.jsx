import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  FilledInput,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import DailySpendChart from "./components/DailySpendChart";

const disabledStyles = {
  pointerEvents: "none",
  opacity: "10%",
};

const defaultStyle = {
  padding: "1rem",
};

const DailySpendSummary = () => {
  const [numDays, setNumDays] = useState(7);
  const { data, loading, error } = useAsync(`/daily-spend?num_days=${numDays}`);
  const { dailySpend } = useLocation().state;

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const handleClick = (count) =>
    setNumDays((prevNumDays) => prevNumDays + count);

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
          Daily spend
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
        <DailySpendChart
          data={data.days}
          dailySpend={dailySpend}
          total={data.total}
          numDays={numDays + 1}
        />
        <Grid
          container
          display={"grid"}
          columnGap={"1rem"}
          gridTemplateColumns={"1fr repeat(2, 1fr)"}
          gridTemplateRows={"auto"}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <FormControl sx={{ m: 1, width: "9rem" }} variant="filled" disabled>
            <InputLabel htmlFor="filled-days">Number of days</InputLabel>
            <FilledInput id="filled-days" label="Days" value={numDays + 1} />
          </FormControl>
          <Box
            sx={numDays == 3 ? disabledStyles : defaultStyle}
            onClick={() => handleClick(-1)}
          >
            <RemoveIcon />
          </Box>
          <Box
            sx={numDays == 7 ? disabledStyles : defaultStyle}
            onClick={() => handleClick(1)}
          >
            <AddIcon />
          </Box>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default DailySpendSummary;
