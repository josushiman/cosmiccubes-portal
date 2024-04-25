import CustomLoadingScreen from "./CustomLoadingScreen";
import CustomErrorScreen from "./CustomErrorScreen";

const HandleDataLoad = ({ data, loading, error }) => {
  if (loading || !data) {
    // Add skeleton
    return <CustomLoadingScreen />;
  }

  if (error) {
    // Pass generic error message
    return <CustomErrorScreen error={error} />;
  }
};

export default HandleDataLoad;
