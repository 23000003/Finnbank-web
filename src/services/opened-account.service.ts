import { api } from "../configs/axios";

export class OpenedAccountService {
  private static prefix: string = "/opened-account";
  static async getAllOpenedAccountsOfUser(userId: number) {
    try {
      const response = await api.get(`${this.prefix}/get-all/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching opened accounts:", error);
      throw error;
    }
  }
  static async createOpenedAccount(accountId: string) {
    try {
      const response = await api.post(
        `${this.prefix}/create-account`,
        {
          account_id: accountId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating opened account:", error);
      throw error;
    }
  }
}
