import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import { CustomCard } from "../../commons/CustomCard";

const Insurance = () => {
  const { data, loading, error } = useAsync("/insurance");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  return (
    <Link
      to={`/insurance/details`}
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
