// Activity route

import { ActivityData } from "../types/activity.types";

export default class StatementService {
  static async getAllStatements(userId: number) {
    try {
      console.log(userId);
      const mockData: ActivityData[] = [
        {
          date: "2023-10-01",
          refNo: "123456",
          message: "Payment received",
          transactionType: "Received",
          amount: "500.00",
          fee: "5.00",
        },
        {
          date: "2023-10-02",
          refNo: "123457",
          message: "Payment sent",
          transactionType: "Sent",
          amount: "200.00",
          fee: "2.00",
        },
        {
          date: "2023-10-03",
          refNo: "123458",
          message: "Refund processed",
          transactionType: "Deposit",
          amount: "100.00",
          fee: "1.00",
        },
        {
          date: "2023-10-04",
          refNo: "123459",
          message: "Subscription payment",
          transactionType: "Payment",
          amount: "50.00",
          fee: "0.50",
        },
      ];
      return mockData;
    } catch (error) {
      console.error("Error fetching statements:", error);
      throw new Error("Failed to fetch statements");
    }
  }
}
