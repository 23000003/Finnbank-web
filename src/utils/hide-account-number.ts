export const hideAccountNumber = (accountNumber: string) => {
  return `•••• •••• •••• ${accountNumber.slice(-4)}`;
};
