import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAsync from "../../hooks/useAsync";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";
import LoanPortfolioChart from "./LoanPortfolioChart";

const LoanPortfolio = () => {
  const { data, loading, error } = useAsync("/loan-portfolio");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  const accountsLength = data.accounts.length;

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
        <Typography variant="h5" fontWeight={500}>
          {data.count}
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
        <Grid container justifyContent={"space-between"}>
          <Typography>Total credit</Typography>
          <Typography>
            <strong>£ {formatCurrency(data.total_credit, false, true)}</strong>
          </Typography>
        </Grid>
        {accountsLength > 0 ? (
          <LoanPortfolioChart data={data.accounts} />
        ) : null}
      </Grid>
    </CustomCard>
  );
};

export default LoanPortfolio;
