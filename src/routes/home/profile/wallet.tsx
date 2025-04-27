import { createFileRoute } from "@tanstack/react-router";
import WalletCards from "../../../components/profile/WalletCards";
import WalletCardInfo from "../../../components/profile/WalletCardInfo";
import { useEffect, useState } from "react";
import useActionStatus from "../../../hooks/useActionStatus";
import { Bankcard } from "../../../types/entities/bankcard.entity";
import { BankcardService } from "../../../services/bankcard.service";
import { useAuth } from "../../../contexts/AuthContext";
import { motion } from "framer-motion";

export const Route = createFileRoute("/home/profile/wallet")({
  component: RouteComponent,
});

function RouteComponent() {
  const { loading, setLoading, setErrorMessage, setSuccessMessage } = useActionStatus();
  const { userId } = useAuth();
  const [bankcards, setBankcards] = useState<Bankcard[]>([]);
  const [selected, setSelected] = useState<Bankcard | null>(null);
  useEffect(() => {
    const fetchBankcards = async () => {
      setLoading(true);
      try {
        const data = await BankcardService.getAllBankcards(userId as string);
        setBankcards(data);
        setSuccessMessage("Bankcards fetched successfully");
        setSelected(data[0]);
      } catch (error) {
        console.error("Error fetching bankcards:", error);
        setErrorMessage("Something went wrong...");
      } finally {
        setLoading(false);
      }
    };
    fetchBankcards();
  }, [setBankcards, setLoading, setErrorMessage, setSuccessMessage, userId]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row justify-center gap-8 items-center lg:items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="w-full max-w-md" layout>
            <WalletCards
              bankcards={bankcards}
              selected={selected as Bankcard}
              setSelected={setSelected}
            />
          </motion.div>
          <motion.div
            className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sticky top-10"
            layout
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <WalletCardInfo viewBankcard={selected as Bankcard} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
