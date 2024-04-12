import { Button } from "@mui/material";
import { CustomCard } from "../../commons/CustomCard";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <CustomCard>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          color: "white",
        }}
      >
        Back
      </Button>
    </CustomCard>
  );
};

export default BackButton;
