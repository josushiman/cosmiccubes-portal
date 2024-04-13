import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const CustomCard = styled(Card)(({ backgroundcolor }) => ({
  backgroundImage: "none",
  backgroundColor: backgroundcolor ? backgroundcolor : "#121212",
}));
