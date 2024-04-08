import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import { ModalContext } from "../../context/ModalContextProvider";

const itemSelected = {
  backgroundColor: "#313131",
  padding: "0.75rem 1rem",
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

  const submit = () => {
    setTimeRange();
    return closeModal();
  };

  return (
    <Grid position={"absolute"} left={0} top={0} width={"100%"}>
      <Card
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          height: "100vh",
          width: "100vw",
        }}
      />
      <Grid
        container
        flexDirection={"column"}
        position={"relative"}
        marginTop={"4rem"}
        zIndex={1}
        rowGap={"1rem"}
      >
        <Card>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            height={"4rem"}
            padding={"0rem 0.25rem"}
          >
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(3, undefined, undefined)}
                sx={months == 3 ? itemSelected : defaultStyle}
              >
                3M
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(6, undefined, undefined)}
                sx={months == 6 ? itemSelected : defaultStyle}
              >
                6M
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(9, undefined, undefined)}
                sx={months == 9 ? itemSelected : defaultStyle}
              >
                9M
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(12, undefined, undefined)}
                sx={months == 12 ? itemSelected : defaultStyle}
              >
                1Y
              </Typography>
            </Grid>
          </Grid>
          <hr
            style={{
              borderColor: "#313131",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
            }}
          />
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            height={"4rem"}
            padding={"0rem 0.25rem"}
          >
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, undefined, 2024)}
                sx={year == 2024 ? itemSelected : defaultStyle}
              >
                `24
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, undefined, 2025)}
                sx={disabledStyle}
              >
                `25
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, undefined, 2026)}
                sx={disabledStyle}
              >
                `26
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            height={"4rem"}
            padding={"0rem 0.25rem"}
          >
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 1, year)}
                sx={specificMonth == 1 ? itemSelected : defaultStyle}
              >
                Jan
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 2, year)}
                sx={specificMonth == 2 ? itemSelected : defaultStyle}
              >
                Feb
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 3, year)}
                sx={specificMonth == 3 ? itemSelected : defaultStyle}
              >
                Mar
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 4, year)}
                sx={specificMonth == 4 ? itemSelected : defaultStyle}
              >
                Apr
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            height={"4rem"}
            padding={"0rem 0.25rem"}
          >
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 5, year)}
                sx={specificMonth == 5 ? itemSelected : defaultStyle}
              >
                May
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 6, year)}
                sx={specificMonth == 6 ? itemSelected : defaultStyle}
              >
                Jun
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 7, year)}
                sx={specificMonth == 7 ? itemSelected : defaultStyle}
              >
                Jul
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 8, year)}
                sx={specificMonth == 8 ? itemSelected : defaultStyle}
              >
                Aug
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            height={"4rem"}
            padding={"0rem 0.25rem"}
          >
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 9, year)}
                sx={specificMonth == 9 ? itemSelected : defaultStyle}
              >
                Sep
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 10, year)}
                sx={specificMonth == 10 ? itemSelected : defaultStyle}
              >
                Oct
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 11, year)}
                sx={specificMonth == 11 ? itemSelected : defaultStyle}
              >
                Nov
              </Typography>
            </Grid>
            <Grid container xs={3} justifyContent={"center"}>
              <Typography
                onClick={() => updateTimeRange(undefined, 12, year)}
                sx={specificMonth == 12 ? itemSelected : defaultStyle}
              >
                Dec
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <Grid container flexDirection={"column"} rowGap={"1rem"}>
          <Card onClick={() => submit()}>
            <Grid container padding={"1rem"} justifyContent={"center"}>
              <Typography variant="h6">Confirm</Typography>
            </Grid>
          </Card>
          <Card onClick={() => closeModal()}>
            <Grid container padding={"1rem"} justifyContent={"center"}>
              <Typography variant="h6">Cancel</Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimeRangeSelector;
