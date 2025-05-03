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
}
