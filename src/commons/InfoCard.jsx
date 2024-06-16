import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { CustomCard } from "./CustomCard";
import returnIcon from "../hooks/returnIcon";
import { returnValue } from "../hooks/returnValue";

const InfoCard = ({ icon, name, value = undefined, span = undefined }) => {
  console.debug("Props passed down:", icon, name, value);
  return (
    <CustomCard
      sx={{
        width: "100%",
        height: "100%",
        gridColumn: span ? `span ${span}` : "unset",
      }}
      backgroundcolor={icon && value == undefined ? "#F0F0C9" : "#121212"}
      nopadding={"true"}
    >
      <Grid
        container
        flexDirection={"column"}
        rowGap={"0.5rem"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        color={icon && value == undefined && "#121212"}
      >
        {icon ? (
          returnIcon(name, value)
        ) : (
          <Typography variant="h5">{returnValue(name, value)}</Typography>
        )}
        <Typography textTransform={"capitalize"}>{name}</Typography>
      </Grid>
    </CustomCard>
  );
};

export default InfoCard;
