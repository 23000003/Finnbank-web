import { PersonalData } from "../types/entities/account.entity";
import { api } from "../configs/axios";
import { AccountStatusEnum, AccountTypeEnum } from "../types/enums/account.enum";

export class AccountService {
  private static prefix: string = "/account";
  static async getAccountPersonalData(userId: string) {
    try {
      const data = await api
        .get(`${this.prefix}/get-user-by-id/${userId}`)
        .then((res) => res.data.data);
      const personalData: PersonalData = {
        fullName: ((data.first_name as string) + " " + data.last_name) as string,
        firstName: data.first_name as string,
        middleName: data.middle_name as string,
        lastName: data.last_name as string,
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
  static async updateUser(
    userID: string,
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string
  ) {
    try {
      const data = await api
        .patch(`${this.prefix}/update-user`, {
          account_id: userID,
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          email,
          phone,
          address,
        })
        .then((res) => res.data);
      window.location.reload();
      return data;
    } catch (err) {
      console.error("Error updating :", err);
      throw err;
    }
  }
  static async updateUserDetails(
    userID: string,
    type: "Email" | "Phone" | "Address",
    value: string
  ) {
    try {
      const payload: {
        account_id: string;
        type: string;
        email?: string;
        phone?: string;
        address?: string;
      } = {
        account_id: userID,
        type,
      };
      if (type === "Email") payload.email = value;
      if (type === "Phone") payload.phone = value;
      if (type === "Address") payload.address = value;
      console.log("Payload being sent to backend:", payload);
      const data = await api.patch(`${this.prefix}/update-user-details`, payload);
      window.location.reload();
      return data;
    } catch (error) {
      console.error("Error updating :", error);
      throw error;
    }
  }
  static async updateAccountStatus(userID: string, type: "DEACTIVATE" | "ACTIVATE" | "SUSPEND") {
    try {
      const data = await api.patch(`/auth/update-account-status`, {
        account_id: userID,
        type,
      });
      console.log("Update Account Status called: ", data);
      return data;
    } catch (err) {
      console.error("Error updating :", err);
      throw err;
    }
  }
  static async updatePassword(userId: string, currPass: string, newPass: string) {
    try {
      const data = await api
        .patch(`${this.prefix}/update-password`, {
          auth_id: userId,
          old_password: currPass,
          new_password: newPass,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      console.error("Error updating password:", err);
      throw err;
    }
  }
}
