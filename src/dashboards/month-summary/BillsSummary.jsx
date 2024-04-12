import useAsync from "../../hooks/useAsync";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { CustomCard } from "../../commons/CustomCard";
import formatCurrency from "../../hooks/formatCurrency";
import Navigation from "../commons/Navigation";
import { BorderLinearProgressWithBackground } from "../../commons/BorderLinearProgress";

const BillsSummary = () => {
  const { data, loading, error } = useAsync("/upcoming-bills");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  const SubCategoryList = ({ data, total_bills }) => {
    return data.map((value, index) => {
      const progress = (value.total / total_bills) * 100;

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
              £ {formatCurrency(value.total)}
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
      <CustomCard
        sx={{
          padding: "1.5rem 2rem",
        }}
      >
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingBottom={"1rem"}
        >
          <Typography variant="h5" fontWeight={300}>
            Bills
          </Typography>
          <Typography variant="h4" fontWeight={500}>
            £ {formatCurrency(data.total, false, true)}
          </Typography>
        </Grid>
        <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
        <Grid
          container
          flexDirection={"column"}
          gap={"1.5rem"}
          padding={"1rem 0"}
        >
          <SubCategoryList data={data.subcategories} total_bills={data.total} />
        </Grid>
      </CustomCard>
      <CustomCard onClick={() => console.log("go there")}>
        <Grid container padding={"1rem"} justifyContent={"center"}>
          <Typography variant="h6">See payment dates</Typography>
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default BillsSummary;
