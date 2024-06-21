import { Checkbox, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { CustomCard } from "../../commons/CustomCard";
import AverageCardBillChart from "./AverageCardBillChart";
import CustomDataTable from "../../commons/CustomDataTable";
import dayjs from "dayjs";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

const AverageCardBill = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(data[data.length - 1]);
  const [amexLine, setAmexLine] = useState(true);
  const [hsbcLine, setHsbcLine] = useState(true);
  const [barclaysLine, setBarclaysLine] = useState(true);

  const billsLength = data.length;
  let monthData = [
    {
      account: "AMEX",
      amount: "-",
    },
    {
      account: "Barclays",
      amount: "-",
    },
    {
      account: "HSBC",
      amount: "-",
    },
  ];

  if (selectedItem) {
    monthData = [
      {
        account: "AMEX",
        amount: selectedItem["BA AMEX"],
      },
      {
        account: "Barclays",
        amount: selectedItem["Barclays CC"],
      },
      {
        account: "HSBC",
        amount: selectedItem["HSBC CC"],
      },
    ];
  }

  return (
    <>
      <CustomCard>
        <DefaultPageGrid>
          <Grid
            container
            columnGap={"0.5rem"}
            padding={"0 0.5rem"}
            justifyContent={"space-between"}
          >
            <Grid
              container
              alignItems={"center"}
              onClick={() => setAmexLine(!amexLine)}
            >
              <Checkbox
                checked={amexLine}
                sx={{
                  color: "#BA306A",
                  "&.Mui-checked": {
                    color: "#BA306A",
                  },
                }}
              />
              <Typography color={"#BA306A"}>AMEX</Typography>
            </Grid>
            <Grid
              container
              alignItems={"center"}
              onClick={() => setBarclaysLine(!barclaysLine)}
            >
              <Checkbox
                checked={barclaysLine}
                sx={{
                  color: "#F0F0C9",
                  "&.Mui-checked": {
                    color: "#F0F0C9",
                  },
                }}
              />
              <Typography color={"#F0F0C9"}>Barclays</Typography>
            </Grid>
            <Grid
              container
              alignItems={"center"}
              onClick={() => setHsbcLine(!hsbcLine)}
            >
              <Checkbox
                checked={hsbcLine}
                sx={{
                  color: "#CFB09A",
                  "&.Mui-checked": {
                    color: "#CFB09A",
                  },
                }}
              />
              <Typography color={"#CFB09A"}>HSBC</Typography>
            </Grid>
          </Grid>
          {billsLength > 0 ? (
            <AverageCardBillChart
              data={data}
              setSelectedItem={setSelectedItem}
              amexLine={amexLine}
              hsbcLine={hsbcLine}
              barclaysLine={barclaysLine}
            />
          ) : (
            <Typography>No card bill data.</Typography>
          )}
          <Grid
            container
            display={"grid"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"1fr"}
            rowGap={"0.5rem"}
          >
            <Typography variant="caption">
              {selectedItem
                ? dayjs(selectedItem["date"]).format("MMMM YYYY")
                : "Select a month"}
            </Typography>
          </Grid>
        </DefaultPageGrid>
      </CustomCard>
      <CustomDataTable data={monthData} />
    </>
  );
};

export default AverageCardBill;
