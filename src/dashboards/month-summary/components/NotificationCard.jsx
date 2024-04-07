import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const NotificationCard = ({ data }) => {
  return (
    <Grid container justifyContent={"center"}>
      <Card
        sx={{
          padding: "0.75rem 3rem",
        }}
      >
        <Typography variant="body1">
          <strong>{data}</strong>
        </Typography>
      </Card>
    </Grid>
  );
};

export default NotificationCard;
