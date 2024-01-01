import { Admin, Resource, defaultDarkTheme } from "react-admin";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import accounts from "./pages/accounts";
import accountTypes from "./pages/account-types";
import balanceTransfers from "./pages/balance-transfers";
import budgets from "./pages/budgets";
import companyCategories from "./pages/company-categories";
import companies from "./pages/companies";
import directDebits from "./pages/direct-debits";
import incomes from "./pages/incomes";
import mortgages from "./pages/mortgages";
import projects from "./pages/projects";
import projectItemCategories from "./pages/project-item-categories";
import projectItems from "./pages/project-items";
import transactions from "./pages/transactions";
import Dashboard from "./dashboards/home/Dashboard";

const defaultTheme = defaultDarkTheme;

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    theme={defaultTheme}
    dashboard={Dashboard}
  >
    <Resource
      name="portal/accounts"
      {...accounts}
      options={{ label: "Accounts" }}
    />
    <Resource
      name="portal/account-types"
      {...accountTypes}
      options={{ label: "Account Types" }}
    />
    <Resource
      name="portal/balance-transfers"
      {...balanceTransfers}
      options={{ label: "Balance Transfers" }}
    />
    <Resource
      name="portal/budgets"
      {...budgets}
      options={{ label: "Budgets" }}
    />
    <Resource
      name="portal/company-categories"
      {...companyCategories}
      options={{ label: "Company Categories" }}
    />
    <Resource
      name="portal/companies"
      {...companies}
      options={{ label: "Companies" }}
    />
    <Resource
      name="portal/direct-debits"
      {...directDebits}
      options={{ label: "Direct Debits" }}
    />
    <Resource
      name="portal/incomes"
      {...incomes}
      options={{ label: "Incomes" }}
    />
    <Resource
      name="portal/mortgages"
      {...mortgages}
      options={{ label: "Mortgages" }}
    />
    <Resource
      name="portal/projects"
      {...projects}
      options={{ label: "Projects" }}
    />
    <Resource
      name="portal/project-item-categories"
      {...projectItemCategories}
      options={{ label: "Project Item Categories" }}
    />
    <Resource
      name="portal/project-items"
      {...projectItems}
      options={{ label: "Project Items" }}
    />
    <Resource
      name="portal/transactions"
      {...transactions}
      options={{ label: "Transactions" }}
    />
  </Admin>
);
