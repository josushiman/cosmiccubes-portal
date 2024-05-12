import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const CustomCard = styled(Card)(({ backgroundcolor, textColor }) => ({
  backgroundImage: "none",
  backgroundColor: backgroundcolor ? backgroundcolor : "#121212",
  color: textColor ? textColor : "#fff",
}));
