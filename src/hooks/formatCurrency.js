const formatCurrency = (amount, symbol = null) => {
  if (symbol) {
    // Returns values like so: £12,000
    let GBPCurrency = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return GBPCurrency.format(amount);
  }

  //   Returns the amount with the £ sign, with 2 decimals e.g. 12,728.22
  let GBPCurrency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).resolvedOptions().minimumFractionDigits;

  return amount.toLocaleString("en-GB", {
    minimumFractionDigits: GBPCurrency,
  });
};

export default formatCurrency;
