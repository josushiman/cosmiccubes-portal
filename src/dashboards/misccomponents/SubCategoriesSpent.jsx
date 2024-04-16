import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
import { BorderLinearProgressNoBackground } from "../../commons/BorderLinearProgress";
import useAsync from "../../hooks/useAsync";

const SubCategoriesSpent = ({ months, year, month }) => {
  const params = months
    ? `?months=${months}`
    : year && month
    ? `?year=${year}&month=${month}`
    : year
    ? `?year=${year}`
    : `?month=${month}`;
  const urlParam = `/ynab/sub-categories-spent${params}`;
  const { data, loading, error } = useAsync(urlParam);

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  // // Example output
  // const data = {
  //   since_date: "12/10/2023",
  //   data: [
  //     {
  //       name: "Going Out",
  //       spent: 928.11,
  //       progress: 72,
  //     },
  //   ],
  // };

  const subcategoriesSpentData = data.data.map((item, index) => (
    <Grid key={index}>
      <Grid container justifyContent={"space-between"} paddingBottom={"0.5rem"}>
        <Typography variant="subtitle1">{item.name}</Typography>
        <Typography
          variant="body1"
          style={{ alignSelf: "flex-end", color: "white" }}
        >
          <span>£</span> {formatCurrency(item.spent)}
        </Typography>
      </Grid>
      <BorderLinearProgressNoBackground
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
        {subcategoriesSpentData}
      </Grid>
    </Card>
  );
};

export default SubCategoriesSpent;
