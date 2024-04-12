import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import useAsync from "../../hooks/useAsync";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Navigation from "../commons/Navigation";
import formatCurrency from "../../hooks/formatCurrency";
import { BorderLinearProgressWithBackground } from "../../commons/BorderLinearProgress";

const CategoriesSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(
    `/ynab/categories-summary${timePeriod}`
  );

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  function returnCategoryString(spent, budget) {
    let textString = `${formatCurrency(spent, false, true)} / ∞`;

    if (budget > 0) {
      textString = `${formatCurrency(spent, false, true)} / ${formatCurrency(
        budget,
        false,
        true
      )}`;
    }

    return <span>£ {textString}</span>;
  }

  const SubCategoryList = ({ data }) => {
    return data.map((value, index) => {
      return (
        <Grid key={index}>
          <Grid
            container
            justifyContent={"space-between"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="subtitle1" textTransform={"capitalize"}>
              {value.name}
            </Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              {returnCategoryString(value.amount, value.budgeted)}
            </Typography>
          </Grid>
          <BorderLinearProgressWithBackground
            variant="determinate"
            value={value.progress}
          />
        </Grid>
      );
    });
  };

  return (
    <Grid container rowGap={"1rem"} flexDirection={"column"} padding={"1rem"}>
      <Navigation />
      {data.map((value, index) => {
        return (
          <Card
            key={index}
            sx={{
              padding: "1.5rem 2rem",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={300}
              textAlign={"right"}
              color={value.status != "on track" ? "#C06969" : "white"}
            >
              {value.status}
            </Typography>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              paddingBottom={"1rem"}
            >
              <Typography
                variant="h5"
                fontWeight={300}
                textTransform={"capitalize"}
              >
                {value.category}
              </Typography>
              <Typography variant="h5" fontWeight={500}>
                £ {formatCurrency(value.amount)}
              </Typography>
            </Grid>
            <hr style={{ width: "100%", opacity: "25%" }} />
            <Grid
              container
              flexDirection={"column"}
              gap={"1.5rem"}
              padding={"1rem 0"}
            >
              <SubCategoryList data={value.subcategories} />
            </Grid>
          </Card>
        );
      })}
    </Grid>
  );
};

export default CategoriesSummary;
