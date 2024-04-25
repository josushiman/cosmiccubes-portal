import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import { CustomCard } from "../../commons/CustomCard";
import HandleDataLoad from "../../commons/HandleDataLoad";

const Insurance = () => {
  const { data, loading, error } = useAsync("/insurance");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <Link
      to={`/insurance/details`}
      state={{ data: data }}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
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
            Insurance renewals
          </Typography>
        </Grid>
        <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
        <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
          {data.map((value, index) => (
            <Grid container key={index} justifyContent={"space-between"}>
              <Typography textTransform={"capitalize"}>{value.name}</Typography>
              <Typography>{value.end_date}</Typography>
            </Grid>
          ))}
        </Grid>
      </CustomCard>
    </Link>
  );
};

export default Insurance;
