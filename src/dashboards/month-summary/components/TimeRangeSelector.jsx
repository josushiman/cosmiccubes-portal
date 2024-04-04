import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const TimeRangeSelector = ({
  setMonthIntervals,
  setMonthInterval,
  setYearInterval,
  months,
  month,
  year,
}) => {
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

  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <Card
        style={{
          width: "75%",
          alignSelf: "center",
        }}
        onClick={() => setOpen(true)}
      >
        <Grid
          container
          padding={"1rem"}
          justifyContent={"center"}
          columnGap={"0.5rem"}
        >
          <Typography variant="body1">Current Month Summary</Typography>
          <ChevronRightIcon />
        </Grid>
      </Card>
    );
  }

  const updateTimeRange = (
    months = undefined,
    month = undefined,
    year = undefined
  ) => {
    console.log("test");
    // setMonthIntervals(3)
    // setYearInterval(2024)
    // setMonthInterval(2)
  };

  return (
    <>
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
              onClick={setMonthIntervals(3)}
              sx={months == 3 ? itemSelected : defaultStyle}
            >
              3M
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthIntervals(6)}
              sx={months == 6 ? itemSelected : defaultStyle}
            >
              6M
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthIntervals(9)}
              sx={months == 9 ? itemSelected : defaultStyle}
            >
              9M
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthIntervals(12)}
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
              onClick={setYearInterval(2024)}
              sx={year == 2024 ? itemSelected : defaultStyle}
            >
              `24
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography onClick={setYearInterval(2025)} sx={disabledStyle}>
              `25
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography onClick={setYearInterval(2026)} sx={disabledStyle}>
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
              onClick={setMonthInterval(1)}
              sx={month == 1 ? itemSelected : defaultStyle}
            >
              Jan
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(2)}
              sx={month == 2 ? itemSelected : defaultStyle}
            >
              Feb
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(3)}
              sx={month == 3 ? itemSelected : defaultStyle}
            >
              Mar
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(4)}
              sx={month == 4 ? itemSelected : defaultStyle}
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
              onClick={setMonthInterval(5)}
              sx={month == 5 ? itemSelected : defaultStyle}
            >
              May
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(6)}
              sx={month == 6 ? itemSelected : defaultStyle}
            >
              Jun
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(7)}
              sx={month == 7 ? itemSelected : defaultStyle}
            >
              Jul
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(8)}
              sx={month == 8 ? itemSelected : defaultStyle}
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
              onClick={setMonthInterval(9)}
              sx={month == 9 ? itemSelected : defaultStyle}
            >
              Sep
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(10)}
              sx={month == 10 ? itemSelected : defaultStyle}
            >
              Oct
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(11)}
              sx={month == 11 ? itemSelected : defaultStyle}
            >
              Nov
            </Typography>
          </Grid>
          <Grid container xs={3} justifyContent={"center"}>
            <Typography
              onClick={setMonthInterval(12)}
              sx={month == 12 ? itemSelected : defaultStyle}
            >
              Dec
            </Typography>
          </Grid>
        </Grid>
      </Card>

      <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
        <Card>
          <Grid container padding={"1rem"} justifyContent={"center"}>
            <Typography variant="h6">Confirm</Typography>
          </Grid>
        </Card>
        <Card onClick={() => setOpen(false)}>
          <Grid container padding={"1rem"} justifyContent={"center"}>
            <Typography variant="h6">Cancel</Typography>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default TimeRangeSelector;
