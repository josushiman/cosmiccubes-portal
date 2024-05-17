import { Menu, useLogout } from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import MoneyIcon from "@mui/icons-material/Money";
import TranslateIcon from "@mui/icons-material/Translate";

const LogoutMenuButton = ({ ref }) => {
  const logout = useLogout();
  const handleClick = () => logout();

  return (
    <Menu.Item
      to="/"
      primaryText="Logout"
      leftIcon={<LogoutIcon />}
      onClick={handleClick}
      ref={ref}
    />
  );
};

const CustomMenu = () => (
  <Menu sx={{ backgroundColor: "#121212", height: "100vh" }}>
    <Grid container>
      <Grid container>
        <Menu.DashboardItem primaryText="Finances" leftIcon={<MoneyIcon />} />
        <Menu.Item
          to="/gym-summary"
          primaryText="Gym Summary"
          leftIcon={<FitnessCenterIcon />}
        />
        <Menu.Item
          to="/languages-summary"
          primaryText="Languages"
          leftIcon={<TranslateIcon />}
        />
        <hr style={{ width: "100%" }} />
        <Menu.ResourceItem name="portal/admin/budgets" />
        <Menu.ResourceItem name="portal/admin/ynab-categories" />
        <Menu.ResourceItem name="portal/admin/loans-and-renewals" />
        <Menu.ResourceItem name="portal/admin/savings" />
        <Menu.ResourceItem name="portal/admin/ynab-server-knowledge" />
        <Menu.ResourceItem name="portal/admin/ynab-transaction" />
      </Grid>
      <hr style={{ width: "100%" }} />
      <LogoutMenuButton />
    </Grid>
  </Menu>
);

export default CustomMenu;
