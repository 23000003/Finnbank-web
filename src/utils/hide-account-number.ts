export const hideAccountNumber = (accountNumber: string) => {
  console.log(accountNumber);
  return `•••• •••• •••• ${accountNumber.slice(-4)}`;
};
