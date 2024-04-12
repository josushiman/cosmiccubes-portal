import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const BorderLinearProgressNoBackground = styled(LinearProgress)(() => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#121212",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: "#C06969",
  },
}));

export const ThickBorderLinearProgressWithBackground = styled(LinearProgress)(
  ({ theme, value }) => ({
    height: 20,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: value >= 100 ? "#C06969" : "#DEF6CA",
    },
  })
);

export const BorderLinearProgressWithBackground = styled(LinearProgress)(
  ({ theme, value }) => ({
    height: 9,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: value >= 100 ? "#C06969" : "#DEF6CA",
    },
  })
);

export const BorderLinearProgressWhiteBackground = styled(LinearProgress)(
  () => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: "#C06969",
    },
  })
);
