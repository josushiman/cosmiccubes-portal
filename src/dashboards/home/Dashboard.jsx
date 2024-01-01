import { Card, CardContent, CardHeader } from "@mui/material";
import Welcome from "./Welcome";
// import { ResourceContextProvider } from "react-admin";
// import CountryList from "../travl-api/countries/CountryList";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";
import useAsync from "../../hooks/useAsync";

const graphData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// POC for making async calls with react-admin outside of normal calls.
// Need to create separate components for each of these, and a routing hook.
const fetchData = async () => {
  const response = await fetch(
    "http://127.0.0.1:8000/ynab/transaction-by-months?months=3"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Dashboard = () => {
  const { data, loading, error } = useAsync(fetchData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Welcome />
      <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      </Card>
      {/* https://recharts.org/en-US/examples/LineChartWithXAxisPadding */}
      {data && "Loaded"}
      <LineChart width={500} height={300} data={data.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month_long" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total_spent"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="total_earned" stroke="#82ca9d" />
      </LineChart>
      <BarChart
        width={500}
        height={300}
        data={data.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month_long" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="total_earned"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="total_spent"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
      {/* <DirectDebits /> */}
      {/* <ResourceContextProvider value="admin/country">
        <CountryList />
      </ResourceContextProvider> */}
    </>
  );
};

export default Dashboard;
