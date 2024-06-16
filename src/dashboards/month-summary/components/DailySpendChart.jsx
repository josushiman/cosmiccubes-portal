import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import formatCurrency from "../../../hooks/formatCurrency";
import DefaultPageGrid from "../../../commons/DefaultPageGrid";

const DailySpendChart = ({
  data,
  dailySpend,
  selectedDate,
  setSelectedDate,
}) => {
  dayjs.extend(advancedFormat);

  const handleClick = (payload) => {
    if (selectedDate == payload) {
      setSelectedDate(undefined);
    } else {
      setSelectedDate(payload);
    }
  };

  return (
    <DefaultPageGrid>
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
          {dailySpend && (
            <ReferenceLine
              y={dailySpend}
              stroke="white"
              strokeDasharray="3 3"
            />
          )}
          <Bar
            dataKey="total"
            fill="#C06969"
            onClick={(value) => handleClick(value.payload)}
          />
        </BarChart>
      </ResponsiveContainer>
    </DefaultPageGrid>
  );
};

export default DailySpendChart;
