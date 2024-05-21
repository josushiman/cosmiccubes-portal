import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import dayjs from "dayjs";
import formatCurrency from "../../../hooks/formatCurrency";

const AverageCardBillChart = ({
  data,
  setSelectedItem,
  amexLine,
  hsbcLine,
  barclaysLine,
}) => {
  const handleMouseMove = (e) => {
    if (e.activePayload) {
      setSelectedItem(e.activePayload[0].payload);
    } else {
      setSelectedItem(undefined);
    }
  };

  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        onClick={(e) => handleMouseMove(e)}
        onMouseLeave={() => setSelectedItem(undefined)}
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
          domain={["dataMin", "dataMax + 10"]}
          tickFormatter={(value) => {
            let axisTick = formatCurrency(value, true);
            if (value >= 1000) {
              let axisParts = axisTick.split(",");
              return axisParts[0] + "k";
            }
            return axisTick;
          }}
        />
        <Tooltip content={<></>} />
        {amexLine && (
          <Line
            type="bump"
            dataKey="BA AMEX"
            dot={true}
            stroke="#BA306A"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
        )}
        {hsbcLine && (
          <Line
            type="bump"
            dataKey="HSBC CC"
            dot={false}
            stroke="#CFB09A"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
        )}
        {barclaysLine && (
          <Line
            type="bump"
            dataKey="Barclays CC"
            dot={false}
            stroke="#F0F0C9"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageCardBillChart;
