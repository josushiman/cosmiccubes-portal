import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { useState } from "react";

const itemSelected = {
  backgroundColor: "#313131",
  padding: "0.75rem 1.75rem",
  borderRadius: "0.25rem",
  cursor: "pointer",
};

const defaultStyle = {
  cursor: "pointer",
};

const BudgetsNeeded = () => {
  const { data, loading, error } = useAsync("/budgets-needed");
  const [category, setCategory] = useState(0);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  const handleClick = (index) => {
    setCategory(index);
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
        {data.categories.map((value, index) => (
          <Typography
            key={index}
            fontWeight={200}
            padding={"0.75rem 1.75rem"}
            onClick={() => handleClick(index)}
            sx={category == index ? itemSelected : defaultStyle}
          >
            {value.name}: <strong>{value.count}</strong>
          </Typography>
        ))}
      </Grid>
      <hr style={{ width: "100%", opacity: "5%", marginBottom: "0.25rem" }} />
      <Grid
        container
        flexDirection={"column"}
        flexWrap={"nowrap"}
        maxHeight={"5rem"}
        sx={{
          overflowY: "scroll",
        }}
      >
        {data.categories[category].subcategories.map((value, index) => (
          <Typography
            key={index}
            variant="subtitle1"
            padding={"0.75rem 1.75rem"}
            // onClick={() => handleClick(index)}
          >
            {value}
          </Typography>
        ))}
      </Grid>
    </CustomCard>
  );
};

export default BudgetsNeeded;
