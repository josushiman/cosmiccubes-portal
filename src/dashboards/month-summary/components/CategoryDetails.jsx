import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { TimePeriodContext } from "../../../context/TimePeriodContext";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";
import useAsync from "../../../hooks/useAsync";
import Trends from "./Trends";
import Transactions from "./Transactions";
import HandleDataLoad from "../../../commons/HandleDataLoad";
import { ThickBorderLinearProgressWithBackground } from "../../../commons/BorderLinearProgress";

const CategoryDetails = () => {
  let { categoryName, subcategoryName } = useParams();
  const { timePeriod } = useContext(TimePeriodContext);
  const { budgeted, progress } = useLocation().state;

  const { data, loading, error } = useAsync(
    `/categories-summary/${categoryName}/${subcategoryName}${timePeriod}`
  );

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  categoryName = categoryName.replace("-", " ");

  // This is really rudimentary as it expects there to be a L6Months trend being set.
  const suggestedBudget = data.trends[2].avg_spend;
  const overspend =
    data.total >= budgeted ? true : budgeted == 0 ? true : false;

  const BudgetSet = () => (
    <>
      <Typography fontWeight={200}>Budget</Typography>
      <Typography fontWeight={200}>
        £ {formatCurrency(budgeted, false, true)}
      </Typography>
    </>
  );

  const BudgetSuggest = () => (
    <>
      <Typography fontWeight={200}>Suggested budget</Typography>
      <Typography fontWeight={200}>
        £ {formatCurrency(suggestedBudget, false, true)}
      </Typography>
    </>
  );

  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      <CustomCard
        sx={{
          padding: "1.5rem 2rem",
        }}
      >
        <Grid container flexDirection={"column"} rowGap={"1rem"}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
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
          <ThickBorderLinearProgressWithBackground
            variant="determinate"
            value={progress}
          />
          <Grid container justifyContent={"space-between"}>
            {overspend ? <BudgetSuggest /> : <BudgetSet />}
          </Grid>
        </Grid>
      </CustomCard>
      <Trends data={data.trends} />{" "}
      {/* TODO maybe hide this is the time period has changed?*/}
      <Transactions data={data.transactions} accountId={undefined} />
    </Grid>
  );
};

export default CategoryDetails;
