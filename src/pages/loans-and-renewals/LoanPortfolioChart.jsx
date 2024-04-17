import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import dayjs from "dayjs";
import formatCurrency from "../../hooks/formatCurrency";

const LoanPortfolioChart = ({ data }) => {
  const objKeys = Object.keys(data[0]);
  const filteredKeys = objKeys.filter((key) => key !== "date");

  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart
        data={data}
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
            return dateTime.format("MMM");
          }}
        />
        <YAxis
          stroke="white"
          tickMargin={10}
          tickFormatter={(value) => {
            let axisTick = formatCurrency(value, true);
            if (value >= 1000) {
              let axisParts = axisTick.split(",");
              return axisParts[0] + "k";
            }
            return axisTick;
          }}
        />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        {filteredKeys.map((value, index) => {
          return (
            <Line
              key={index}
              type="step"
              dataKey={value}
              dot={false}
              stroke="#BA306A"
              strokeWidth={2}
              strokeOpacity={0.7}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LoanPortfolioChart;
