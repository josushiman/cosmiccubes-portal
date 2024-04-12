import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";

const NotificationCard = ({ data }) => {
  return (
    <Grid container justifyContent={"center"}>
      <CustomCard
        sx={{
          padding: "0.75rem 3rem",
        }}
      >
        <Typography variant="body1">
          <strong>{data}</strong>
        </Typography>
      </CustomCard>
    </Grid>
  );
};

export default NotificationCard;
