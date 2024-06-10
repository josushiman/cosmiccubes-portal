import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation, useParams, Link } from "react-router-dom";
import { useContext } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { TimePeriodContext } from "../../../context/TimePeriodContext";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";
import useAsync from "../../../hooks/useAsync";
import Trends from "./Trends";
import HandleDataLoad from "../../../commons/HandleDataLoad";
import { ThickBorderLinearProgressWithBackground } from "../../../commons/BorderLinearProgress";
import CustomLineChart from "../../../pages/commons/CustomLineChart";
import CustomDataTable from "../../../commons/CustomDataTable";

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

  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <Grid
        container
        display={"grid"}
        columnGap={"0.5rem"}
        rowGap={"0.5rem"}
        gridTemplateRows={"6rem"}
        gridTemplateColumns={"repeat(3, 1fr)"}
      >
        <CustomCard
          sx={{
            padding: "1.5rem 2rem",
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
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            {data.on_track ? (
              <CheckCircleIcon />
            ) : data.on_track == false ? (
              <CancelIcon />
            ) : (
              <Typography variant="h5">-</Typography>
            )}
            <Typography>On track</Typography>
          </Grid>
        </CustomCard>
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            {data.budget > 0 ? (
              <Typography variant="h5">
                £ {formatCurrency(data.budget, false, true)}
              </Typography>
            ) : data.budget == 0 ? (
              <Typography variant="h5">
                £ {formatCurrency(0, false, true)}
              </Typography>
            ) : (
              <Typography variant="h5">∞</Typography>
            )}
            <Typography>Budget</Typography>
          </Grid>
        </CustomCard>
        <Link
          to={`/categories-summary/${categoryName}/${subcategoryName}/payees`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <CustomCard
            sx={{
              width: "100%",
              height: "100%",
            }}
            backgroundcolor={"#F0F0C9"}
          >
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gridTemplateRows={"1fr auto"}
              padding={"1rem"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyItems={"center"}
              color={"#121212"}
            >
              <GroupsIcon />
              <Typography>Payees</Typography>
            </Grid>
          </CustomCard>
        </Link>
        <Link
          to={`/categories-summary/${categoryName}/${subcategoryName}/transactions`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <CustomCard
            sx={{
              width: "100%",
              height: "100%",
            }}
            backgroundcolor={"#F0F0C9"}
          >
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gridTemplateRows={"1fr auto"}
              padding={"1rem"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyItems={"center"}
              color={"#121212"}
            >
              <ReceiptIcon />
              <Typography>Transactions</Typography>
            </Grid>
          </CustomCard>
        </Link>
      </Grid>
      <Trends data={data.trends.summary} />
      <CustomCard
        sx={{
          padding: "1rem 1rem",
        }}
      >
        <Grid container flexDirection={"column"} rowGap={"1rem"}>
          <CustomLineChart data={data.trends.data} />
          <CustomDataTable data={data.trends.data} defaultRowsPerPage={6} />
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default CategoryDetails;
