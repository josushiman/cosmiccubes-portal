import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const CustomCard = styled(Card)(
  ({ backgroundcolor, textColor, nopadding }) => ({
    backgroundImage: "none",
    backgroundColor: backgroundcolor ? backgroundcolor : "#121212",
    color: textColor ? textColor : "#fff",
    padding: nopadding ? "unset" : "1.5rem 2rem",
  })
);
