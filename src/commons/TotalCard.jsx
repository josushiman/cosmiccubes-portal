import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { CustomCard } from "./CustomCard";
import formatCurrency from "../hooks/formatCurrency";

const TotalCard = ({ value }) => {
  return (
    <CustomCard>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Typography variant="h5" fontWeight={300}>
          Total
        </Typography>
        <Typography variant="h4" fontWeight={500}>
          £ {formatCurrency(value, false, true)}
        </Typography>
      </Grid>
    </CustomCard>
  );
};

export default TotalCard;
