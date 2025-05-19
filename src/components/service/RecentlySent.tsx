import { useEffect, useState } from "react";
import TransactionService from "../../services/transaction.service";
import { OpenedAccountService } from "../../services/opened-account.service";
import { showToast } from "../../utils/toast";
import { RecentlySentLoading } from "../loading/TransferTabLoading";
type AccountSelectionProps = {
  userId: string;
  transferToAccNo: string;
  setTransferToAccNo: React.Dispatch<React.SetStateAction<string>>;
};

const RecentlySent: React.FC<AccountSelectionProps> = ({
  userId,
  transferToAccNo,
  setTransferToAccNo,
}) => {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState<string[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await TransactionService.getRecentlySent(userId);
        const uniqueAccounts = new Set<string>();

        for (let i = 0; i < data.data.length; i++) {
          const accountNos = await OpenedAccountService.getBothAccountNumber(
            data.data[i].receiver_id,
            data.data[i].sender_id
          );
          uniqueAccounts.add(accountNos[1].account_number);
          console.log("accountNos", accountNos);
        }
        setAccounts(Array.from(uniqueAccounts));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching accounts:", error);
        showToast.error("Something went wrong...");
      }
    };
    setTimeout(() => {
      fetchAccounts();
    }, 2000);
  }, [userId]);

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recently Sent #</h2>

      {loading ? (
        <RecentlySentLoading />
      ) : (
        <div className="flex flex-col gap-4">
          {accounts.length > 0 ? (
            accounts.map((account) => {
              return (
                <div
                  key={account}
                  className={`
                    rounded-lg p-4 hover:border-blue-400 cursor-pointer transition-all duration-200 border transform 
                    ${
                      transferToAccNo === account
                        ? "border-blue-400 bg-blue-50 scale-[1.02]"
                        : "border-gray-200 hover:bg-gray-50 scale-100 hover:scale-[1.01] active:scale-[0.99]"
                    }`}
                  onClick={() => setTransferToAccNo(account)}
                >
                  <p className="text-gray-500 text-sm">
                    Acc No. {account.replace(/(.{4})/g, "$1 ")}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="text-gray-500 text-sm">No recent transactions found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentlySent;
