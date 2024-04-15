import Grid from "@mui/material/Unstable_Grid2";
import CustomButton from "../../commons/CustomButton";
import Breadcrumbs from "./Breadcrumbs";

const Navigation = () => {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"flex-end"}>
      <Breadcrumbs />
      <CustomButton action="back" />
    </Grid>
  );
};

export default Navigation;
