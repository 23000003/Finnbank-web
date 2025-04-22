import { LoginResponse, PersonalData } from "../types/user.types";
import { api } from "../configs/axios";

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
  static async getAccountPersonalData(userId: number) {
    try {
      console.log(userId);
      const data: PersonalData = {
        fullName: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "+1234567890",
        address: "123 Fake Street, Springfield",
        dateCreated: "2023-01-01",
        accountNumber: "1234567891568422",
        nationalIdNumber: "9876543212473412",
        birthDate: "2005-01-01",
        nationality: "American",
        accountStatus: "Active",
        accountType: "Personal",
      };

      return data;
    } catch (err) {
      console.error("Error fetching account personal data:", err);
      throw err;
    }
  }
}
