import { createFileRoute } from "@tanstack/react-router";
import TransferForm from "../../../components/service/TransferForm";
import AccountSelection from "../../../components/service/AccountSelection";
import { useAuth } from "../../../contexts/AuthContext";
import { useOpenedAccountData } from "../../../hooks/useOpenedAccountData";
import { useTransferMoney } from "../../../hooks/useTransferMoney";
import { motion } from "framer-motion";
import TransferModal from "../../../components/service/TransferModal";
import { useState } from "react";
import { PostTransaction } from "../../../types/entities/transaction.entity";

export const Route = createFileRoute("/home/service/transfer")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [transferData, setTransferData] = useState<PostTransaction | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { loading, openedAccounts, setErrorMessage, setSuccessMessage, setLoading } =
    useOpenedAccountData(userId as string);

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
  });

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

  if (loading && openedAccounts.length === 0) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <>
      <motion.div
        className="flex flex-col items-center md:flex-row justify-between gap-8 p-6 max-w-6xl mx-auto"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Transfer Form */}
        <div className="flex flex-col gap-6 w-full max-w-md bg-white rounded-xl shadow-md p-6">
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
        <AccountSelection
          accounts={openedAccounts}
          selectedAccount={selectedAccount}
          setSelectedAccount={setSelectedAccount}
        />
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
