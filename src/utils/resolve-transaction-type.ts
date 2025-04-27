import { TransactionTypeEnum } from "../types/enums/transaction.enum";

type TransactionParams = {
  type: TransactionTypeEnum;
  receiver_id: number;
  sender_id: number;
  openedAccountIds: number[];
};

export const resolveTransactionType = ({
  type,
  receiver_id,
  sender_id,
  openedAccountIds,
}: TransactionParams): string => {
  if (openedAccountIds.includes(receiver_id) && openedAccountIds.includes(sender_id)) {
    return "Deposit";
  }
  if (type === TransactionTypeEnum.TRANSFER && openedAccountIds.includes(receiver_id)) {
    return "Received";
  }

  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};
