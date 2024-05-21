import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";

const CustomCreateButton = ({ resource }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${resource}/create`);
  };

  return (
    <Grid
      container
      onClick={handleClick}
      alignSelf={"flex-end"}
      columnGap={"0.25rem"}
      padding={"0.5rem 0rem"}
      color={"white"}
    >
      <Typography>Create</Typography>
      <AddBoxIcon />
    </Grid>
  );
};

export default CustomCreateButton;
