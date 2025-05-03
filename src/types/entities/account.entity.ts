import { AccountStatusEnum, AccountTypeEnum } from "../enums/account.enum";

export type PersonalData = {
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  dateCreated: string;
  accountNumber: string;
  nationalIdNumber: string;
  birthDate: string;
  nationality: string;
  accountStatus: AccountStatusEnum;
  accountType: AccountTypeEnum;
};

export type LoginResponse = {
  access_token: string;
  full_name: string;
  account_id: string;
};

export type Acc = {
  account_id: string;
};

export type OpenedAccountResponse = {
  data: Acc;
};
