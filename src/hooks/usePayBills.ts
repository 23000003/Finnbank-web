import { useState } from "react";
import { OpenedAccount } from "../types/entities/opened-account.entity";
import { IActionStatus } from "../types/interfaces/action-status.interface";
import { TransactionTypeEnum } from "../types/enums/transaction.enum";
import { PostTransaction } from "../types/entities/transaction.entity";
import { Biller } from "../types/entities/billers.entity";
import TransactionService from "../services/transaction.service";
import { OpenedAccountStatusEnum } from "../types/enums/opened-account.enum";

interface PayBillsProps extends IActionStatus {
  account: OpenedAccount;
  biller: Biller;
}

export const usePayBills = (props: PayBillsProps) => {
  const { loading, setLoading, setErrorMessage, setSuccessMessage, account, biller } = props;

  const [selected, setSelected] = useState<OpenedAccount>(account);
  const [consumerName, setConsumerName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [refNumber, setRefNumber] = useState<string>(""); // 8 digits ref no
  const [amount, setAmount] = useState<number>(0);

  const validateInputs = () => {
    setRefNumber(refNumber.replace(/\s/g, ""));
    setDescription(description.replace(/^\s+|\s{2,}/g, " ").trim());
    setConsumerName(consumerName.replace(/^\s+|\s{2,}/g, " ").trim());

    if (refNumber === "" || amount <= 0 || consumerName === "" || description === "") {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    if (refNumber.length !== 8) {
      setErrorMessage("Reference number must be 8 digits long.");
      return false;
    }
    if (amount > selected.balance) {
      setErrorMessage("Insufficient balance.");
      setAmount(0);
      return false;
    }
    if (amount <= 0) {
      setErrorMessage("Amount must be greater than 0.");
      return false;
    }
    if (description.length < 10) {
      setErrorMessage("Description must be at least 10 characters long.");
      return false;
    }
    if (consumerName === "") {
      setErrorMessage("Consumer name cannot be empty.");
      return false;
    }
    return true;
  };

  const handlePayBills = async () => {
    if (!validateInputs()) return;
    if (selected.openedaccount_status !== OpenedAccountStatusEnum.ACTIVE) {
      setErrorMessage("Account Chosen is not active.");
      return;
    }
    setLoading(true);
    try {
      const data: PostTransaction = {
        sender_id: selected.openedaccount_id,
        receiver_id: biller.id,
        transaction_type: TransactionTypeEnum.PAYMENT,
        amount: amount,
        transaction_fee: biller.fee,
        notes: `Paid By: ${consumerName} 8-digit Ref: ${refNumber} Description: ${description}`,
      };
      const res = await TransactionService.createTransaction(data);
      console.log("Transaction response:", res);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccessMessage("Payment successful!");
    } catch (error) {
      setErrorMessage("Payment failed. Please try again.");
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
      setRefNumber("");
      setAmount(0);
      setConsumerName("");
      setDescription("");
    }
  };

  return {
    selected,
    setSelected,
    amount,
    setAmount,
    consumerName,
    setConsumerName,
    refNumber,
    setRefNumber,
    description,
    setDescription,
    handlePayBills,
    loading,
  };
};
