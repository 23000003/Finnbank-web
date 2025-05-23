import { OpenedAccountService } from "./opened-account.service";
import { Acc, OpenedAccountResponse, LoginResponse } from "../types/entities/account.entity";
import { api } from "../configs/axios";
import { AxiosError } from "axios";

export class AuthService {
  private static prefix: string = "/auth";
  static async login(email: string, password: string) {
    try {
      const data = await api
        .post<{ data: LoginResponse }>(`${this.prefix}/login`, {
          email,
          password,
        })
        .then((res) => res.data.data);
      return data;
    } catch (err) {
      console.error("Error logging in:", err);
      if (
        err instanceof AxiosError &&
        err.response?.data?.error[0].message.includes(
          "No connection could be made because the target"
        )
      ) {
        throw new Error("Somethings wrong...");
      }
      throw err;
    }
  }
  static async register(
    surname: string,
    firstname: string,
    middlename: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    nationalID: string,
    birthDate: string,
    nationality: string,
    accountType: string
  ) {
    const formattedBirthDate = new Date(birthDate).toISOString();
    try {
      const data: Acc = await api
        .post<OpenedAccountResponse>(`${this.prefix}/signup`, {
          email,
          password,
          first_name: firstname,
          middle_name: middlename,
          last_name: surname,
          phone_number: phoneNumber,
          address,
          account_type: accountType,
          national_id: nationalID,
          nationality,
          birthdate: formattedBirthDate,
        })
        .then((res) => res.data.data);

      console.log(data, "DATA");
      if (data) {
        const openedAccount = await OpenedAccountService.createOpenedAccount(data.account_id);
        console.log("Opened account:", openedAccount);
      }
      return data;
    } catch (err) {
      console.error("Error registering:", err);
      if (
        err instanceof AxiosError &&
        err.response?.data?.error[0].message.includes(
          "No connection could be made because the target"
        )
      ) {
        throw new Error("Somethings wrong...");
      }
      throw err;
    }
  }
  static async validateEmail(email: string) {
    try {
      const res = await api.post(`${this.prefix}/validate-email`, { email });
      return res.data.account_id;
    } catch (err) {
      console.error("Error validating email:", err);
      throw err;
    }
  }
}
