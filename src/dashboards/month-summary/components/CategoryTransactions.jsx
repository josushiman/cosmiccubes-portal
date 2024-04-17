import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import { CustomCard } from "../../../commons/CustomCard";
import Navigation from "../../commons/Navigation";
import formatCurrency from "../../../hooks/formatCurrency";
import useAsync from "../../../hooks/useAsync";
import Trends from "./Trends";
import Transactions from "./Transactions";

const CategoryTransactions = () => {
  let { categoryName, subcategoryName } = useParams();

  const { data, loading, error } = useAsync(
    `/categories-summary/${categoryName}/${subcategoryName}`
  );

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  categoryName = categoryName.replace("-", " ");

  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <Navigation />
      <CustomCard
        sx={{
          padding: "1.5rem 2rem",
        }}
      >
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Typography
            variant="h5"
            fontWeight={300}
            textTransform={"capitalize"}
          >
            {subcategoryName.replace("-", " ")}
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            £ {formatCurrency(data.total, false, false)}
          </Typography>
        </Grid>
      </CustomCard>
      <Trends data={data.trends} />
      <Transactions data={data.transactions} accountId={undefined} />
    </Grid>
  );
};

export default CategoryTransactions;
