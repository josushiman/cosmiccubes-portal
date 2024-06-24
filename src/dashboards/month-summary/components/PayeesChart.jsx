import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";

const PayeesChart = ({ data, payeeCount }) => {
  const endIndexVar =
    payeeCount > 10 ? Math.round(payeeCount / 3) : payeeCount - 1;

  return (
    <CustomCard>
      <ResponsiveContainer width="100%" height={225}>
        <BarChart
          data={data}
          stackOffset={"sign"}
          margin={{
            top: 0,
            right: -25,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="payee_name" stroke="white" tick={false} />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="white"
            domain={[0, "dataMax"]}
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
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="white"
            domain={[0, "dataMax"]}
            tickMargin={5}
            allowDecimals={false}
          />
          <Bar yAxisId="left" dataKey="total" fill="#C06969" />
          <Bar yAxisId="right" dataKey="count" fill="#F0F0C9" />
          <Brush
            endIndex={endIndexVar}
            height={30}
            fill="#313131"
            travellerWidth={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </CustomCard>
  );
};

export default PayeesChart;
