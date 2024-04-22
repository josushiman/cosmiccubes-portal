import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import { ModalContext } from "../../context/ModalContextProvider";

const itemSelected = {
  backgroundColor: "#313131",
  padding: "0.75rem 1.75rem",
  borderRadius: "0.25rem",
  cursor: "pointer",
};

const defaultStyle = {
  cursor: "pointer",
};

const disabledStyle = {
  opacity: "10%",
  pointerEvents: "none",
};

const TimeRangeSelector = () => {
  const {
    months,
    year,
    specificMonth,
    setMonthIntervals,
    setYearNoMonthInterval,
    setYearMonthInterval,
    setYearInterval,
    setTimeRange,
    resetTimeRange,
    currentMonth,
    currentYear,
  } = useContext(TimePeriodContext);

  const { closeModal } = useContext(ModalContext);

  const updateTimeRange = (
    monthsSelection = undefined,
    specificMonthSelection = undefined,
    yearSelection = undefined
  ) => {
    // For setting the months interval
    if (monthsSelection && months !== monthsSelection) {
      setMonthIntervals(monthsSelection);
    }

    // Setting the year when no month has been set
    if (specificMonthSelection && yearSelection == undefined) {
      setYearNoMonthInterval(specificMonthSelection);
    }

    // For setting the year and the specificMonth
    if (yearSelection && specificMonthSelection) {
      setYearMonthInterval(yearSelection, specificMonthSelection);
    }

    if (yearSelection && year != yearSelection) {
      setYearInterval(yearSelection);
    }
  };

  const cancelForm = () => {
    resetTimeRange();
    return closeModal();
  };

  const submitForm = () => {
    setTimeRange();
    return closeModal();
  };

  const MonthsIntervalComponents = () => {
    return (
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"4rem"}
        padding={"0rem 0.25rem"}
      >
        {[3, 6, 9, 12].map((value, index) => {
          return (
            <Grid key={index} container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(value, undefined, undefined)}
                sx={months == value ? itemSelected : defaultStyle}
              >
                {value}M
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const YearIntervalComponents = () => {
    return (
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"4rem"}
        padding={"0rem 0.25rem"}
      >
        {[2024, 2025, 2026].map((value, index) => {
          return (
            <Grid key={index} container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, undefined, value)}
                sx={
                  value > currentYear
                    ? disabledStyle
                    : year == value
                    ? itemSelected
                    : defaultStyle
                }
              >
                `{value.toString().slice(-2)}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const MonthIntervalComponents = () => {
    return (
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"repeat(4, 3rem)"}
        rowGap={"0.5rem"}
        padding={"1rem 0"}
        justifyItems={"center"}
        alignItems={"center"}
      >
        {[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ].map((value, index) => {
          // TODO update this to be able to handle all scenarios not just the current year.
          // e.g. 2025 Jan needs to ensure Jan -> Dec is always available
          return (
            <Grid key={index} container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, index + 1, year)}
                sx={
                  index + 1 > currentMonth
                    ? disabledStyle
                    : specificMonth == index + 1
                    ? itemSelected
                    : defaultStyle
                }
              >
                {value}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <Grid position={"absolute"} left={0} top={0} width={"100%"}>
      <CustomCard
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#313131",
        }}
      />
      <Grid
        container
        flexDirection={"column"}
        position={"relative"}
        marginTop={"4rem"}
        zIndex={1}
        rowGap={"1rem"}
        padding={"0 2rem 2rem 2rem"}
      >
        <CustomCard
          sx={{
            boxShadow: "none",
          }}
        >
          <MonthsIntervalComponents />
          <hr
            style={{
              borderColor: "#313131",
              borderStyle: "solid",
              height: "1px",
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
            }}
          />
          <YearIntervalComponents />
          <MonthIntervalComponents />
        </CustomCard>

        <Grid container flexDirection={"column"} rowGap={"1rem"}>
          <CustomCard onClick={submitForm}>
            <Grid container padding={"1rem"} justifyContent={"center"}>
              <Button
                sx={{
                  color: "white",
                }}
              >
                Confirm
              </Button>
            </Grid>
          </CustomCard>
          <CustomCard onClick={cancelForm} backgroundcolor={"#C06969"}>
            <Grid container padding={"1rem"} justifyContent={"center"}>
              <Button
                sx={{
                  color: "white",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimeRangeSelector;
