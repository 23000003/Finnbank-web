import { useState } from "react";
import { Limit, OpenedAccount } from "../types/entities/opened-account.entity";
import { IActionStatus } from "../types/interfaces/action-status.interface";
import { PostTransaction } from "../types/entities/transaction.entity";
import { TransactionTypeEnum } from "../types/enums/transaction.enum";
import { OpenedAccountService } from "../services/opened-account.service";
import TransactionService from "../services/transaction.service";

type LimitAccounts = "credit" | "savings" | "checking";
interface TransferProps extends IActionStatus {
  userId: string;
  isAtLimit: Limit;
}

export const useTransferMoney = (props: TransferProps) => {
  const { setErrorMessage, setSuccessMessage, setLoading, isAtLimit } = props;

  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [selectedAccount, setSelectedAccount] = useState<OpenedAccount | null>(null);
  const [transferToAccNo, setTransferToAccNo] = useState<string>("");

  const validateInputs = () => {
    setTransferToAccNo(transferToAccNo.replace(/\s/g, ""));
    setDescription(description.replace(/^\s+|\s{2,}/g, " ").trim());
    if (amount === 0 || transferToAccNo === "" || description === "") {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    if (!selectedAccount) {
      setErrorMessage("Please select an account to transfer from.");
      return false;
    }
    if (selectedAccount.account_number === transferToAccNo) {
      setErrorMessage("You cannot transfer to the same account.");
      setTransferToAccNo("");
      return false;
    }
    if (amount > selectedAccount.balance) {
      setErrorMessage("Insufficient balance.");
      setAmount(0);
      return false;
    }
    if (amount <= 0) {
      setErrorMessage("Amount must be greater than 0.");
      setAmount(0);
      return false;
    }
    if (transferToAccNo.length != 16) {
      setErrorMessage("Account number must be at least 16 digits.");
      setTransferToAccNo("");
      return false;
    }
    if (description.length < 10) {
      setErrorMessage("Description must be greater than 10 characters.");
      setDescription("");
      return false;
    }
    if (isAtLimit[selectedAccount.account_type.toLowerCase() as LimitAccounts].isAtLimit) {
      setErrorMessage("Account chosen has reached its daily limit.");
      return false;
    }
    return true;
  };

  // This is to know if the account number exists or not
  // before executing the transfer and display in the modal
  const findReceiverAccount = async () => {
    if (!validateInputs()) return;
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const data = await OpenedAccountService.getOpenedAccountIdByAccountNumber(transferToAccNo);
      const transaction: PostTransaction = {
        sender_id: (selectedAccount as OpenedAccount).openedaccount_id,
        receiver_id: data,
        transaction_type: TransactionTypeEnum.TRANSFER,
        amount: amount,
        transaction_fee: amount * 0.025,
        notes: description,
      };
      return transaction;
    } catch (error) {
      setTransferToAccNo("");
      setErrorMessage("Account does not exists.");
      console.error("Transfer error:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateTransfer = async () => {
    const data = await findReceiverAccount();
    if (data === undefined) return false;
    return data;
  };

  const executeTransfer = async (data: PostTransaction) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const res = await TransactionService.createTransaction(data);
      console.log(res);
      setSuccessMessage("Transfer successful!");
    } catch (error) {
      setErrorMessage("Transfer failed. Please try again.");
      console.error("Transfer error:", error);
    } finally {
      if (selectedAccount) {
        setSelectedAccount({
          ...selectedAccount,
          balance: selectedAccount.balance - amount,
        });
      }
      setLoading(false);
    }
  };

  return {
    selectedAccount,
    setSelectedAccount,
    amount,
    setAmount,
    description,
    setDescription,
    transferToAccNo,
    setTransferToAccNo,
    validateTransfer,
    executeTransfer,
  };
};
