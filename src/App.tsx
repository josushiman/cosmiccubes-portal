import { Admin, CustomRoutes, Resource, defaultDarkTheme } from "react-admin";
import { Route } from "react-router-dom";
import Dashboard from "./dashboards/month-summary/MonthSummary";
import CustomLayout from "./commons/CustomLayout";
import BillsSummary from "./dashboards/month-summary/BillsSummary";
import BillsDetails from "./dashboards/month-summary/components/BillsDetails";
import CategoriesSummary from "./dashboards/month-summary/CategoriesSummary";
import CategoryTransactions from "./dashboards/month-summary/components/CategoryTransactions";
import TransactionsSummary from "./dashboards/month-summary/TransactionsSummary";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import budgets from "./pages/budgets";
import categories from "./pages/categories";
import loansAndRenewals from "./pages/loans-and-renewals";
import savings from "./pages/savings";
import serverKnowledge from "./pages/server-knowledge";
import transactions from "./pages/transactions";
// import accounts from "./pages/accounts";
// import accountTypes from "./pages/account-types";
// import balanceTransfers from "./pages/balance-transfers";
// import companies from "./pages/companies";
// import directDebits from "./pages/direct-debits";
// import incomes from "./pages/incomes";
// import mortgages from "./pages/mortgages";
// import Dashboard from "./dashboards/home/Dashboard";

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
      <Route path="monthly-summary/bills" element={<BillsSummary />} />
      <Route path="monthly-summary/bills/details" element={<BillsDetails />} />
      <Route
        path="monthly-summary/categories"
        element={<CategoriesSummary />}
      />
      <Route
        path="monthly-summary/categories/:categoryName/:subcategoryName"
        element={<CategoryTransactions />}
      />
      <Route
        path="monthly-summary/transactions"
        element={<TransactionsSummary />}
      />
    </CustomRoutes>
    {/* <Resource
      name="portal/admin/account-types"
      {...accountTypes}
      options={{ label: "Account Types" }}
    />
    <Resource
      name="portal/admin/balance-transfers"
      {...balanceTransfers}
      options={{ label: "Balance Transfers" }}
    />
    <Resource
      name="portal/admin/company-categories"
      {...companyCategories}
      options={{ label: "Company Categories" }}
    />
    <Resource
      name="portal/admin/companies"
      {...companies}
      options={{ label: "Companies" }}
    />
    <Resource
      name="portal/admin/direct-debits"
      {...directDebits}
      options={{ label: "Direct Debits" }}
    />
    <Resource
      name="portal/admin/incomes"
      {...incomes}
      options={{ label: "Incomes" }}
    />
    <Resource
      name="portal/admin/mortgages"
      {...mortgages}
      options={{ label: "Mortgages" }}
    />
     */}
  </Admin>
);
