import { PersonalData } from "../types/user.types";

export class AccountService {
  static async getAccountPersonalData(userId: number) {
    try {
      console.log(userId);
      const data: PersonalData = {
        fullName: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "+1234567890",
        address: "123 Fake Street, Springfield",
        dateCreated: "2023-01-01",
        accountNumber: "123456789",
        nationalIdNumber: "987654321",
      };

      return data;
    } catch (err) {
      console.error("Error fetching account personal data:", err);
      throw err;
    }
  }
}
