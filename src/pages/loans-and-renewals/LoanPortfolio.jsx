import useAsync from "../../hooks/useAsync";
import LoanPortfolioChart from "./LoanPortfolioChart";
import HandleDataLoad from "../../commons/HandleDataLoad";

// Payments remaining of each of the loans

const LoanPortfolio = () => {
  const { data, loading, error } = useAsync("/loan-portfolio");

  if (loading || !data || error) {
    return <HandleDataLoad data={data} loading={loading} error={error} />;
  }

  return <LoanPortfolioChart data={data.accounts} />;
};

export default LoanPortfolio;
