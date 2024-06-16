import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import DailySpendChart from "./components/DailySpendChart";
import CustomDataTable from "../../commons/CustomDataTable";
import DefaultPageGrid from "../../commons/DefaultPageGrid";
import InfoCardGrid from "../../commons/InfoCardGrid";
import InfoCard from "../../commons/InfoCard";
import CustomSlider from "../../commons/CustomSlider";

const marks = [
  {
    value: 3,
    label: "3 days",
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
    label: "7 days",
  },
];

const DailySpendSummary = () => {
  const [numDays, setNumDays] = useState(7);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const { data, loading, error } = useAsync(`/daily-spend?num_days=7`);
  const dailySpend = 53;
  // const { dailySpend } = useLocation().state;
  // TODO remove state from navigation

  useEffect(() => {
    setSelectedDate(undefined);
  }, [numDays]);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const allTransactions = data.days.reduce(
    (accumulator, object) => accumulator.concat(object.transactions),
    []
  );
  const filteredDays = numDays;

  const filteredData = data.days.slice(-filteredDays);
  const totalSpent = filteredData.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue["total"] || 0);
  }, 0);
  const dailyAverage = totalSpent / numDays;

  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={1}>
        <InfoCard name="average" value={dailyAverage} />
        <InfoCard
          name="total spent"
          value={selectedDate ? selectedDate.total : totalSpent}
          span={2}
        />
      </InfoCardGrid>
      <CustomCard nopadding={true}>
        <Box sx={{ padding: "1rem 3rem" }}>
          <CustomSlider
            defaultValue={7}
            step={null}
            valueLabelDisplay="auto"
            min={3}
            max={7}
            marks={marks}
            onChange={(e) => setNumDays(e.target.value)}
          />
        </Box>
      </CustomCard>
      <CustomCard>
        <DailySpendChart
          data={filteredData}
          dailySpend={dailySpend}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </CustomCard>
      <CustomDataTable
        data={
          selectedDate ? selectedDate.transactions : allTransactions.reverse()
        }
        showTransactions={true}
      />
    </DefaultPageGrid>
  );
};

export default DailySpendSummary;
