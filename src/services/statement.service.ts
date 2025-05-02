// Activity route

import { api } from "../configs/axios";

type StatementParams = {
  creditId: number;
  debitId: number;
  savingsId: number;
  startDate: string;
  endDate: string;
};

type StatementResponse = {
  data: {
    pdf_buffer: string;
  };
};
export default class StatementService {
  private static prefix = "/statement";
  static async getAllStatements(data: StatementParams) {
    try {
      const res = await api
        .get<StatementResponse>(`${this.prefix}/generate-statement`, {
          params: {
            credit: data.creditId,
            debit: data.debitId,
            savings: data.savingsId,
            start_date: data.startDate,
            end_date: data.endDate,
          },
        })
        .then((res) => res.data.data);
      console.log(res);
      return res.pdf_buffer;
    } catch (error) {
      console.error("Error fetching statements:", error);
      throw new Error("Failed to fetch statements");
    }
  }
}
