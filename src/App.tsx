import { Admin, Resource, defaultDarkTheme } from "react-admin";
import { dataProvider } from "./dataProvider";
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
import Dashboard from "./dashboards/home/Dashboard";

const defaultTheme = defaultDarkTheme;

// Dashboard for:
// Upcoming payments for the next 3 days
// Next 3 renewals

export const App = () => (
  <Admin dataProvider={dataProvider} theme={defaultTheme} dashboard={Dashboard}>
    <Resource name="accounts" {...accounts} />
    <Resource
      name="account-types"
      {...accountTypes}
      options={{ label: "Account Types" }}
    />
    <Resource
      name="balance-transfers"
      {...balanceTransfers}
      options={{ label: "Balance Transfers" }}
    />
    <Resource name="budgets" {...budgets} />
    <Resource
      name="company-categories"
      {...companyCategories}
      options={{ label: "Company Categories" }}
    />
    <Resource name="companies" {...companies} />
    <Resource
      name="direct-debits"
      {...directDebits}
      options={{ label: "Direct Debits" }}
    />
    <Resource name="incomes" {...incomes} />
    <Resource name="mortgages" {...mortgages} />
    <Resource name="projects" {...projects} />
    <Resource
      name="project-item-categories"
      {...projectItemCategories}
      options={{ label: "Project Item Categories" }}
    />
    <Resource
      name="project-items"
      {...projectItems}
      options={{ label: "Project Items" }}
    />
  </Admin>
);
