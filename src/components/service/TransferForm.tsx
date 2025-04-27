import { getInputBorderClass } from "../../utils/input-error";
import { OpenedAccount } from "../../types/entities/opened-account.entity";

type TransferFormProps = {
  amount: number;
  loading: boolean;
  description: string;
  transferToAccNo: string;
  hasSubmitted: boolean;
  selectedAccount: OpenedAccount | null;
  handleValidateTransfer: () => Promise<void>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setHasSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setTransferToAccNo: React.Dispatch<React.SetStateAction<string>>;
};

const TransferForm: React.FC<TransferFormProps> = ({
  amount,
  loading,
  description,
  transferToAccNo,
  selectedAccount,
  handleValidateTransfer,
  setAmount,
  setDescription,
  setTransferToAccNo,
  hasSubmitted,
  setHasSubmitted,
}) => {
  return (
    <form className="flex flex-col gap-4">
      {/* Account Number */}
      <div className="flex flex-col gap-1">
        <label htmlFor="account" className="text-sm font-medium text-gray-600">
          Account number
        </label>
        <input
          type="text"
          id="account"
          placeholder="Enter account number"
          value={transferToAccNo}
          onChange={(e) => setTransferToAccNo(e.target.value.replace(/\D/g, ""))}
          onBlur={() => setTransferToAccNo(transferToAccNo.replace(/\s/g, ""))}
          maxLength={16}
          minLength={16}
          pattern="[0-9]*"
          inputMode="numeric"
          className={`
            w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 
            focus:border-transparent outline-none transition-all
            ${getInputBorderClass(transferToAccNo, hasSubmitted)}  
          `}
        />
      </div>
      {/* Amount */}
      <div className="flex flex-col gap-1">
        <label htmlFor="amount" className="text-sm font-medium text-gray-600">
          Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-500">₱</span>
          <input
            type="text"
            id="amount"
            value={amount === 0 ? "" : amount}
            onChange={(e) => setAmount(parseFloat(e.target.value.replace(/,/g, "")) || 0)}
            placeholder="0.00"
            className={`w-full border border-gray-300 rounded-lg p-3 pl-8 focus:ring-2 focus:ring-blue-500 
              focus:border-transparent outline-none transition-all ${getInputBorderClass(amount, hasSubmitted)}`}
          />
        </div>
        {selectedAccount ? (
          <label htmlFor="amount" className="text-xs font-medium text-gray-400">
            Balance: ₱ {selectedAccount.balance.toFixed(2)}
          </label>
        ) : null}
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-medium text-gray-600">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={() => setDescription(description.replace(/\s/g, ""))}
          maxLength={40}
          placeholder="What's this transfer for?"
          className={`
            w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            outline-none transition-all ${getInputBorderClass(description, hasSubmitted)}`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`mt-4 text-white font-medium py-3 px-6 rounded-lg 
          transition-colors duration-200 shadow-md hover:shadow-lg 
          ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
          }
        `}
        onClick={(e) => {
          e.preventDefault();
          setHasSubmitted(true);
          handleValidateTransfer();
        }}
      >
        {loading ? "Processing..." : "Validate Transfer"}
      </button>
    </form>
  );
};

export default TransferForm;
