import { Admin, CustomRoutes, Resource, defaultDarkTheme } from "react-admin";
import { Route } from "react-router-dom";
import CustomLayout from "./commons/CustomLayout";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import GymSummary from "./dashboards/gym-summary/GymSummary";
import Dashboard from "./dashboards/month-summary/MonthSummary";
import BillsSummary from "./dashboards/month-summary/BillsSummary";
import CategoriesSummary from "./dashboards/month-summary/CategoriesSummary";
import CategoryDetails from "./dashboards/month-summary/components/CategoryDetails";
import PayeeSummary from "./dashboards/month-summary/PayeeSummary";
import TransactionsSummary from "./dashboards/month-summary/TransactionsSummary";
import budgets from "./pages/budgets";
import categories from "./pages/categories";
import loansAndRenewals from "./pages/loans-and-renewals";
import loansAndRenewalsPeriods from "./pages/loans-and-renewals/periods";
import loansAndRenewalsTypes from "./pages/loans-and-renewals/types";
import savings from "./pages/savings";
import serverKnowledge from "./pages/server-knowledge";
import transactions from "./pages/transactions";
import InsuranceDetails from "./pages/loans-and-renewals/insurance/InsuranceDetails";
import DailySpendSummary from "./dashboards/month-summary/DailySpendSummary";
import BudgetDashboard from "./pages/budgets/BudgetDashboard";
import PastBills from "./pages/transactions/PastBills";

const defaultTheme = defaultDarkTheme;

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    theme={defaultTheme}
    dashboard={Dashboard}
    layout={CustomLayout}
  >
    <Resource
      name="portal/admin/budgets"
      {...budgets}
      options={{ label: "Budgets" }}
    />
    <Resource
      name="portal/admin/ynab-categories"
      {...categories}
      options={{ label: "Categories" }}
    />
    <Resource
      name="portal/admin/loans-and-renewals"
      {...loansAndRenewals}
      options={{ label: "Loans and Renewals" }}
    />
    <Resource
      name="portal/admin/loans-and-renewals-periods"
      {...loansAndRenewalsPeriods}
      options={{ label: "Loans and Renewals Periods" }}
    />
    <Resource
      name="portal/admin/loans-and-renewals-types"
      {...loansAndRenewalsTypes}
      options={{ label: "Loans and Renewals Types" }}
    />
    <Resource
      name="portal/admin/savings"
      {...savings}
      options={{ label: "Savings" }}
    />
    <Resource
      name="portal/admin/ynab-transaction"
      {...transactions}
      options={{ label: "Transactions" }}
    />
    <Resource
      name="portal/admin/ynab-server-knowledge"
      {...serverKnowledge}
      options={{ label: "Server Knowledge" }}
    />
    <CustomRoutes>
      <Route path="dashboard/budgets" element={<BudgetDashboard />} />
      <Route path="daily-spend" element={<DailySpendSummary />} />
      <Route path="gym-summary" element={<GymSummary />} />
      <Route path="insurance/details" element={<InsuranceDetails />} />
      <Route path="monthly-summary/bills" element={<BillsSummary />} />
      <Route
        path="monthly-summary/categories"
        element={<CategoriesSummary />}
      />
      <Route
        path="monthly-summary/categories/:categoryName/:subcategoryName"
        element={<CategoryDetails />}
      />
      <Route path="monthly-summary/payees" element={<PayeeSummary />} />
      <Route
        path="monthly-summary/transactions"
        element={<TransactionsSummary />}
      />
      <Route path="past-bills" element={<PastBills />} />
    </CustomRoutes>
  </Admin>
);
