import { TransactionStatusEnum, TransactionTypeEnum } from "../enums/transaction.enum";

export type PostTransaction = {
  sender_id: number;
  receiver_id: number;
  transaction_type: TransactionTypeEnum;
  amount: number;
  transaction_fee: number;
  notes: string;
};

export type ActivityData = {
  transaction_id: number;
  sender_id: number;
  receiver_id: number;
  date_transaction: string;
  ref_no: string;
  notes: string;
  transaction_type: TransactionTypeEnum;
  amount: string;
  transaction_fee: string;
  transaction_status: TransactionStatusEnum;
};
