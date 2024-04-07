import { Menu } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";

const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.Item
      to="/month-summary"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    />
    <Menu.ResourceItem name="portal/admin/budgets" />
    <Menu.ResourceItem name="portal/admin/ynab-categories" />
  </Menu>
);

export default CustomMenu;
