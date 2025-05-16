export const hideAccountNumber = (accountNumber: string) => {
  // return `•••• •••• •••• ${accountNumber.slice(-4)}`;
  return accountNumber.replace(/(.{4})/g, "$1 ").trim();
};
