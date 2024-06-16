import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";

const LinkedInfoCard = ({ icon, name, value, navLink, navState }) => {
  return (
    <Link
      to={navLink}
      state={navState}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <InfoCard icon={icon} name={name} value={value} />
    </Link>
  );
};

export default LinkedInfoCard;
