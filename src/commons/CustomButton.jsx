import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "./CustomCard";

const CustomButton = ({ action }) => {
  const navigate = useNavigate();

  const setClickFunction = () => {
    if (action == "back") {
      navigate(-1);
    } else if (action == "see payment dates") {
      navigate("/monthly-summary/bills/details");
    }
  };

  return (
    <CustomCard onClick={setClickFunction}>
      <Grid
        container
        padding={action != "back" ? "1rem" : "unset"}
        justifyContent={"center"}
      >
        <Button
          sx={{
            color: "white",
          }}
        >
          {action}
        </Button>
      </Grid>
    </CustomCard>
  );
};

export default CustomButton;
