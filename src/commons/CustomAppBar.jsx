import { useContext } from "react";
import { AppBar } from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ModalContext } from "../context/ModalContextProvider";
import TimeRangeSelector from "../dashboards/commons/TimeRangeSelector";

const defaultStyle = {
  cursor: "pointer",
  margin: "0.25rem",
};

const CustomAppBar = () => {
  const { isModalOpen, toggleModal } = useContext(ModalContext);

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
        <CalendarMonthIcon style={defaultStyle} />
      </Grid>
      {isModalOpen ? <TimeRangeSelector /> : null}
    </AppBar>
  );
};

export default CustomAppBar;
