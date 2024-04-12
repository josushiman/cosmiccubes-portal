import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../../commons/CustomCard";
import { Link } from "react-router-dom";
import formatCurrency from "../../../hooks/formatCurrency";
import { BorderLinearProgressWithBackground } from "../../../commons/BorderLinearProgress";

const CategoriesOverview = ({ data }) => {
  function returnCategoryString(spent, budget) {
    let textString = `${formatCurrency(spent, false, true)} / ∞`;

    if (budget) {
      textString = `${formatCurrency(spent, false, true)} / ${formatCurrency(
        budget,
        false,
        true
      )}`;
    }

    return <span>£ {textString}</span>;
  }

  const categoriesSpentData = data.map((item, index) => {
    const { name, group, spent, budget } = item;
    let progress = (spent / budget) * 100;

    if (progress > 100) {
      progress = 100;
    }

    return (
      <Grid key={index}>
        <Grid
          container
          justifyContent={"space-between"}
          paddingBottom={"0.5rem"}
        >
          <Typography variant="subtitle1">
            {group} - {name}
          </Typography>
          <Typography
            variant="body1"
            style={{ alignSelf: "flex-end", color: "white" }}
          >
            {returnCategoryString(spent, budget)}
          </Typography>
        </Grid>
        <BorderLinearProgressWithBackground
          variant="determinate"
          value={progress}
        />
      </Grid>
    );
  });

  return (
    <Link
      to="/monthly-summary/categories"
      style={{
        textDecoration: "none",
      }}
    >
      <CustomCard>
        <Grid
          container
          flexDirection={"column"}
          gap={"2rem"}
          padding={"1.5rem 2rem"}
        >
          {categoriesSpentData}
        </Grid>
      </CustomCard>
    </Link>
  );
};

export default CategoriesOverview;
