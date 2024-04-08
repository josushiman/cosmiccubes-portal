import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          color: "white",
        }}
      >
        Back
      </Button>
    </Card>
  );
};

export default BackButton;
