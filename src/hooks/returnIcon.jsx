import CategoryIcon from "@mui/icons-material/Category";
import GroupsIcon from "@mui/icons-material/Groups";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TodayIcon from "@mui/icons-material/Today";

const iconMap = {
  bills: <ReceiptLongIcon />,
  budgets: <ShowChartIcon />,
  categories: <CategoryIcon />,
  "daily spend": <TodayIcon />,
  payees: <GroupsIcon />,
  transactions: <ReceiptIcon />,
};

const returnIcon = (name) => {
  return iconMap[name];
};

export default returnIcon;
