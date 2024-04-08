import Grid from "@mui/material/Unstable_Grid2";
import BackButton from "./BackButton";
import Breadcrumbs from "./Breadcrumbs";

const Navigation = () => {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"flex-end"}>
      <Breadcrumbs />
      <BackButton />
    </Grid>
  );
};

export default Navigation;
