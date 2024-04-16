import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { CustomCard } from "../../commons/CustomCard";
import Navigation from "../commons/Navigation";
import { BorderLinearProgressWithBackground } from "../../commons/BorderLinearProgress";
import useAsync from "../../hooks/useAsync";
import formatCurrency from "../../hooks/formatCurrency";

const CategoriesSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(`/categories-summary${timePeriod}`);

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

  const SubCategoryList = ({ data, categoryName }) => {
    return data.map((value, index) => {
      let categoryLinkName = value.name.toLowerCase();
      let cleanName = categoryLinkName.replace(" ", "-");

      return (
        <Link
          key={index}
          to={`/monthly-summary/categories/${categoryName}/${cleanName}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Grid>
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
        </Link>
      );
    });
  };

  return (
    <Grid container rowGap={"1rem"} flexDirection={"column"} padding={"1rem"}>
      <Navigation />
      {data.map((value, index) => {
        return (
          <CustomCard
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
              display={"grid"}
              gridTemplateColumns={"1fr auto"}
              alignItems={"center"}
              paddingBottom={"1rem"}
            >
              <Typography
                variant="h5"
                fontWeight={300}
                textTransform={"capitalize"}
              >
                {value.category == "Internal Master Category"
                  ? "Uncategorized"
                  : value.category}
              </Typography>
              <Typography
                variant="h5"
                fontWeight={500}
                justifySelf={"flex-end"}
              >
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
              <SubCategoryList
                data={value.subcategories}
                categoryName={value.category.toLowerCase()}
              />
            </Grid>
          </CustomCard>
        );
      })}
    </Grid>
  );
};

export default CategoriesSummary;
