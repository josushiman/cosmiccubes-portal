import Grid from "@mui/material/Unstable_Grid2";

const DefaultPageGrid = ({ children }) => {
  return (
    <Grid container rowGap={"0.5rem"} flexDirection={"column"}>
      {children}
    </Grid>
  );
};

export default DefaultPageGrid;
