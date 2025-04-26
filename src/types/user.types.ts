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
  accountStatus: string;
  accountType: string;
};

export type LoginResponse = {
  data: {
    access_token: string;
    full_name: string;
    account_id: string;
  };
};

export type Acc = {
  account_id: string;
};

export type OpenedAccountResponse = {
  data: Acc;
};
