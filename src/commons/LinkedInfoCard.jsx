import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";

const LinkedInfoCard = ({ icon, name, value, navLink }) => {
  return (
    <Link
      to={navLink}
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
