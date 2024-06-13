import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { CustomCard } from "../../commons/CustomCard";
import { useContext } from "react";
import { TimePeriodContext } from "../../context/TimePeriodContext";
import HandleDataLoad from "../../commons/HandleDataLoad";
import useAsync from "../../hooks/useAsync";
import formatCurrency from "../../hooks/formatCurrency";
import PayeesChart from "./components/PayeesChart";
import CustomDataTable from "../../commons/CustomDataTable";

// Payees broken down by:
//  Number of unique payees (no bills)
//  Payee spent on the most
//  Bar Graph on payees sort by most spent to least
//  Data Table below to allow filter and result (show the big spender by default)

const PayeeSummary = () => {
  const { timePeriod } = useContext(TimePeriodContext);
  const { data, loading, error } = useAsync(`/payee-summary${timePeriod}`);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        columnGap={"0.5rem"}
        gridTemplateRows={"6rem"}
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
            flexDirection={"column"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h5">{data.count}</Typography>
            <Typography>Count</Typography>
          </Grid>
        </CustomCard>
        <CustomCard
          sx={{
            width: "100%",
            height: "100%",
            gridColumn: "span 2",
          }}
          nopadding={"true"}
        >
          <Grid
            container
            flexDirection={"column"}
            rowGap={"0.5rem"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h5">
              £ {formatCurrency(data.topspender.total, false, false)}
            </Typography>
            <Typography>Topspender</Typography>
          </Grid>
        </CustomCard>
      </Grid>
      <PayeesChart data={data.data} payeeCount={data.count} />
      <CustomDataTable data={data.data} defaultRowsPerPage={10} />
    </Grid>
  );
};

export default PayeeSummary;
