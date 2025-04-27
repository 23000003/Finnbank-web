import SelectAccount from "./SelectAccount";
import { OpenedAccount } from "../../../types/entities/opened-account.entity";
import { usePayBills } from "../../../hooks/usePayBills";
import { useState } from "react";
import ConsumerRefInput from "./ConsumerRefInput";
import { AmountInput, DescriptionInput } from "./AmountDescInput";
import { IActionStatus } from "../../../types/interfaces/action-status.interface";
import { OpenedAccountTypeEnum } from "../../../types/enums/opened-account.enum";
import { Biller } from "../../../types/entities/billers.entity";

interface BillerFormProps extends IActionStatus {
  accounts: OpenedAccount[];
  biller: Biller;
}

const BillerForm: React.FC<BillerFormProps> = ({
  accounts,
  biller,
  loading,
  setLoading,
  setErrorMessage,
  setSuccessMessage,
}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const filterAccounts = accounts.filter(
    (account) => account.account_type !== OpenedAccountTypeEnum.SAVINGS
  );

  const {
    selected,
    setSelected,
    amount,
    setAmount,
    consumerName,
    setConsumerName,
    refNumber,
    setRefNumber,
    description,
    setDescription,
    handlePayBills,
  } = usePayBills({
    loading,
    setLoading,
    setErrorMessage,
    setSuccessMessage,
    account: filterAccounts[0],
    biller,
  });

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="account" className="text-sm font-medium text-gray-600">
          Choose an account
        </label>
        {/* Select account */}
        <SelectAccount selected={selected} setSelected={setSelected} accounts={accounts} />
      </div>
      <ConsumerRefInput
        consumer={consumerName}
        setConsumer={setConsumerName}
        refNumber={refNumber}
        setRefNumber={setRefNumber}
        hasSubmitted={hasSubmitted}
      />
      <AmountInput
        amount={amount}
        setAmount={setAmount}
        balance={selected.balance}
        billerFee={biller.fee}
        hasSubmitted={hasSubmitted}
      />
      <DescriptionInput
        description={description}
        setDescription={setDescription}
        hasSubmitted={hasSubmitted}
      />
      {/* Action button */}
      <button
        type="submit"
        disabled={loading}
        className={`mt-4 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg ${
          loading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setHasSubmitted(true);
          setTimeout(() => {
            setHasSubmitted(false);
          }, 2000);
          handlePayBills();
        }}
      >
        {loading ? "Processing..." : "Pay Bills"}
      </button>
    </form>
  );
};

export default BillerForm;
