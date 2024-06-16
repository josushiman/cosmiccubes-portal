import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { TimePeriodContext } from "../../../context/TimePeriodContext";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";
import useAsync from "../../../hooks/useAsync";
import Trends from "./Trends";
import HandleDataLoad from "../../../commons/HandleDataLoad";
import { ThickBorderLinearProgressWithBackground } from "../../../commons/BorderLinearProgress";
import CustomLineChart from "../../../commons/CustomLineChart";
import CustomDataTable from "../../../commons/CustomDataTable";
import InfoCardGrid from "../../../commons/InfoCardGrid";
import InfoCard from "../../../commons/InfoCard";
import LinkedInfoCard from "../../../commons/LinkedInfoCard";
import DefaultPageGrid from "../../../commons/DefaultPageGrid";

// TODO pie chart for spent in that category but broken down by payee

const CategoryDetails = () => {
  let { categoryName, subcategoryName } = useParams();
  const { timePeriod } = useContext(TimePeriodContext);
  const { progress } = useLocation().state;

  const { data, loading, error } = useAsync(
    `/categories-summary/${categoryName}/${subcategoryName}${timePeriod}`
  );

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  categoryName = categoryName.replace("-", " ");
  const maxBar = data.budget >= data.total ? data.budget : data.total;
  const reversedData = data.trends.data.slice().reverse();

  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={2}>
        <CustomCard
          sx={{
            gridColumn: "span 2",
          }}
        >
          <Grid
            display={"grid"}
            position={"relative"}
            gridTemplateAreas={`"zeroed total" "progress-bar progress-bar"`}
          >
            <Typography variant="caption" sx={{ gridArea: "zeroed" }}>
              £ {0}
            </Typography>
            <Typography
              variant="caption"
              textAlign={"right"}
              sx={{ gridArea: "total" }}
            >
              £ {formatCurrency(maxBar, false, true)}
            </Typography>
            <ThickBorderLinearProgressWithBackground
              variant="determinate"
              value={progress}
              sx={{ gridArea: "progress-bar" }}
            />
            {!data.on_track && (
              <Grid
                container
                flexDirection={"column"}
                position={"absolute"}
                top={"90%"} // Position just below progress bar
                left={`${(data.budget / data.total) * 100 - 5}%`} // Position based on budget
              >
                <ArrowDropUpIcon />
              </Grid>
            )}
          </Grid>
        </CustomCard>
        <InfoCard icon={true} name="on track" value={data.on_track} />
        <InfoCard name="budget" value={data.budget} />
        <LinkedInfoCard
          icon={true}
          name="payees"
          navLink={`/categories-summary/${categoryName}/${subcategoryName}/payees`}
        />
        <LinkedInfoCard
          icon={true}
          name="transactions"
          navLink={`/categories-summary/${categoryName}/${subcategoryName}/transactions`}
        />
      </InfoCardGrid>
      <Trends data={data.trends.summary} />
      <CustomCard>
        <Grid container flexDirection={"column"} rowGap={"1rem"}>
          <CustomLineChart data={data.trends.data} />
          <CustomDataTable data={reversedData} defaultRowsPerPage={6} />
        </Grid>
      </CustomCard>
    </DefaultPageGrid>
  );
};

export default CategoryDetails;
