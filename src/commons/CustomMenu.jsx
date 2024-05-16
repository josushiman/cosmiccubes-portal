import { Menu, UserMenu } from "react-admin";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MoneyIcon from "@mui/icons-material/Money";

const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem primaryText="Finances" leftIcon={<MoneyIcon />} />
    <Menu.Item
      to="/gym-summary"
      primaryText="Gym Summary"
      leftIcon={<FitnessCenterIcon />}
    />
    <hr style={{ width: "100%" }} />
    <Menu.ResourceItem name="portal/admin/budgets" />
    <Menu.ResourceItem name="portal/admin/ynab-categories" />
    <Menu.ResourceItem name="portal/admin/loans-and-renewals" />
    <Menu.ResourceItem name="portal/admin/savings" />
    <Menu.ResourceItem name="portal/admin/ynab-server-knowledge" />
    <Menu.ResourceItem name="portal/admin/ynab-transaction" />
    <UserMenu />
  </Menu>
);

export default CustomMenu;
