import { useContext } from "react";
import { AppBar, useLocales, LocalesMenuButton } from "react-admin";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { ModalContext } from "../context/ModalContextProvider";
import TimeRangeSelector from "../dashboards/commons/TimeRangeSelector";
import TimePeriod from "../dashboards/commons/TimePeriod";
import returnTitle from "../hooks/returnTitle";

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
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle = returnTitle(location.pathname);

  return (
    <Grid
      container
      flexDirection={"column"}
      paddingBottom={"0.5rem"}
      paddingLeft={"0.5rem"}
      paddingRight={"0.5rem"}
    >
      <AppBar
        userMenu={false}
        toolbar={<DefaultToolbar />}
        sx={{
          backgroundImage: "none",
        }}
      >
        <TimePeriod />
      </AppBar>
      <Grid container justifyContent={"space-between"}>
        {pageTitle && (
          <Typography
            variant="caption"
            padding={"0.25rem 0.5rem"}
            sx={{
              backgroundColor: "#121212",
              borderRadius: "0.25rem",
            }}
          >
            {pageTitle}
          </Typography>
        )}
        <Grid
          container
          alignItems={"center"}
          padding={"0rem 0.5rem"}
          onClick={() => navigate(-1)}
          sx={{
            backgroundColor: "#C06969",
            borderRadius: "0.25rem",
          }}
        >
          <NavigateBeforeIcon fontSize="small" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomAppBar;
