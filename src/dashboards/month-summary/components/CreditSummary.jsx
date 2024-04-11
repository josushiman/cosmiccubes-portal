import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../../hooks/formatCurrency";

const CreditSummary = ({ data, accountId, setAccountType }) => {
  const unselectedStyle = {
    opacity: "25%",
  };

  const selectedStyle = {
    opacity: "100%",
  };

  const CardSummary = () => {
    return (
      <Grid container flexDirection={"column"} rowGap={"1.25rem"}>
        {data.accounts.map((value, index) => {
          const imageSource =
            value.name == "BA AMEX"
              ? "/amex.svg?url"
              : value.name == "HSBC CC"
              ? "/hsbc.svg?url"
              : "/barclays.svg?url";

          return (
            <Grid
              key={index}
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              padding={"1rem 1rem 0 1rem"}
              sx={
                value.id == accountId || accountId == undefined
                  ? selectedStyle
                  : unselectedStyle
              }
              onClick={() => setAccountType(value.id)}
            >
              <img src={imageSource} alt={value.name} />
              <Typography variant="h6" fontWeight={300}>
                £ {formatCurrency(value.balance)}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <Grid container flexDirection={"column"}>
      <Card
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
            Total spend:
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            £ {formatCurrency(data.total)}
          </Typography>
        </Grid>
        <hr style={{ width: "100%", opacity: "25%" }} />
        <CardSummary />
      </Card>
    </Grid>
  );
};

export default CreditSummary;
