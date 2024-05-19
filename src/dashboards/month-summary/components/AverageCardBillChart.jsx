import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";
import formatCurrency from "../../../hooks/formatCurrency";
import { useState } from "react";

const CustomTooltip = ({ active, payload, setSelectedItem }) => {
  if (active && payload && payload.length) {
    return setSelectedItem(payload[0].payload);
  }

  return null;
};

const AverageCardBillChart = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(undefined);
  return (
    <>
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
          <Tooltip
            content={<CustomTooltip />}
            setSelectedItem={setSelectedItem}
          />
          <Line
            type="bump"
            dataKey="BA AMEX"
            dot={true}
            stroke="#BA306A"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
          <Line
            type="bump"
            dataKey="HSBC CC"
            dot={false}
            stroke="#CFB09A"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
          <Line
            type="bump"
            dataKey="Barclays CC"
            dot={false}
            stroke="#F0F0C9"
            strokeWidth={2}
            strokeOpacity={0.7}
          />
        </LineChart>
      </ResponsiveContainer>
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"auto 1fr"}
        columnGap={"0.5rem"}
      >
        <Box border={"1px solid #313131"} borderRadius={"0.25rem"}>
          <Grid
            container
            flexDirection={"column"}
            flexWrap={"nowrap"}
            rowGap={"0.5rem"}
            padding={"0.25rem 1rem"}
          >
            <Typography color={"#BA306A"}>◆ AMEX</Typography>
            <Typography color={"#CFB09A"}>◆ HSBC</Typography>
            <Typography color={"#F0F0C9"}>◆ Barclays</Typography>
          </Grid>
        </Box>
        <Box>
          {selectedItem ? (
            <Grid
              container
              flexDirection={"column"}
              flexWrap={"nowrap"}
              rowGap={"0.5rem"}
              padding={"0.25rem 1rem"}
              alignItems={"flex-end"}
            >
              <Typography>
                £ {formatCurrency(selectedItem["BA AMEX"])}
              </Typography>
              <Typography>
                £ {formatCurrency(selectedItem["HSBC CC"])}
              </Typography>
              <Typography>
                £ {formatCurrency(selectedItem["Barclays CC"])}
              </Typography>
            </Grid>
          ) : (
            <Grid
              container
              width={"100%"}
              height={"100%"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Typography fontStyle={"italic"}>Select a month</Typography>
            </Grid>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default AverageCardBillChart;
