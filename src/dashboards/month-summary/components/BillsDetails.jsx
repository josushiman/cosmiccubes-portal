import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { CustomCard } from "../../../commons/CustomCard";
import dayjs from "dayjs";
import formatCurrency from "../../../hooks/formatCurrency";
import useAsync from "../../../hooks/useAsync";
import Navigation from "../../commons/Navigation";

const BillsDetails = () => {
  const { data, loading, error } = useAsync("/upcoming-bills/details");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  return (
    <Grid container rowGap={"1rem"} flexDirection={"column"} padding={"1rem"}>
      <Navigation />
      <CustomCard>
        <Grid container flexDirection={"column"} padding={"2rem"}>
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"repeat(3, 1fr)"}
          >
            <Typography
              variant="subtitle1"
              sx={{
                textDecoration: "underline",
              }}
            >
              Bill
            </Typography>
            <Typography
              variant="subtitle1"
              justifySelf={"flex-end"}
              sx={{
                textDecoration: "underline",
              }}
            >
              Date
            </Typography>
            <Typography
              variant="subtitle1"
              justifySelf={"flex-end"}
              sx={{
                textDecoration: "underline",
              }}
            >
              Amount
            </Typography>
          </Grid>
          {data.map((value, index) => {
            let dayValue = dayjs(value.date, "YYYY-MM-DD");
            const todaysDate = dayjs();

            return (
              <Grid container key={index} flexDirection={"column"}>
                <Grid
                  container
                  display={"grid"}
                  gridTemplateColumns={"auto 1fr 33%"}
                  gridTemplateRows={"3.25rem"}
                  alignItems={"start"}
                  sx={{
                    opacity:
                      todaysDate.date() > dayValue.date() ? "20%" : "unset",
                  }}
                >
                  <Grid container flexDirection={"column"}>
                    <Typography variant="body1">
                      {value.payee.substring(0, 15)}
                      {value.payee.length > 15 ? "..." : null}
                    </Typography>
                    <Typography variant="body1">
                      <em>{value.memo ? value.memo : value.name}</em>
                    </Typography>
                  </Grid>
                  <Typography variant="body1" justifySelf={"flex-end"}>
                    {dayValue.date()}
                  </Typography>
                  <Typography variant="body1" justifySelf={"flex-end"}>
                    £ {formatCurrency(value.amount, false, false)}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default BillsDetails;