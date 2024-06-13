import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { CustomCard } from "./CustomCard";
import returnIcon from "../hooks/returnIcon";

const InfoCard = ({ icon, name, value }) => {
  console.debug("Props passed down:", icon, name, value);
  return (
    <CustomCard
      sx={{
        width: "100%",
        height: "100%",
      }}
      backgroundcolor={icon && "#F0F0C9"}
      nopadding={"true"}
    >
      <Grid
        container
        flexDirection={"column"}
        rowGap={"0.5rem"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        color={icon && "#121212"}
      >
        {icon && returnIcon(name)}
        <Typography textTransform={"capitalize"}>{name}</Typography>
      </Grid>
    </CustomCard>
  );
};

export default InfoCard;
