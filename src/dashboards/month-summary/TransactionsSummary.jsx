import Grid from "@mui/material/Unstable_Grid2";
import CreditSummary from "./components/CreditSummary";
import Transactions from "./components/Transactions";
import BackButton from "../commons/BackButton";
import Breadcrumbs from "../commons/Breadcrumbs";

export const testData = {
  summary: {
    total: 123.5,
    accounts: [
      {
        name: "BA AMEX",
        amount: 123.5,
      },
      {
        name: "HSBC CC",
        amount: 123.5,
      },
      {
        name: "Barclays",
        amount: 123.5,
      },
    ],
  },
  transactions: [
    {
      date: "2024-01-07",
      amount: 7.3,
      category: "Frequent",
      subcategory: "Technology",
      payee: "Amazon",
    },
    {
      date: "2024-01-07",
      amount: 7.3,
      category: "Frequent",
      subcategory: "Technology",
      payee: "Amazon",
    },
    {
      date: "2024-01-07",
      amount: 7.3,
      category: "Frequent",
      subcategory: "Technology",
      payee: "Amazon",
    },
    {
      date: "2024-01-07",
      amount: 7.3,
      category: "Frequent",
      subcategory: "Technology",
      payee: "Amazon",
    },
    {
      date: "2024-01-07",
      amount: 7.3,
      category: "Frequent",
      subcategory: "Technology",
      payee: "Amazon",
    },
  ],
};

const TransactionsSummary = ({ data = testData }) => {
  return (
    <Grid container rowGap={"1rem"} flexDirection={"column"} padding={"1rem"}>
      <Grid container justifyContent={"space-between"} alignItems={"flex-end"}>
        <Breadcrumbs />
        <BackButton />
      </Grid>
      <CreditSummary data={data.summary} />
      <Transactions data={data.transactions} />
    </Grid>
  );
};

export default TransactionsSummary;
