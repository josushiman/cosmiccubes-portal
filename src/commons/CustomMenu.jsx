import { useState } from "react";
import Box from "@mui/material/Box";
import { Menu, useLogout, useSidebarState } from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import MoneyIcon from "@mui/icons-material/Money";
import TranslateIcon from "@mui/icons-material/Translate";
import BoltIcon from "@mui/icons-material/Bolt";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import HomeIcon from "@mui/icons-material/Home";
import CustomSubMenu from "./CustomSubMenu";

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

const CustomMenu = ({ dense = false }) => {
  const [state, setState] = useState({
    menuFinances: true,
    menuGymSummary: false,
    menuLanguages: false,
    menuTravelPlanning: false,
    menuUtilities: false,
  });
  const [open] = useSidebarState();

  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? "auto" : 50,
        height: "100vh",
        backgroundColor: "#121212",
        paddingTop: 1,
        paddingBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Grid container>
        <Grid container>
          <CustomSubMenu
            handleToggle={() => handleToggle("menuFinances")}
            isOpen={state.menuFinances}
            name="Finances"
            icon={<MoneyIcon />}
            dense={dense}
          >
            <Menu.DashboardItem primaryText="Home" leftIcon={<HomeIcon />} />
            <Menu.ResourceItem name="portal/admin/budgets" />
            <Menu.ResourceItem name="portal/admin/ynab-categories" />
            {/* TODO  <Menu.ResourceItem name="portal/admin/investments" /> */}
            <Menu.ResourceItem name="portal/admin/loans-and-renewals" />
            <Menu.ResourceItem name="portal/admin/savings" />
            <Menu.ResourceItem name="portal/admin/ynab-server-knowledge" />
            <Menu.ResourceItem name="portal/admin/ynab-transaction" />
          </CustomSubMenu>
          <CustomSubMenu
            handleToggle={() => handleToggle("menuGymSummary")}
            isOpen={state.menuGymSummary}
            name="Gym Summary"
            icon={<FitnessCenterIcon />}
            dense={dense}
          ></CustomSubMenu>
          <CustomSubMenu
            handleToggle={() => handleToggle("menuLanguages")}
            isOpen={state.menuLanguages}
            name="Languages"
            icon={<TranslateIcon />}
            dense={dense}
          ></CustomSubMenu>
          <CustomSubMenu
            handleToggle={() => handleToggle("menuTravelPlanning")}
            isOpen={state.menuTravelPlanning}
            name="Travel Planning"
            icon={<AirplaneTicketIcon />}
            dense={dense}
          ></CustomSubMenu>
          <CustomSubMenu
            handleToggle={() => handleToggle("menuUtilities")}
            isOpen={state.menuUtilities}
            name="Utilities"
            icon={<BoltIcon />}
            dense={dense}
          ></CustomSubMenu>
        </Grid>
        <hr style={{ width: "100%" }} />
        <LogoutMenuButton />
      </Grid>
    </Box>
  );
};

export default CustomMenu;
