import { createFileRoute, useSearch } from "@tanstack/react-router";
import TransferForm from "../../../components/service/TransferForm";
import AccountSelection from "../../../components/service/AccountSelection";
import { useAuth } from "../../../contexts/AuthContext";
import { useOpenedAccountData } from "../../../hooks/useOpenedAccountData";
import { useTransferMoney } from "../../../hooks/useTransferMoney";
import { motion } from "framer-motion";
import TransferModal from "../../../components/service/TransferModal";
import { useEffect, useState } from "react";
import { PostTransaction } from "../../../types/entities/transaction.entity";
import RecentlySent from "../../../components/service/RecentlySent";
import { OpenedAccountTypeEnum } from "../../../types/enums/opened-account.enum";
import { Limit } from "../../../types/entities/opened-account.entity";

export const Route = createFileRoute("/home/service/transfer")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      accountNum: (search.accountNum as string) || undefined,
      type: (search.type as string) || undefined,
    };
  },
});

function RouteComponent() {
  const { userId, accountType } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [transferData, setTransferData] = useState<PostTransaction | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { accountNum, type } = useSearch({ from: "/home/service/transfer" });

  const { loading, isAtLimit, openedAccounts, setErrorMessage, setSuccessMessage, setLoading } =
    useOpenedAccountData(userId as string, accountType as string);

  const {
    selectedAccount,
    setSelectedAccount,
    amount,
    setAmount,
    validateTransfer,
    description,
    setDescription,
    executeTransfer,
    transferToAccNo,
    setTransferToAccNo,
  } = useTransferMoney({
    userId: userId as string,
    loading,
    setErrorMessage,
    setSuccessMessage,
    setLoading,
    isAtLimit: isAtLimit as Limit,
  });

  useEffect(() => {
    if (accountNum && type && !loading) {
      if (type === "transfer") {
        const account = openedAccounts.find((account) => account.account_number === accountNum);
        if (!account) {
          setSelectedAccount(null);
          setErrorMessage("Account not found.");
          return;
        }
        if (account.account_type === OpenedAccountTypeEnum.SAVINGS) {
          setSelectedAccount(null);
          setErrorMessage("You cannot transfer using savings account.");
          return;
        }
        setSelectedAccount(account);
      } else if (type === "deposit") {
        setTransferToAccNo(accountNum);
      }
    }
  }, [
    accountNum,
    type,
    openedAccounts,
    setTransferToAccNo,
    setSelectedAccount,
    setErrorMessage,
    loading,
  ]);

  const handleValidateTransfer = async () => {
    const data = await validateTransfer();
    if (data) {
      setTransferData(data);
      setOpenModal(true);
    }
    setTimeout(() => {
      setHasSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <motion.div
        className="flex flex-col items-center md:flex-row md:items-start justify-between gap-8 p-6 max-w-6xl mx-auto"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Transfer Form */}
        <div className="flex flex-col gap-6 w-full max-w-md bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-2xl font-bold text-gray-800">Transfer To</h2>
          <TransferForm
            amount={amount}
            loading={loading}
            setAmount={setAmount}
            description={description}
            hasSubmitted={hasSubmitted}
            setDescription={setDescription}
            transferToAccNo={transferToAccNo}
            setHasSubmitted={setHasSubmitted}
            selectedAccount={selectedAccount}
            setTransferToAccNo={setTransferToAccNo}
            handleValidateTransfer={handleValidateTransfer}
          />
        </div>
        <div className="flex flex-col gap-6 w-full max-w-md px-6">
          <AccountSelection
            accounts={openedAccounts}
            loading={loading}
            selectedAccount={selectedAccount}
            setSelectedAccount={setSelectedAccount}
          />
          <RecentlySent
            transferToAccNo={transferToAccNo}
            setTransferToAccNo={setTransferToAccNo}
            userId={userId as string}
          />
        </div>
      </motion.div>
      <TransferModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        transferData={transferData}
        executeTransfer={executeTransfer}
      />
    </>
  );
}
