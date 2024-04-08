import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../../hooks/formatCurrency";

const Transactions = ({ data }) => {
  return (
    <Card>
      <Grid
        container
        flexDirection={"column"}
        padding={"1.5rem 2rem"}
        rowGap={"1rem"}
      >
        {data.map((value, index) => {
          return (
            <Grid
              key={index}
              container
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
            >
              <Typography>{value.payee}</Typography>
              <Typography textAlign={"right"}>
                £ {formatCurrency(value.amount)}
              </Typography>
              <Typography
                fontStyle={"italic"}
                variant="subtitle2"
                fontWeight={300}
              >
                {value.subcategory} - {value.category}
              </Typography>
              <Typography
                textAlign={"right"}
                fontStyle={"italic"}
                variant="subtitle2"
                fontWeight={300}
              >
                {value.date}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default Transactions;
