const pathMap = {
  "/": "Home",
  "/monthly-summary/bills": "Bills summary",
  "/monthly-summary/categories": "Categories summary",
  "/monthly-summary/payees": "Payee summary",
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

const splitString = (string) => {
  return string.replace("-", " ");
};

const returnTitle = (pathname) => {
  if (pathname.startsWith("/monthly-summary/categories/")) {
    const pathParts = pathname.split("/monthly-summary/categories/");
    const categoryParts = pathParts[1].split("/");
    let categoryName = categoryParts[0];

    if (categoryParts[0] == "non-monthly-expenses") {
      categoryName = "non-monthly expenses";
    }

    if (categoryParts[1].includes("-")) {
      return `${categoryName} - ${splitString(categoryParts[1])}`;
    }
    return `${categoryName} - ${categoryParts[1]}`;
  }

  return pathMap[pathname];
};
export default returnTitle;
