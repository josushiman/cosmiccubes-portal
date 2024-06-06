import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation, useParams, Link } from "react-router-dom";
import { useContext } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { TimePeriodContext } from "../../../context/TimePeriodContext";
import { CustomCard } from "../../../commons/CustomCard";
import formatCurrency from "../../../hooks/formatCurrency";
import useAsync from "../../../hooks/useAsync";
import Trends from "./Trends";
import Transactions from "./Transactions";
import HandleDataLoad from "../../../commons/HandleDataLoad";
import { ThickBorderLinearProgressWithBackground } from "../../../commons/BorderLinearProgress";

// TODO graph to show budget and spent over time

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
      <Grid
        container
        display={"grid"}
        columnGap={"0.5rem"}
        rowGap={"0.5rem"}
        gridTemplateRows={"6rem"}
        gridTemplateColumns={"repeat(3, 1fr)"}
      >
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Typography variant="h5">
              £ {formatCurrency(0.0, false, true)}
            </Typography>
            <Typography>Average</Typography>
          </Grid>
        </CustomCard>
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
            gridColumn: "span 2",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            columns={2}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Grid container alignItems={"center"}>
              <Typography variant="h5">
                £ {formatCurrency(0.0, false, true)}
              </Typography>
            </Grid>
            <Typography>Biggest</Typography>
          </Grid>
        </CustomCard>
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr auto"}
            padding={"1rem"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Typography variant="h5">{0}</Typography>
            <Typography>Count</Typography>
          </Grid>
        </CustomCard>
        <Link
          to={`/categories-summary/${categoryName}/${subcategoryName}/transactions`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <CustomCard
            sx={{
              width: "100%",
              height: "100%",
            }}
            backgroundcolor={"#F0F0C9"}
          >
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gridTemplateRows={"1fr auto"}
              padding={"1rem"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyItems={"center"}
              color={"#121212"}
            >
              <ReceiptIcon />
              <Typography>Transactions</Typography>
            </Grid>
          </CustomCard>
        </Link>
        <Link
          to={`/categories-summary/${categoryName}/${subcategoryName}/trends`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <CustomCard
            sx={{
              width: "100%",
              height: "100%",
            }}
            backgroundcolor={"#F0F0C9"}
          >
            <Grid
              container
              display={"grid"}
              gridTemplateColumns={"1fr"}
              gridTemplateRows={"1fr auto"}
              padding={"1rem"}
              rowGap={"0.5rem"}
              height={"100%"}
              alignItems={"center"}
              justifyItems={"center"}
              color={"#121212"}
            >
              <TrendingUpIcon />
              <Typography>Trends</Typography>
            </Grid>
          </CustomCard>
        </Link>
      </Grid>
      <Trends data={data.trends} />

      <Transactions data={data.transactions} accountId={undefined} />
    </Grid>
  );
};

export default CategoryDetails;
