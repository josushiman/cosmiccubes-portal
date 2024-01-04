import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const TimePeriod = ({
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
  };

  return (
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
            sx={months == 3 ? itemSelected : null}
          >
            3M
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthIntervals(6)}
            sx={months == 6 ? itemSelected : null}
          >
            6M
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthIntervals(9)}
            sx={months == 9 ? itemSelected : null}
          >
            9M
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthIntervals(12)}
            sx={months == 12 ? itemSelected : null}
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
            onClick={setYearInterval(2023)}
            sx={year == 2023 ? itemSelected : null}
          >
            `23
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setYearInterval(2024)}
            sx={year == 2024 ? itemSelected : null}
          >
            `24
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setYearInterval(2025)}
            sx={{
              opacity: "10%",
              pointerEvents: "none",
            }}
          >
            `25
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setYearInterval(2026)}
            sx={{
              opacity: "10%",
              pointerEvents: "none",
            }}
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
            onClick={setMonthInterval(1)}
            sx={month == 1 ? itemSelected : null}
          >
            Jan
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(2)}
            sx={month == 2 ? itemSelected : null}
          >
            Feb
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(3)}
            sx={month == 3 ? itemSelected : null}
          >
            Mar
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(4)}
            sx={month == 4 ? itemSelected : null}
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
            sx={month == 5 ? itemSelected : null}
          >
            May
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(6)}
            sx={month == 6 ? itemSelected : null}
          >
            Jun
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(7)}
            sx={month == 7 ? itemSelected : null}
          >
            Jul
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(8)}
            sx={month == 8 ? itemSelected : null}
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
            sx={month == 9 ? itemSelected : null}
          >
            Sep
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(10)}
            sx={month == 10 ? itemSelected : null}
          >
            Oct
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(11)}
            sx={month == 11 ? itemSelected : null}
          >
            Nov
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"center"}>
          <Typography
            onClick={setMonthInterval(12)}
            sx={month == 12 ? itemSelected : null}
          >
            Dec
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TimePeriod;
