import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Navigation from "../commons/Navigation";
import formatCurrency from "../../hooks/formatCurrency";
import { BorderLinearProgressWithBackground } from "../../commons/BorderLinearProgress";

export const testCateogryData = [
  {
    category: "frequent",
    amount: 1500,
    status: "on track",
    subcategories: [
      {
        name: "going out",
        amount: 700,
      },
      {
        name: "going out",
        amount: 300,
      },
    ],
  },
  {
    category: "work",
    amount: 723.33,
    status: "overspend",
    subcategories: [
      {
        name: "going out",
        amount: 1200,
      },
      {
        name: "going out",
        amount: 1200,
      },
      {
        name: "going out",
        amount: 1200,
      },
      {
        name: "going out",
        amount: 1200,
      },
    ],
  },
  {
    category: "frequent",
    amount: 723.33,
    status: "on track",
    subcategories: [
      {
        name: "going out",
        amount: 1200,
      },
      {
        name: "going out",
        amount: 1200,
      },
    ],
  },
  {
    category: "frequent",
    amount: 723.33,
    status: "on track",
    subcategories: [
      {
        name: "going out",
        amount: 1200,
      },
      {
        name: "going out",
        amount: 1200,
      },
    ],
  },
  {
    category: "frequent",
    amount: 723.33,
    status: "on track",
    subcategories: [
      {
        name: "going out",
        amount: 1200,
      },
      {
        name: "going out",
        amount: 1200,
      },
    ],
  },
];

const CategoriesSummary = ({ data = testCateogryData }) => {
  const SubCategoryList = ({ total, data }) => {
    return data.map((value, index) => {
      let progress = (value.amount / total) * 100;

      if (progress > 100) {
        progress = 100;
      }

      return (
        <Grid key={index}>
          <Grid
            container
            justifyContent={"space-between"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="subtitle1" textTransform={"capitalize"}>
              {value.name}
            </Typography>
            <Typography
              variant="body1"
              style={{ alignSelf: "flex-end", color: "white" }}
            >
              £ {formatCurrency(value.amount, false, true)}
            </Typography>
          </Grid>
          <BorderLinearProgressWithBackground
            variant="determinate"
            value={progress}
          />
        </Grid>
      );
    });
  };

  return (
    <Grid container rowGap={"1rem"} flexDirection={"column"} padding={"1rem"}>
      <Navigation />
      {data.map((value, index) => {
        return (
          <Card
            key={index}
            sx={{
              padding: "1.5rem 2rem",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={300}
              textAlign={"right"}
              color={value.status != "on track" ? "#C06969" : "white"}
            >
              {value.status}
            </Typography>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              paddingBottom={"1rem"}
            >
              <Typography
                variant="h5"
                fontWeight={300}
                textTransform={"capitalize"}
              >
                {value.category}
              </Typography>
              <Typography variant="h5" fontWeight={500}>
                £ {formatCurrency(value.amount)}
              </Typography>
            </Grid>
            <hr style={{ width: "100%", opacity: "25%" }} />
            <Grid
              container
              flexDirection={"column"}
              gap={"1.5rem"}
              padding={"1rem 0"}
            >
              <SubCategoryList
                total={value.amount}
                data={value.subcategories}
              />
            </Grid>
          </Card>
        );
      })}
    </Grid>
  );
};

export default CategoriesSummary;
