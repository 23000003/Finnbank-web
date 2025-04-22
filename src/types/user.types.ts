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
  access_token: string;
  fullname: string;
  userId: number;
};
