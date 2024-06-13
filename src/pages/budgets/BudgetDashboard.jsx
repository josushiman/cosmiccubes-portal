import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TableRowsIcon from "@mui/icons-material/TableRows";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";
import BudgetSummary from "./BudgetSummary";
import BudgetsNeeded from "./BudgetsNeeded";

const BudgetDashboard = () => {
  const { data, loading, error } = useAsync("/budgets-dashboard");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"6rem"}
        columnGap={"0.5rem"}
        rowGap={"0.5rem"}
      >
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
          nopadding={"true"}
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
            <Typography variant="h5">{data.on_track}</Typography>
            <Typography>On track</Typography>
          </Grid>
        </CustomCard>
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
          }}
          nopadding={"true"}
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
            <Typography variant="h5">{data.overspent}</Typography>
            <Typography>Overspent</Typography>
          </Grid>
        </CustomCard>
        <Link
          to={"/portal/admin/budgets"}
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
            nopadding={"true"}
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
              <TableRowsIcon />
              <Typography>View all</Typography>
            </Grid>
          </CustomCard>
        </Link>
      </Grid>
      <CustomCard>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Typography variant="h5" fontWeight={300}>
            Total budgeted
          </Typography>
          <Typography variant="h4" fontWeight={500}>
            £ {formatCurrency(data.total, false, true)}
          </Typography>
        </Grid>
      </CustomCard>
      <BudgetSummary data={data} />
      <BudgetsNeeded />
    </Grid>
  );
};

export default BudgetDashboard;
