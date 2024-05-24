const pathMap = {
  "/": "Home",
  "/monthly-summary/bills": "Bills summary",
  "/monthly-summary/categories": "Categories summary",
  "/monthly-summary/transactions": "Transaction summary",
  "/dashboard/budgets": "Budgets summary",
  "/daily-spend": "Daily spend",
  "/past-bills": "Past bills",
  "/portal/admin/budgets": "Budgets",
  "/portal/admin/ynab-categories": "Categories",
  "/portal/admin/loans-and-renewals": "Loans & renewals",
  "/portal/admin/savings": "Savings",
  "/portal/admin/ynab-transaction": "Transactions",
};

const returnTitle = (pathname) => {
  return pathMap[pathname];
};
export default returnTitle;
