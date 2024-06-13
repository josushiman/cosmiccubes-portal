import Grid from "@mui/material/Unstable_Grid2";

const InfoCardGrid = ({ children }) => (
  <Grid
    container
    display={"grid"}
    gridTemplateColumns={"repeat(3, 1fr)"}
    gridTemplateRows={"repeat(2, 6rem)"}
    columnGap={"0.5rem"}
    rowGap={"0.5rem"}
  >
    {children}
  </Grid>
);

export default InfoCardGrid;
