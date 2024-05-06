import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import formatCurrency from "../../hooks/formatCurrency";

const SavingsChart = ({ data }) => {
  return (
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
            return dateTime.format("MMM `YY");
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
        {/* <Tooltip /> */}
        <ReferenceLine y={0} stroke="#313131" />
        <Bar dataKey="target" fill="#F0F0C9" />
        <Bar dataKey="amount" fill="#C06969" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SavingsChart;
