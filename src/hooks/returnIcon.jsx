import CancelIcon from "@mui/icons-material/Cancel";
import CategoryIcon from "@mui/icons-material/Category";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TableRowsIcon from "@mui/icons-material/TableRows";
import TodayIcon from "@mui/icons-material/Today";

const iconMap = {
  bills: () => <ReceiptLongIcon />,
  budgets: () => <ShowChartIcon />,
  categories: () => <CategoryIcon />,
  "daily spend": () => <TodayIcon />,
  "on track": (value) => (value ? <CheckCircleIcon /> : <CancelIcon />),
  "past bills": () => <LeaderboardIcon />,
  payees: () => <GroupsIcon />,
  transactions: () => <ReceiptIcon />,
  "view all": () => <TableRowsIcon />,
};

const returnIcon = (name, value = undefined) => {
  const iconFn = iconMap[name];
  return iconFn ? iconFn(value) : null;
};

export default returnIcon;
