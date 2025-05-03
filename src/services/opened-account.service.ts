import { api } from "../configs/axios";
import { OpenedAccount, OpenedAccountNumber } from "../types/entities/opened-account.entity";

type OpenedAccountResponse = {
  data: OpenedAccount[];
};

export class OpenedAccountService {
  private static prefix: string = "/opened-account";
  static async getAllOpenedAccountsOfUser(userId: string) {
    try {
      console.log(userId);
      const response = await api
        .get<OpenedAccountResponse>(`${this.prefix}/get-all/${userId}`)
        .then((res) => res.data.data);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching opened accounts:", error);
      throw error;
    }
  }
  static async getOpenedAccountIdByAccountNumber(accountNumber: string) {
    try {
      const res = await api
        .get<{ data: number }>(`${this.prefix}/find-by-account-number/${accountNumber}`)
        .then((res) => res.data.data);
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error fetching opened account ID:", error);
      throw error;
    }
  }
  static async getBothAccountNumber(senderId: number, receiverId: number) {
    try {
      const res = await api
        .get<{
          data: OpenedAccountNumber[];
        }>(`${this.prefix}/get-both-account-number/${senderId}/${receiverId}`)
        .then((res) => res.data.data);
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error fetching opened account ID:", error);
      throw error;
    }
  }
  static async createOpenedAccount(accountId: string) {
    try {
      const response = await api.post(`${this.prefix}/create-account`, {
        account_id: accountId,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating opened account:", error);
      throw error;
    }
  }
}
