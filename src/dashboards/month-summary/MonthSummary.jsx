import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import Summary from "./components/Summary";
import FinancialOverview from "./components/FinancialOverview";
import NotificationCard from "./components/NotificationCard";
import HandleDataLoad from "../../commons/HandleDataLoad";
import LinkedInfoCard from "../../commons/LinkedInfoCard";
import InfoCardGrid from "../../commons/InfoCardGrid";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

const MonthSummary = () => {
  const { isCurrentMonth, timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(`/monthly-summary${timePeriod}`);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const notificationText = data?.notif ? data.notif : null;

  const infoCards = [
    {
      name: "bills",
      navLink: "/monthly-summary/bills",
    },
    {
      name: "budgets",
      navLink: "/dashboard/budgets",
    },
    {
      name: "categories",
      navLink: "/monthly-summary/categories",
    },
    {
      name: "daily spend",
      navLink: "/daily-spend",
      navState: {
        dailySpend: data.summary.daily_spend,
      },
    },
    {
      name: "payees",
      navLink: "/monthly-summary/payees",
    },
    {
      name: "transactions",
      navLink: "/monthly-summary/transactions",
    },
  ];

  return (
    <DefaultPageGrid>
      {notificationText ? <NotificationCard data={data.notif} /> : null}
      <Summary data={data.summary} isCurrentMonth={isCurrentMonth} />
      <InfoCardGrid rows={2}>
        {infoCards.map((value, index) => {
          return (
            <LinkedInfoCard
              key={index}
              icon={true}
              name={value.name}
              navLink={value.navLink}
              navState={value.navState}
            />
          );
        })}
      </InfoCardGrid>
      {/* <InvestmentsOverview /> */}
      <FinancialOverview data={data.income_expenses} />
    </DefaultPageGrid>
  );
};

export default MonthSummary;
