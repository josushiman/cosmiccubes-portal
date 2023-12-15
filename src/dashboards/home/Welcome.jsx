import { Box, Card, CardActions, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Welcome = () => {
  return (
    <Card
      sx={{
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "#535353"
            : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

        color: "#fff",
        padding: "20px",
        marginTop: 2,
        marginBottom: "1em",
      }}
    >
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h5" component="h2" gutterBottom>
            Travl Admin Dashboard
          </Typography>
          <Box maxWidth="40em">
            <Typography variant="body1" component="p" gutterBottom>
              This admin dashboard is for managing all the data that exists
              within the Travl Website. You can trigger crawls, and update
              existing information.
            </Typography>
          </Box>
          <CardActions
            sx={{
              padding: { xs: 0, xl: null },
              flexWrap: { xs: "wrap", xl: null },
              "& a": {
                marginTop: { xs: "1em", xl: null },
                marginLeft: { xs: "0!important", xl: null },
                marginRight: { xs: "1em", xl: null },
              },
            }}
          >
            <Button
              variant="contained"
              href="https://travl.info"
              startIcon={<HomeIcon />}
            >
              Travl Website
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default Welcome;
