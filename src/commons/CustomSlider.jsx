import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const CustomSlider = styled(Slider)({
  color: "#C06969",
  height: 10,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
});

export default CustomSlider;
