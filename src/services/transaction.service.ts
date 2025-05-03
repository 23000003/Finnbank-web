// Activity route

import { ActivityData, PostTransaction } from "../types/entities/transaction.entity";
import { api } from "../configs/axios";
import { OpenedAccountService } from "./opened-account.service";

export default class TransactionService {
  private static prefix = "/transaction";
  static async getAllTransaction(userId: string, limit: number) {
    try {
      const openData = await OpenedAccountService.getAllOpenedAccountsOfUser(userId);
      const data = await api
        .get<{ data: ActivityData[] }>(`${this.prefix}/get-all`, {
          params: {
            credit: openData[0].openedaccount_id,
            debit: openData[1].openedaccount_id,
            savings: openData[2].openedaccount_id,
            limit: limit,
          },
        })
        .then((res) => res.data.data);
      console.log(data);
      return { data, openData };
    } catch (error) {
      console.error("Error fetching statements:", error);
      throw new Error("Failed to fetch statements");
    }
  }
  static async createTransaction(dto: PostTransaction) {
    try {
      const response = await api.post(`${this.prefix}/generate-transaction`, {
        sender_id: dto.sender_id,
        receiver_id: dto.receiver_id,
        transaction_type: dto.transaction_type,
        amount: dto.amount,
        transaction_fee: dto.transaction_fee,
        notes: dto.notes,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error creating transaction:", error);
      throw error;
    }
  }
}
