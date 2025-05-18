import { OpenedAccount } from "../../types/entities/opened-account.entity";
import {
  OpenedAccountStatusEnum,
  OpenedAccountTypeEnum,
} from "../../types/enums/opened-account.enum";
import { hideAccountNumber } from "../../utils/hide-account-number";
import { AccountSelectionLoading } from "../loading/TransferTabLoading";

type AccountSelectionProps = {
  loading: boolean;
  accounts: OpenedAccount[];
  selectedAccount: OpenedAccount | null;
  setSelectedAccount: React.Dispatch<React.SetStateAction<OpenedAccount | null>>;
};

const AccountSelection: React.FC<AccountSelectionProps> = ({
  accounts,
  selectedAccount,
  setSelectedAccount,
  loading,
}) => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Account</h2>

      <div className="flex flex-col gap-4">
        {loading && accounts.length === 0 ? (
          <AccountSelectionLoading />
        ) : (
          accounts.map((account) => {
            if (account.account_type === OpenedAccountTypeEnum.SAVINGS) return null;

            const isSelected = selectedAccount?.account_type === account.account_type;
            const isClosed = account.openedaccount_status === OpenedAccountStatusEnum.CLOSED;

            return (
              <div
                key={account.account_type}
                className={`
                  rounded-lg p-4 transition-all duration-200 border transform
                  ${
                    isClosed
                      ? "border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed"
                      : isSelected
                        ? "border-blue-400 bg-blue-50 scale-[1.02] cursor-pointer"
                        : "border-gray-200 hover:border-blue-400 hover:bg-gray-50 scale-100 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  }`}
                onClick={() => {
                  if (!isClosed) {
                    setSelectedAccount(account);
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{account.account_type} Account</h3>
                  <span className={`text-sm ${isClosed ? "text-red-500" : "text-green-600"}`}>
                    {account.openedaccount_status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{hideAccountNumber(account.account_number)}</p>
                <p className="font-bold mt-2">₱{account.balance.toFixed(2)}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AccountSelection;
