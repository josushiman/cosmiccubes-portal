import { Card } from "@mui/material";
import {
  Area,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import formatCurrency from "../../hooks/formatCurrency";
import useAsync from "../../hooks/useAsync";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {/* Add some styles to this */}
          {label}, {payload[0].payload.year}
        </p>
        <p className="intro">
          Income: {formatCurrency(payload[0].payload.income, true)}
        </p>
        <p className="intro">
          Expenses: {formatCurrency(payload[0].payload.expenses, true)}
        </p>
      </div>
    );
  }

  return null;
};

const IncomeVsExpenses = ({ months, year, month }) => {
  const params = months
    ? `?months=${months}`
    : year && month
    ? `?year=${year}&month=${month}`
    : year
    ? `?year=${year}`
    : `?month=${month}`;
  const urlParam = `/ynab/income-vs-expenses${params}`;
  const { data, loading, error } = useAsync(urlParam);

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  // // Example output
  // const data = {
  //   since_date: "12/12/2023",
  //   data: [
  //     {
  //       month: "November",
  //       year: 2023,
  //       income: 7000,
  //       expenses: 3400,
  //     },
  //     {
  //       month: "December",
  //       year: 2023,
  //       income: 11000,
  //       expenses: 4400,
  //     },
  //   ],
  // };

  return (
    <Card
      sx={{
        padding: "1rem",
      }}
    >
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data.data}
          margin={{
            top: 10,
            right: 30,
            left: 15,
            bottom: 0,
          }}
        >
          <XAxis dataKey="month" stroke="white" tickMargin={10} />
          <YAxis
            stroke="white"
            tickMargin={5}
            tickFormatter={(value) => {
              return formatCurrency(value, true);
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="bump"
            dataKey="income"
            dot={false}
            stroke="#8d8f29a6"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
          <Area
            type="bump"
            dataKey="expenses"
            stroke="#BA306A"
            strokeOpacity={0.5}
            fill="#BA306A"
            fillOpacity={0.3}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IncomeVsExpenses;
