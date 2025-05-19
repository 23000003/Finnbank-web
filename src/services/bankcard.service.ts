import { AxiosError } from "axios";
import { api } from "../configs/axios";
import { Bankcard } from "../types/entities/bankcard.entity";

export class BankcardService {
  private static prefix = "/bankcard";
  static async getAllBankcards(userId: string) {
    try {
      const res = await api
        .get<{ data: Bankcard[] }>(`${this.prefix}/get-all-bankcard/${userId}`)
        .then((res) => res.data.data);
      return res;
    } catch (error) {
      console.error("Error fetching bankcards:", error);
      throw error;
    }
  }
  static async verifyBankcardPinNumber(bankcardId: number, pinNumber: string) {
    try {
      const res = await api.get(`${this.prefix}/verify-pin-number/${bankcardId}/${pinNumber}`);
      return res;
    } catch (error) {
      console.error("Error verifying bankcard PIN:", error);
      if (error instanceof AxiosError && error.response?.data?.error === "Invalid pin number") {
        throw new Error("Invalid pin number");
      }
      throw new Error("Somethings wrong...");
    }
  }
  static async updateBankcardPinNumber(bankcardId: number, pinNumber: string) {
    try {
      const res = await api.patch(`${this.prefix}/update-pin-number/${bankcardId}/${pinNumber}`);
      return res;
    } catch (error) {
      console.error("Error updating bankcard PIN:", error);
      throw error;
    }
  }
}
