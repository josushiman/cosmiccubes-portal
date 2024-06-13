import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import { useState } from "react";

const BudgetsNeeded = () => {
  const { data, loading, error } = useAsync("/budgets-needed");
  const [category, setCategory] = useState(undefined);

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  if (data.count < 1) {
    return (
      <CustomCard>
        <Typography variant="subtitle1" fontWeight={300}>
          All budgets created
        </Typography>
      </CustomCard>
    );
  }

  const handleClick = (index) => {
    if (index == category) {
      setCategory(undefined);
    } else {
      setCategory(index);
    }
  };

  return (
    <CustomCard>
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
      <Box position={"relative"}>
        <Grid container justifyContent={"space-between"}>
          {data.categories.map((value, index) => (
            <Typography
              key={index}
              fontWeight={200}
              padding={"0.75rem 1.75rem"}
              onClick={() => handleClick(index)}
            >
              {value.name}: <strong>{value.count}</strong>
            </Typography>
          ))}
        </Grid>
        {category == undefined ? null : (
          <Box
            position={"absolute"}
            top={"0px"}
            left={"0px"}
            zIndex={"99"}
            width={"100%"}
            height={"100%"}
            sx={{
              backgroundColor: "#121212",
            }}
          >
            <Grid
              container
              flexDirection={"column"}
              justifyContent={"space-between"}
              height={"100%"}
            >
              <Grid
                container
                flexDirection={"column"}
                flexWrap={"nowrap"}
                maxHeight={"5rem"}
                sx={{
                  overflowY: "scroll",
                }}
              >
                {data.categories[category]?.subcategories.map(
                  (value, index) => (
                    <Typography
                      key={index}
                      variant="subtitle"
                      padding={"0.75rem 1.75rem"}
                    >
                      {value}
                    </Typography>
                  )
                )}
              </Grid>
              <CustomCard
                onClick={() => handleClick(undefined)}
                backgroundcolor={"#C06969"}
                nopadding={"true"}
              >
                <Grid container padding={"unset"} justifyContent={"center"}>
                  <Button
                    sx={{
                      color: "white",
                    }}
                  >
                    back
                  </Button>
                </Grid>
              </CustomCard>
            </Grid>
          </Box>
        )}
      </Box>
    </CustomCard>
  );
};

export default BudgetsNeeded;
