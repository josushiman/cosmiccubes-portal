import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";

const BudgetsNeeded = () => {
  const { data, loading, error } = useAsync("/budgets-needed");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const SubCategories = () => {
    return (
      <Grid
        container
        flexDirection={"column"}
        rowGap={"0.75rem"}
        height={"6rem"}
        flexWrap={"nowrap"}
        sx={{
          overflowY: "scroll",
        }}
      >
        {data.subcategories.map((value, index) => {
          return (
            <Grid key={index} container justifyContent={"space-between"}>
              <Typography fontWeight={200}>{value.category}</Typography>
              <Typography fontWeight={200}>{value.name}</Typography>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
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
          Budgets needed
        </Typography>
        <Typography variant="h5" fontWeight={500}>
          {data.count}
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid container justifyContent={"space-between"}>
        <Typography fontWeight={500} sx={{ textDecoration: "underline" }}>
          Category Group
        </Typography>
        <Typography fontWeight={500} sx={{ textDecoration: "underline" }}>
          Category
        </Typography>
      </Grid>
      <SubCategories />
    </CustomCard>
  );
};

export default BudgetsNeeded;
