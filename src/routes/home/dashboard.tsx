import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { OpenedAccountService } from "../../services/opened-account.service";
import { AccountCard } from "../../components/component/accountcard";
import { useEffect, useState } from "react";
import { OpenedAccount } from "../../types/entities/opened-account.entity";
import { showToast } from "../../utils/toast";
import { ActivityData } from "../../types/entities/transaction.entity";
import { useAuth } from "../../contexts/AuthContext";
import TransactionService from "../../services/transaction.service";
import ActivityDataTable from "../../components/activity/ActivityDataTable";
export const Route = createFileRoute("/home/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const [accounts, setAccounts] = useState<OpenedAccount[]>([]);
  const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const [openedAccountIds, setOpenedAccountIds] = useState<number[]>([]);
  const [limit] = useState(5);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { userId } = useAuth();

  useEffect(() => {
    const fetchedAccounts = async () => {
      try {
        const { data, openData } = await TransactionService.getAllTransaction(
          userId as string,
          limit
        );
        const accData = await OpenedAccountService.getAllOpenedAccountsOfUser(userId as string);
        setOpenedAccountIds(openData.map((account) => account.openedaccount_id));
        setAccounts(accData);
        setActivityData(data);
      } catch (error) {
        console.error("Error fetching opened accounts: ", error);
        showToast.error("Error fetching opened accounts");
      } finally {
        setLoading(false);
      }
    };
    fetchedAccounts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <AccountCard
            key={account.openedaccount_id}
            accountType={account.account_type}
            balance={account.balance}
            status={account.openedaccount_status}
            userId={account.account_number}
            accountId={account.openedaccount_id}
            bankCardId={account.bankcard_id}
          />
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Recent activity</h2>
          <button
            className="text-blue-600 text-sm hover:underline font-semibold"
            onClick={() => navigate({ to: `/home/activity` })}
          >
            View all
          </button>
        </div>
        {activityData.length > 0 ? (
          <ActivityDataTable data={activityData} openedAccountIds={openedAccountIds} />
        ) : (
          <p className="text-gray-500 italic">No recent activity to show.</p>
        )}
      </div>
    </div>
  );
}
