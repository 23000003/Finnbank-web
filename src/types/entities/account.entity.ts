import { AccountStatusEnum, AccountTypeEnum } from "../enums/account.enum";

export type PersonalData = {
  fullName: string;
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
