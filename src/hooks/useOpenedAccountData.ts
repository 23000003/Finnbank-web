import { useEffect, useState } from "react";
import { OpenedAccountService } from "../services/opened-account.service";
import { Limit, OpenedAccount } from "../types/entities/opened-account.entity";
import useActionStatus from "./useActionStatus";
import TransactionService from "../services/transaction.service";

export const useOpenedAccountData = (userId: string, accountType: string) => {
  const { loading, setErrorMessage, setSuccessMessage, setLoading } = useActionStatus(true);
  const [openedAccounts, setOpenedAccounts] = useState<OpenedAccount[]>([]);
  const [isAtLimit, setIsAtLimit] = useState<Limit | null>(null);

  useEffect(() => {
    const fetchOpenedAccounts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const data = await OpenedAccountService.getAllOpenedAccountsOfUser(userId);
        setOpenedAccounts(data);
        setLoading(false);
        console.log("Opened Accounts:", data);

        const isAtLimit = await TransactionService.getIsAccountAtLimit(
          data.map((account) => account.openedaccount_id),
          accountType
        );
        setIsAtLimit({
          credit: { creditId: data[0].openedaccount_id, isAtLimit: isAtLimit[0] },
          checking: { debitId: data[1].openedaccount_id, isAtLimit: isAtLimit[1] },
          savings: { savingsId: data[2].openedaccount_id, isAtLimit: isAtLimit[2] },
        });
      } catch (error) {
        setErrorMessage("Error fetching opened accounts");
        console.error("Error fetching opened accounts:", error);
      }
    };
    fetchOpenedAccounts();
  }, [setErrorMessage, setLoading, setSuccessMessage, userId, accountType]);

  return {
    openedAccounts,
    loading,
    setErrorMessage,
    setSuccessMessage,
    setLoading,
    isAtLimit,
  };
};
