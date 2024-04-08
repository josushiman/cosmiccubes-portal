import { useContext } from "react";
import { AppBar } from "react-admin";
import { Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ModalContext } from "../context/ModalContextProvider";
import TimeRangeSelector from "../dashboards/commons/TimeRangeSelector";

// const disabledStyle = {
//   opacity: "10%",
//   pointerEvents: "none",
//   margin: "0.25rem",
// };

const defaultStyle = {
  cursor: "pointer",
  margin: "0.25rem",
};

const CustomAppBar = () => {
  const { isModalOpen, toggleModal } = useContext(ModalContext);

  return (
    <AppBar color="primary">
      <Grid
        container
        marginRight={"0.5rem"}
        marginLeft={"auto"}
        onClick={toggleModal}
      >
        <Card />
        <CalendarMonthIcon style={defaultStyle} />
      </Grid>
      {isModalOpen ? <TimeRangeSelector /> : null}
    </AppBar>
  );
};

export default CustomAppBar;
