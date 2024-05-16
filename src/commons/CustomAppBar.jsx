import { useContext } from "react";
import { AppBar, useLocales, LocalesMenuButton } from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ModalContext } from "../context/ModalContextProvider";
import TimeRangeSelector from "../dashboards/commons/TimeRangeSelector";
import TimePeriod from "../dashboards/commons/TimePeriod";

const defaultStyle = {
  cursor: "pointer",
  margin: "0.25rem",
};

const DefaultToolbar = () => {
  const { isModalOpen, toggleModal } = useContext(ModalContext);
  const locales = useLocales();

  return (
    <>
      {locales && locales.length > 1 ? <LocalesMenuButton /> : null}
      <Grid
        container
        onClick={toggleModal}
        width={"2.5rem"}
        justifyContent={"center"}
      >
        <CalendarMonthIcon style={defaultStyle} />
      </Grid>
      {isModalOpen ? <TimeRangeSelector /> : null}
    </>
  );
};

const CustomAppBar = () => {
  return (
    <AppBar
      userMenu={false}
      toolbar={<DefaultToolbar />}
      sx={{
        backgroundImage: "none",
      }}
    >
      <TimePeriod />
    </AppBar>
  );
};

export default CustomAppBar;
