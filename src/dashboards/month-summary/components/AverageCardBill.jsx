import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import useAsync from "../../../hooks/useAsync";
import HandleDataLoad from "../../../commons/HandleDataLoad";
import { CustomCard } from "../../../commons/CustomCard";
import AverageCardBillChart from "./AverageCardBillChart";
import formatCurrency from "../../../hooks/formatCurrency";

const AverageCardBill = () => {
  const { data, loading, error } = useAsync("/average-card-bill?months=6");
  const [selectedItem, setSelectedItem] = useState(undefined);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const billsLength = data.length;

  return (
    <CustomCard
      sx={{
        padding: "1rem 1rem",
      }}
    >
      <Grid container paddingBottom={"1rem"}>
        <Typography variant="h5" fontWeight={300}>
          Average bills
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container flexDirection={"column"} rowGap={"1rem"}>
        {billsLength > 0 ? (
          <AverageCardBillChart data={data} setSelectedItem={setSelectedItem} />
        ) : (
          <Typography>No card bill data.</Typography>
        )}
        <Grid
          container
          display={"grid"}
          gridTemplateColumns={"auto 1fr"}
          gridTemplateRows={"1fr"}
          columnGap={"0.5rem"}
        >
          <Box border={"1px solid #313131"} borderRadius={"0.25rem"}>
            <Grid
              container
              flexDirection={"column"}
              flexWrap={"nowrap"}
              rowGap={"0.5rem"}
              padding={"0.25rem 1rem"}
            >
              <Typography color={"#BA306A"}>◆ AMEX</Typography>
              <Typography color={"#CFB09A"}>◆ HSBC</Typography>
              <Typography color={"#F0F0C9"}>◆ Barclays</Typography>
            </Grid>
          </Box>
          <Box>
            {selectedItem ? (
              <Grid
                container
                flexDirection={"column"}
                flexWrap={"nowrap"}
                rowGap={"0.5rem"}
                padding={"0.25rem 1rem"}
                alignItems={"flex-end"}
              >
                <Typography>
                  £ {formatCurrency(selectedItem["BA AMEX"])}
                </Typography>
                <Typography>
                  £ {formatCurrency(selectedItem["HSBC CC"])}
                </Typography>
                <Typography>
                  £ {formatCurrency(selectedItem["Barclays CC"])}
                </Typography>
              </Grid>
            ) : (
              <Grid
                container
                width={"100%"}
                height={"100%"}
                alignContent={"center"}
                justifyContent={"center"}
              >
                <Typography fontStyle={"italic"}>Select a month</Typography>
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default AverageCardBill;
