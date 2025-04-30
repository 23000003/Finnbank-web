import { getInputBorderClass } from "../../../utils/input-error";

type AmountInputProps = {
  amount: number;
  balance: number;
  billerFee: number;
  hasSubmitted: boolean;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

type DescriptionInputProps = {
  description: string;
  hasSubmitted: boolean;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

export const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  setAmount,
  balance,
  billerFee,
  hasSubmitted,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="account" className="text-sm font-medium text-gray-600">
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
        <span className="absolute right-3 top-3 text-gray-400">
          To Pay: ₱{(amount + billerFee).toFixed(2)}
        </span>
      </div>
      <label htmlFor="amount" className="text-xs text-gray-600">
        Balance: ₱{balance.toFixed(2)}
      </label>
    </div>
  );
};

export const DescriptionInput: React.FC<DescriptionInputProps> = ({
  description,
  setDescription,
  hasSubmitted,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="description" className="text-sm font-medium text-gray-600">
        Description
      </label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onBlur={() => setDescription(description.replace(/\s/g, ""))}
        id="description"
        placeholder="What's this transfer for?"
        maxLength={40}
        className={`w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 
          focus:border-transparent outline-none transition-all ${getInputBorderClass(description, hasSubmitted)}`}
      />
    </div>
  );
};
