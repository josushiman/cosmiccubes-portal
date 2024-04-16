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
    <>
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
            <Typography>{data.count}</Typography>
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Typography>Total credit</Typography>
            <Typography>
              £ {formatCurrency(data.total_credit, false, true)}
            </Typography>
          </Grid>
        </Grid>
      </CustomCard>
      {accountsLength > 0 ? <LoanPortfolioChart data={data.accounts} /> : null}
    </>
  );
};

export default LoanPortfolio;
