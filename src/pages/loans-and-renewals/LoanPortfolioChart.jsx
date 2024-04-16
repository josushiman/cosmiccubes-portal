import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";

const LoanPortfolioChart = ({ data }) => {
  return (
    <CustomCard sx={{ padding: "0.75rem 0rem" }}>
      <ResponsiveContainer width="100%" height={150}>
        <ComposedChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 15,
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
            tickMargin={5}
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
          <Line
            type="bump"
            dataKey="Zopa Personal Loan"
            dot={false}
            stroke="#8d8f29a6"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
          <Line
            type="bump"
            dataKey="Balance Transfer"
            dot={false}
            stroke="#BA306A"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </CustomCard>
  );
};

export default LoanPortfolioChart;
