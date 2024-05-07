import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import formatCurrency from "../../../hooks/formatCurrency";

const DailySpendChart = ({
  data,
  dailySpend,
  total,
  numDays,
  selectedDate,
  setSelectedDate,
}) => {
  dayjs.extend(advancedFormat);
  const dailyAverage = total / numDays;

  const handleClick = (payload) => {
    if (selectedDate == payload) {
      setSelectedDate(undefined);
    } else {
      setSelectedDate(payload);
    }
  };

  return (
    <Grid container flexDirection={"column"} rowGap={"1rem"}>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart
          data={data}
          stackOffset={"sign"}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="date"
            stroke="white"
            tickMargin={10}
            tickFormatter={(value) => {
              let dateTime = dayjs(value);
              return dateTime.format("dd");
            }}
          />
          <YAxis
            stroke="white"
            domain={["dataMin + 100", "dataMax"]}
            tickMargin={10}
            tickFormatter={(value) => {
              let axisTick = formatCurrency(value, true);
              if (value >= 1000 || value <= -1000) {
                let axisParts = axisTick.split(",");
                return axisParts[0] + "k";
              }
              return axisTick;
            }}
          />
          <ReferenceLine y={dailySpend} stroke="white" strokeDasharray="3 3" />
          <Bar
            dataKey="total"
            fill="#C06969"
            onClick={(value) => handleClick(value.payload)}
          />
        </BarChart>
      </ResponsiveContainer>
      <Grid container flexDirection={"column"}>
        <Grid
          container
          padding={"0.25rem 1rem"}
          justifyContent={"space-between"}
        >
          <Typography>Daily average:</Typography>
          <Typography>£ {formatCurrency(dailyAverage, false, true)}</Typography>
        </Grid>
        {selectedDate ? (
          <Grid
            container
            padding={"0.25rem 1rem"}
            justifyContent={"space-between"}
          >
            <Typography>
              {dayjs(selectedDate.date).format("dddd Do MMM")}
            </Typography>
            <Typography>
              £ {formatCurrency(selectedDate.total, false, true)}
            </Typography>
          </Grid>
        ) : (
          <Grid
            container
            padding={"0.25rem 1rem"}
            justifyContent={"space-between"}
          >
            <Typography>Total spent:</Typography>
            <Typography>£ {formatCurrency(total, false, true)}</Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default DailySpendChart;
