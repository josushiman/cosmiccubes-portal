import { useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import formatCurrency from "../../hooks/formatCurrency";

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, percent } =
    props;

  const roundedPercent = Math.round(percent * 100);

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"white"}>
        {roundedPercent} %
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"#ae5b5b"}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={"#ae5b5b"}
      />
    </g>
  );
};

const BudgetSummaryChart = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (e, index) => {
    setIndex(index);
  };

  return (
    <Grid container flexDirection={"column"} rowGap={"1rem"}>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            activeIndex={index}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#C06969"
            stroke="#914747"
            dataKey="budgeted"
            onClick={(e, index) => handleClick(e, index)}
          />
        </PieChart>
      </ResponsiveContainer>
      <Grid container flexDirection={"column"} rowGap={"0.25rem"}>
        <Grid container justifyContent={"space-between"}>
          <Typography>Name</Typography>
          <Typography>
            <strong>{data[index].name}</strong>
          </Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography>Budgeted</Typography>
          <Typography>
            <strong>
              £ {formatCurrency(data[index].budgeted, false, true)}
            </strong>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BudgetSummaryChart;
