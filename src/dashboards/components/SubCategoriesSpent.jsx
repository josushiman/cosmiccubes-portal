import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import formatCurrency from "../../hooks/formatCurrency";
import { BorderLinearProgressNoBackground } from "../../commons/BorderLinearProgress";
// import useAsync from "../../hooks/useAsync";

const SubCategoriesSpent = () => {
  //   const {
  //     data: realData, // TODO change this to data
  //     loading,
  //     error,
  //   } = useAsync("/ynab/available-balance"); // TODO replace with real endpoint.

  //   if (loading || !data) {
  //     // Add skeleton
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     // Pass generic error message
  //     return <div>Error: {error.message}</div>;
  //   }

  // Example output
  const data = {
    since_date: "12/10/2023",
    data: [
      {
        name: "Going Out",
        spent: 928.11,
        progress: 72,
      },
      {
        name: "Technology",
        spent: 293.92,
        progress: 59,
      },
      {
        name: "Groceries",
        spent: 128.22,
        progress: 56,
      },
      {
        name: "Coffee",
        spent: 24,
        progress: 77,
      },
      {
        name: "Parking",
        spent: 12,
        progress: 89,
      },
    ],
  };

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
