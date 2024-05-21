import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CategoryIcon from "@mui/icons-material/Category";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TodayIcon from "@mui/icons-material/Today";
import SavingsIcon from "@mui/icons-material/Savings";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import FinancialOverview from "./components/FinancialOverview";
import NotificationCard from "./components/NotificationCard";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import "./styles.css";

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
      {notificationText ? <NotificationCard data={data.notif} /> : null}
      <Summary data={data.summary} />
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"repeat(2, 6rem)"}
        columnGap={"0.5rem"}
        rowGap={"0.5rem"}
      >
        <Link
          to={"/monthly-summary/bills"}
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
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"#121212"}
            >
              <ReceiptLongIcon />
              <Typography>Bills</Typography>
            </Grid>
          </CustomCard>
        </Link>
        <Link
          to={"/dashboard/budgets"}
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
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"#121212"}
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
            backgroundcolor={"#F0F0C9"}
          >
            <Grid
              container
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"#121212"}
            >
              <CategoryIcon />
              <Typography>Categories</Typography>
            </Grid>
          </CustomCard>
        </Link>
        <Link
          to={"/daily-spend"}
          state={{
            dailySpend: data.summary.daily_spend,
          }}
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
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"#121212"}
            >
              <TodayIcon />
              <Typography>Daily spend</Typography>
            </Grid>
          </CustomCard>
        </Link>
        <Link
          to={"/portal/admin/savings"}
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
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"#121212"}
            >
              <SavingsIcon />
              <Typography>Savings</Typography>
            </Grid>
          </CustomCard>
        </Link>
        <Link
          to={"/monthly-summary/transactions"}
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
              flexDirection={"column"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"#121212"}
            >
              <ReceiptIcon />
              <Typography>Transactions</Typography>
            </Grid>
          </CustomCard>
        </Link>
      </Grid>
      <FinancialOverview data={data.income_expenses} />
    </Grid>
  );
};

export default MonthSummary;
