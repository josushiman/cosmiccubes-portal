import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";

const LoanPortfolio = () => {
  return (
    <CustomCard
      sx={{
        padding: "1.5rem 2rem",
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
      >
        <Typography variant="h5" fontWeight={300}>
          Loan portfolio
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
        <Grid container justifyContent={"space-between"}>
          <Typography>Count</Typography>
          <Typography>2</Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography>Total credit</Typography>
          <Typography>£ {formatCurrency(2342, false, true)}</Typography>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Typography>Next end date</Typography>
          <Typography>15th March</Typography>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default LoanPortfolio;
