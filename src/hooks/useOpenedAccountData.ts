import { useEffect, useState } from "react";
import { OpenedAccountService } from "../services/opened-account.service";
import { OpenedAccount } from "../types/entities/opened-account.entity";
import useActionStatus from "./useActionStatus";

export const useOpenedAccountData = (userId: string) => {
  const { loading, setErrorMessage, setSuccessMessage, setLoading } = useActionStatus();
  const [openedAccounts, setOpenedAccounts] = useState<OpenedAccount[]>([]);

  useEffect(() => {
    const fetchOpenedAccounts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = await OpenedAccountService.getAllOpenedAccountsOfUser(userId);
        setOpenedAccounts(data);
        setLoading(false);
        console.log("Opened Accounts:", data);
        setSuccessMessage("Opened accounts fetched successfully");
      } catch (error) {
        setErrorMessage("Error fetching opened accounts");
        console.error("Error fetching opened accounts:", error);
      }
    };
    fetchOpenedAccounts();
  }, [setErrorMessage, setLoading, setSuccessMessage, userId]);

  return {
    openedAccounts,
    loading,
    setErrorMessage,
    setSuccessMessage,
    setLoading,
  };
};
