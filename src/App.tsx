import { Admin, CustomRoutes, Resource, defaultDarkTheme } from "react-admin";
import { Route } from "react-router-dom";
import Dashboard from "./dashboards/month-summary/MonthSummary";
import CustomLayout from "./commons/CustomLayout";
import BillsSummary from "./dashboards/month-summary/BillsSummary";
import CategoriesSummary from "./dashboards/month-summary/CategoriesSummary";
import TransactionsSummary from "./dashboards/month-summary/TransactionsSummary";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import budgets from "./pages/budgets";
import categories from "./pages/categories";
import savings from "./pages/savings";
// import accounts from "./pages/accounts";
// import accountTypes from "./pages/account-types";
// import balanceTransfers from "./pages/balance-transfers";
// import companies from "./pages/companies";
// import directDebits from "./pages/direct-debits";
// import incomes from "./pages/incomes";
// import mortgages from "./pages/mortgages";
// import projects from "./pages/projects";
// import projectItemCategories from "./pages/project-item-categories";
// import transactions from "./pages/transactions";
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
      name="portal/admin/savings"
      {...savings}
      options={{ label: "Savings" }}
    />
    <CustomRoutes>
      <Route path="monthly-summary/bills" element={<BillsSummary />} />
      <Route
        path="monthly-summary/categories"
        element={<CategoriesSummary />}
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
    <Resource
      name="portal/admin/projects"
      {...projects}
      options={{ label: "Projects" }}
    />
    <Resource
      name="portal/admin/project-item-categories"
      {...projectItemCategories}
      options={{ label: "Project Item Categories" }}
    />
    <Resource
      name="portal/admin/transactions"
      {...transactions}
      options={{ label: "Transactions" }}
    /> */}
  </Admin>
);
