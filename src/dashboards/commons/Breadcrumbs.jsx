import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomCard } from "../../commons/CustomCard";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  let routeParts = currentRoute.split("/");

  // Only return the last 2 paths
  let routePartsLength = routeParts.length;
  if (routePartsLength > 2) {
    routeParts = routeParts.splice(-2);
  }

  const cleanRouteName = (value) => {
    let cleanRouteLength = value.length;

    if (cleanRouteLength < 1) return null;

    // for UUIDs
    if (cleanRouteLength > 30) return "transaction";

    const cleanName = value.replace("-", " ");

    return decodeURIComponent(cleanName);
  };

  return (
    <Grid container>
      <CustomCard
        sx={{
          padding: "0.5rem 0.75rem",
        }}
      >
        <Grid container columnGap={"0.25rem"}>
          {routeParts.map((value, index) => {
            if (value == "") return null;

            return (
              <Typography
                key={index}
                textTransform={"capitalize"}
                variant="subtitle2"
                fontWeight={300}
              >
                {`${cleanRouteName(value)} ${
                  index == routeParts.length - 1 ? "" : ">"
                }`}
              </Typography>
            );
          })}
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default Breadcrumbs;
