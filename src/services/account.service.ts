import { PersonalData } from "../types/entities/account.entity";
import { api } from "../configs/axios";

export type LoginResponse = {
  access_token: string;
  fullname: string;
  userId: number;
};

export class AccountService {
  private static prefix: string = "/account";
  static async login(email: string, password: string) {
    try {
      const data = await api
        .post<LoginResponse>(`${this.prefix}/login`, {
          email,
          password,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      console.error("Error logging in:", err);
      throw err;
    }
  }
  static async getAccountPersonalData(userId: string) {
    try {
      // const data: PersonalData = {
      //   fullName: "John Doe",
      //   email: "johndoe@example.com",
      //   phoneNumber: "+1234567890",
      //   address: "123 Fake Street, Springfield",
      //   dateCreated: "2023-01-01",
      //   accountNumber: "1234567891568422",
      //   nationalIdNumber: "9876543212473412",
      //   birthDate: "2005-01-01",
      //   nationality: "American",
      //   accountStatus: "Active",
      //   accountType: "Personal",
      // };
      const data = await api
        .get(`${this.prefix}/get-user-by-id/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => res.data.data);
      const personalData: PersonalData = {
        fullName: ((data.first_name as string) + " " + data.last_name) as string,
        email: data.email as string,
        phoneNumber: data.phone_number as string,
        address: data.address as string,
        dateCreated: data.date_created as string,
        accountNumber: data.account_number as string,
        nationalIdNumber: data.national_id as string,
        birthDate: data.birthdate as string,
        nationality: data.nationality as string,
        accountStatus: data.account_status as string,
        accountType: data.account_type as string,
      };
      return personalData;
    } catch (err) {
      console.error("Error fetching account personal data:", err);
      throw err;
    }
  }
}
