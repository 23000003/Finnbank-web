import { OpenedAccount } from "../../types/entities/opened-account.entity";
import { hideAccountNumber } from "../../utils/hide-account-number";

type AccountSelectionProps = {
  accounts: OpenedAccount[];
  selectedAccount: OpenedAccount | null;
  setSelectedAccount: React.Dispatch<React.SetStateAction<OpenedAccount | null>>;
};

const AccountSelection: React.FC<AccountSelectionProps> = ({
  accounts,
  selectedAccount,
  setSelectedAccount,
}) => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Account</h2>

      <div className="flex flex-col gap-4">
        {accounts.map((account) => {
          if (account.account_type.toUpperCase() === "CHECKING") return null;
          console.log("HERE");
          console.log(selectedAccount?.account_type === account.account_type);
          return (
            <div
              key={account.account_type}
              className={`
                rounded-lg p-4 hover:border-blue-400 cursor-pointer transition-all duration-200 border transform 
                ${
                  selectedAccount?.account_type === account.account_type
                    ? "border-blue-400 bg-blue-50 scale-[1.02]"
                    : "border-gray-200 hover:bg-gray-50 scale-100 hover:scale-[1.01] active:scale-[0.99]"
                }`}
              onClick={() => setSelectedAccount(account)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{account.account_type} Account</h3>
                <span className="text-sm text-green-600">{account.openedaccount_status}</span>
              </div>
              <p className="text-gray-500 text-sm">{hideAccountNumber(account.account_number)}</p>
              <p className="font-bold mt-2">₱{account.balance.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccountSelection;
