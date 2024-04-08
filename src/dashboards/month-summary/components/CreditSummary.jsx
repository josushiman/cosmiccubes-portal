import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../../hooks/formatCurrency";

const CreditSummary = ({ data }) => {
  const CardSummary = () => {
    return (
      <Grid container flexDirection={"column"} rowGap={"2rem"}>
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
              padding={"1rem 2rem 0 2rem"}
            >
              <img src={imageSource} alt={value.name} />
              <Typography variant="h6" fontWeight={300}>
                £ {formatCurrency(value.amount)}
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
          padding: "2rem",
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
