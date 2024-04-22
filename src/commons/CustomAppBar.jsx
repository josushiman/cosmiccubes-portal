import { useContext } from "react";
import { AppBar } from "react-admin";
import { useLocation } from "react-router-dom";
import { CustomCard } from "./CustomCard";
import Grid from "@mui/material/Unstable_Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ModalContext } from "../context/ModalContextProvider";
import TimeRangeSelector from "../dashboards/commons/TimeRangeSelector";

const disabledStyle = {
  opacity: "10%",
  pointerEvents: "none",
  margin: "0.25rem",
};

const defaultStyle = {
  cursor: "pointer",
  margin: "0.25rem",
};

const CustomAppBar = () => {
  const location = useLocation();
  const { isModalOpen, toggleModal } = useContext(ModalContext);

  // TODO change layout for previous month views
  const currentRoute = location.pathname;

  return (
    <AppBar
      sx={{
        backgroundImage: "none",
      }}
    >
      <Grid
        container
        marginRight={"0.5rem"}
        marginLeft={"auto"}
        onClick={toggleModal}
      >
        <CustomCard />
        <CalendarMonthIcon
          style={currentRoute == "/" ? disabledStyle : defaultStyle}
        />
      </Grid>
      {isModalOpen ? <TimeRangeSelector /> : null}
    </AppBar>
  );
};

export default CustomAppBar;
