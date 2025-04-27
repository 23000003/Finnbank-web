import { PersonalData } from "../types/entities/account.entity";
import { api } from "../configs/axios";
import { AccountStatusEnum, AccountTypeEnum } from "../types/enums/account.enum";

export class AccountService {
  private static prefix: string = "/account";
  static async getAccountPersonalData(userId: string) {
    try {
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
        accountStatus: data.account_status as AccountStatusEnum,
        accountType: data.account_type as AccountTypeEnum,
      };
      return personalData;
    } catch (err) {
      console.error("Error fetching account personal data:", err);
      throw err;
    }
  }
}
