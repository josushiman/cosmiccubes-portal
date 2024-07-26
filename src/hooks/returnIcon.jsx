import CategoryIcon from "@mui/icons-material/Category";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TableRowsIcon from "@mui/icons-material/TableRows";
import TodayIcon from "@mui/icons-material/Today";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";

const iconMap = {
  bills: () => <ReceiptLongIcon />,
  budgets: () => <ShowChartIcon />,
  categories: () => <CategoryIcon />,
  create: () => <CreateIcon />,
  "daily spend": () => <TodayIcon />,
  "on track": (value) => (value ? <CheckIcon /> : <CloseIcon />),
  "past bills": () => <LeaderboardIcon />,
  payees: () => <GroupsIcon />,
  transactions: () => <ReceiptIcon />,
  trending: (value) =>
    value > 0 ? (
      <TrendingUpIcon />
    ) : value < 0 ? (
      <TrendingDownIcon />
    ) : (
      <TrendingFlatIcon />
    ),
  "view all": () => <TableRowsIcon />,
  "workout types": () => <TypeSpecimenIcon />,
};

const returnIcon = (name, value = undefined) => {
  const iconFn = iconMap[name];
  return iconFn ? iconFn(value) : null;
};

export default returnIcon;
