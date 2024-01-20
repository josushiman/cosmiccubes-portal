import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
import { BorderLinearProgressWithBackground } from "../../commons/BorderLinearProgress";
import useAsync from "../../hooks/useAsync";

const CategoriesSpent = ({ months, year, month }) => {
  const params = months
    ? `?months=${months}`
    : year && month
    ? `?year=${year}&month=${month}`
    : year
    ? `?year=${year}`
    : `?month=${month}`;
  const urlParam = `/ynab/categories-spent${params}`;
  const { data, loading, error } = useAsync(urlParam);

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  // Example output
  // const data = {
  //   since_date: "12/10/2023",
  //   data: [
  //     {
  //       name: "Bills",
  //       spent: 283.92,
  //       budget: 800.12,
  //       progress: 36,
  //     }
  //   ],
  // };

  function returnCategoryString(spent, budget) {
    let textString = formatCurrency(spent);

    if (budget) {
      textString = `${formatCurrency(spent)} / ${formatCurrency(budget)}`;
    }

    return <span>£{textString}</span>;
  }

  const categoriesSpentData = data.data.map((item, index) => (
    <Grid key={index}>
      <Grid container justifyContent={"space-between"}>
        <Typography variant="subtitle1">{item.name}</Typography>
        <Typography
          variant="body1"
          style={{ alignSelf: "flex-end", color: "white" }}
        >
          {returnCategoryString(item.spent, item.budget)}
        </Typography>
      </Grid>
      <BorderLinearProgressWithBackground
        variant="determinate"
        value={item.progress}
      />
    </Grid>
  ));

  return (
    <Card>
      <Grid
        container
        xs={12}
        flexDirection={"column"}
        gap={"1.5rem"}
        padding={"1rem"}
      >
        {categoriesSpentData}
      </Grid>
    </Card>
  );
};

export default CategoriesSpent;
