import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../../hooks/formatCurrency";

const Transactions = ({ data, accountId }) => {
  let filteredData =
    accountId !== undefined
      ? data.filter((item) => item.account_id == accountId)
      : data;

  if (filteredData.length < 1) {
    return (
      <Card>
        <Typography variant="body1" padding={"1.5rem 2rem"}>
          No transactions during this period...
        </Typography>
      </Card>
    );
  }

  return (
    <Card>
      <Grid
        container
        flexDirection={"column"}
        padding={"1.5rem 2rem"}
        rowGap={"1rem"}
        maxHeight={"15rem"}
        flexWrap={"nowrap"}
        overflow={"scroll"}
      >
        {filteredData.map((value, index) => {
          return (
            <Grid
              key={index}
              container
              display={"grid"}
              gridTemplateColumns={"75% 25%"}
              gridTemplateRows={"repeat(2, 1fr)"}
            >
              <Typography>
                {value.payee.substring(0, 20)}
                {value.payee.length > 20 ? "..." : null}
              </Typography>
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
