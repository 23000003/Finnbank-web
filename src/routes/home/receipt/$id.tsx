import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ReceiptCard from "../../../components/receipt/ReceiptCard";
import { useRouter } from "@tanstack/react-router";
import { ActivityData } from "../../../types/entities/transaction.entity";
import { useEffect, useState } from "react";
import { OpenedAccountService } from "../../../services/opened-account.service";
import { OpenedAccountNumber } from "../../../types/entities/opened-account.entity";

export const Route = createFileRoute("/home/receipt/$id")({
  component: ReceiptComponent,
});

function ReceiptComponent() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [accountNumbers, setAccountNumbers] = useState<OpenedAccountNumber[]>([]);
  const { activityData } = useRouterState({
    select: (s) => s.location.state as { activityData: ActivityData },
  });

  useEffect(() => {
    const fetchAccountNumbers = async () => {
      try {
        const data = await OpenedAccountService.getBothAccountNumber(
          activityData.sender_id,
          activityData.receiver_id
        );
        setAccountNumbers(data);
      } catch (error) {
        console.error("Error fetching activity data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (activityData) {
      fetchAccountNumbers();
    }
  }, [activityData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  console.log(activityData);
  console.log(accountNumbers);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-md mx-auto p-6"
    >
      <button
        onClick={() => router.history.back()}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-800 cursor-pointer"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <ReceiptCard activityData={activityData} accountNums={accountNumbers} />
    </motion.div>
  );
}
