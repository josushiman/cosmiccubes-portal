import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Grid from "@mui/material/Unstable_Grid2";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";
import useAsync from "../../hooks/useAsync";
import HandleDataLoad from "../../commons/HandleDataLoad";
import InsuranceDetails from "./insurance/InsuranceDetails";

const Insurance = () => {
  const { data, loading, error } = useAsync("/insurance");
  const [index, setIndex] = useState(0);
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useGesture(
    {
      onDrag: ({ down, movement: [mx], direction: [dx], distance, cancel }) => {
        if (distance > 50) cancel(); // Cancel the gesture if it exceeds XXXpx

        api.start({ x: down ? mx : 0, immediate: down });

        if (!down && distance > 5) {
          if (dx > 0) {
            // Swiped right
            setIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : prevIndex
            );
          } else if (dx < 0) {
            // Swiped left
            setIndex((prevIndex) =>
              prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
            );
          }
        }
      },
    },
    {
      drag: { filterTaps: true, axis: "x" },
    }
  );

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return (
    <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
      <Grid
        container
        flexDirection={"column"}
        {...bind()}
        component={animated.div}
        style={{ x }}
      >
        {data.map((_, i) => (
          <Grid key={i} style={{ display: i === index ? "block" : "none" }}>
            <InsuranceDetails data={data[i]} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        columnGap={"0.5rem"}
        sx={{ color: "#F0F0C9" }}
      >
        {data.map((_, i) => (
          <Grid key={i}>
            {i === index ? (
              <CircleIcon fontSize="small" />
            ) : (
              <RadioButtonUncheckedIcon
                fontSize="small"
                onClick={() => setIndex(i)}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Insurance;
