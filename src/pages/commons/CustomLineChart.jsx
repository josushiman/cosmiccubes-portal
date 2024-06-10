import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import dayjs from "dayjs";
import formatCurrency from "../../hooks/formatCurrency";

const CustomLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: -5,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="month"
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
          domain={[0, "dataMax + 10"]}
          tickFormatter={(value) => {
            const axisTick = formatCurrency(value, true);
            if (value >= 1000) {
              return axisTick.split(",")[0] + "k";
            }
            return axisTick;
          }}
        />
        <Tooltip content={<></>} />
        <Line
          type="bump"
          dataKey="total"
          dot={true}
          stroke="#BA306A"
          strokeWidth={2}
          strokeOpacity={0.7}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
