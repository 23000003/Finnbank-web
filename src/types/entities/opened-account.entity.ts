import { OpenedAccountStatusEnum, OpenedAccountTypeEnum } from "../enums/opened-account.enum";

export type OpenedAccount = {
  openedaccount_id: number;
  account_type: OpenedAccountTypeEnum;
  bankcard_id: number;
  account_number: string;
  balance: number;
  openedaccount_status: OpenedAccountStatusEnum;
  date_created: string;
};

export type OpenedAccountNumber = {
  openedaccount_id: number;
  account_number: string;
};
