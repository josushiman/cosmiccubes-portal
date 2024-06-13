import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, FilledInput, FormControl, InputLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import DailySpendChart from "./components/DailySpendChart";
import CustomDataTable from "../../commons/CustomDataTable";

const disabledStyles = {
  padding: "0.75rem 1rem",
  pointerEvents: "none",
  opacity: "10%",
};

const defaultStyle = {
  padding: "0.75rem 1rem",
};

const DailySpendSummary = () => {
  const [numDays, setNumDays] = useState(7);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const { data, loading, error } = useAsync(`/daily-spend?num_days=7`);
  const { dailySpend } = useLocation().state;

  useEffect(() => {
    setSelectedDate(undefined);
  }, [numDays]);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const filteredDays = numDays + 1;

  const filteredData = data.days.slice(-filteredDays);
  const totalSpent = filteredData.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue["total"] || 0);
  }, 0);

  const handleClick = (count) =>
    setNumDays((prevNumDays) => prevNumDays + count);

  return (
    <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
      <CustomCard>
        <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
          <DailySpendChart
            data={filteredData}
            dailySpend={dailySpend}
            total={totalSpent}
            numDays={filteredDays}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <Grid
            container
            flexDirection={"column"}
            rowGap={"0.5rem"}
            alignItems={"stretch"}
          >
            <FormControl sx={{ m: 1, width: "100%" }} variant="filled" disabled>
              <InputLabel htmlFor="filled-days">Number of days</InputLabel>
              <FilledInput id="filled-days" label="Days" value={numDays + 1} />
            </FormControl>
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"1fr 2px 1fr"}
              gridTemplateRows={"4rem"}
              alignItems={"center"}
              justifyItems={"center"}
              borderRadius={"0.5rem"}
              border={"1px solid #313131"}
            >
              <Box
                sx={numDays == 3 ? disabledStyles : defaultStyle}
                onClick={() => handleClick(-1)}
              >
                <RemoveIcon fontSize="medium" />
              </Box>
              <hr style={{ opacity: "5%", height: "100%" }} />
              <Box
                sx={numDays == 7 ? disabledStyles : defaultStyle}
                onClick={() => handleClick(1)}
              >
                <AddIcon fontSize="medium" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </CustomCard>
      {selectedDate && (
        <CustomDataTable
          data={selectedDate.transactions}
          showTransactions={true}
        />
      )}
    </Grid>
  );
};

export default DailySpendSummary;
