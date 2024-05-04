import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CategoryIcon from "@mui/icons-material/Category";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import FinancialOverview from "./components/FinancialOverview";
import NotificationCard from "./components/NotificationCard";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import "./styles.css";
import TimePeriod from "../commons/TimePeriod";

const MonthSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(`/monthly-summary${timePeriod}`);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const notificationText = data?.notif ? data.notif : null;

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowGap={"0.5rem"}
      flexDirection={"column"}
    >
      <TimePeriod />
      {notificationText ? <NotificationCard data={data.notif} /> : null}
      <Summary data={data.summary} />
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        columnGap={"0.5rem"}
        gridTemplateRows={"6rem"}
      >
        <Link
          to={"/portal/admin/budgets"}
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
          >
            <Grid
              container
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <ShowChartIcon />
              <Typography>Budgets</Typography>
            </Grid>
          </CustomCard>
        </Link>
        <Link
          to={"/monthly-summary/categories"}
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
          >
            <Grid
              container
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <CategoryIcon />
              <Typography>Categories</Typography>
            </Grid>
          </CustomCard>
        </Link>
        <Link
          to={"/portal/admin/loans-and-renewals"}
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
          >
            <Grid
              container
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <AutorenewIcon />
              <Typography>Renewals</Typography>
            </Grid>
          </CustomCard>
        </Link>
      </Grid>
      <FinancialOverview data={data.income_expenses} />
    </Grid>
  );
};

export default MonthSummary;
