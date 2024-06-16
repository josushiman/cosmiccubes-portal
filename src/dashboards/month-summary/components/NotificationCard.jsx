import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";

const NotificationCard = ({ data }) => {
  return (
    <Grid container justifyContent={"center"}>
      <CustomCard sx={{ padding: "0.25rem 0.5rem" }}>
        <Typography variant="caption">{data}</Typography>
      </CustomCard>
    </Grid>
  );
};

export default NotificationCard;
