import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { OpenedAccountService } from "../../services/opened-account.service";
import { AccountCard } from "../../components/dashboard/accountcard";
import { useEffect, useState } from "react";
import { OpenedAccount } from "../../types/entities/opened-account.entity";
import { showToast } from "../../utils/toast";
import { ActivityData } from "../../types/entities/transaction.entity";
import { useAuth } from "../../contexts/AuthContext";
import TransactionService from "../../services/transaction.service";
import ActivityDataTable from "../../components/activity/ActivityDataTable";
import DasboardLoading from "../../components/loading/DasboardLoading";
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
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const { data, openData } = await TransactionService.getAllTransaction(
          userId as string,
          limit
        );
        const accData = await OpenedAccountService.getAllOpenedAccountsOfUser(userId as string);
        setOpenedAccountIds(openData.map((account) => account.openedaccount_id));
        setAccounts(accData);
        setActivityData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching opened accounts: ", error);
        showToast.error("Something went wrong...");
      }
    };
    fetchedAccounts();
  }, [limit, userId]);

  return (
    <div className="p-6 space-y-6 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {loading ? (
          <DasboardLoading />
        ) : (
          accounts.map((account) => (
            <AccountCard
              key={account.openedaccount_id}
              accountType={account.account_type}
              balance={account.balance}
              status={account.openedaccount_status}
              accountNumber={account.account_number}
              accountId={account.openedaccount_id}
              bankCardId={account.bankcard_id}
            />
          ))
        )}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Recent activity</h2>
          <button
            className="text-blue-600 text-sm hover:underline font-semibold cursor-pointer"
            onClick={() => navigate({ to: `/home/activity` })}
          >
            View all
          </button>
        </div>
        <ActivityDataTable
          data={activityData}
          openedAccountIds={openedAccountIds}
          loading={loading}
        />
      </div>
    </div>
  );
}
