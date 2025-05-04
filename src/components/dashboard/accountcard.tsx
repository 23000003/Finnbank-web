import { useNavigate } from "@tanstack/react-router";
import { OpenedAccountStatusEnum } from "../../types/enums/opened-account.enum";
import { useState } from "react";
import CloseOrReactivateAccount from "./CloseOrReactivateAccount";
import useActionStatus from "../../hooks/useActionStatus";

interface AccountCardProps {
  accountType: string;
  balance: number;
  status: OpenedAccountStatusEnum;
  accountNumber: string;
  accountId: number;
  bankCardId: number | null;
}

export function AccountCard({
  accountType,
  balance,
  accountId,
  status,
  accountNumber,
}: AccountCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [accStatus, setAccountStatus] = useState(status);
  const { loading, setLoading, setErrorMessage, setSuccessMessage } = useActionStatus(false);

  const navigate = useNavigate();
  let cardName;
  switch (accountType) {
    case "Checking":
      cardName = "Checking Account";
      break;
    case "Savings":
      cardName = "Savings Account";
      break;
    case "Credit":
      cardName = "Credit Account";
      break;
    default:
      cardName = "No account type fetched";
      break;
  }
  function handleNavigation(action: string) {
    switch (action) {
      case "deposit":
        navigate({
          to: `/home/service/transfer`,
          search: {
            accountNum: accountNumber,
            type: "deposit",
          },
        });
        break;
      case "transfer":
        navigate({
          to: `/home/service/transfer`,
          search: {
            accountNum: accountNumber,
            type: "transfer",
          },
        });
        break;
      case "paybills":
        navigate({ to: `/home/service/pay-bills` });
        break;
      default:
        console.error("action cannot be identified");
        break;
    }
  }
  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
        accStatus === OpenedAccountStatusEnum.CLOSED
          ? "bg-gray-100 border border-gray-300"
          : "bg-white transform hover:scale-[1.02] hover:shadow-lg hover:bg-gray-50"
      }`}
    >
      <div className="flex justify-between items-center">
        <span
          className={`font-semibold ${
            accStatus === OpenedAccountStatusEnum.CLOSED ? "text-gray-500" : "text-blue-700"
          }`}
        >
          {cardName}
          {accStatus === OpenedAccountStatusEnum.CLOSED && (
            <span className="ml-2 px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-full">
              {accStatus}
            </span>
          )}
        </span>
        {accStatus !== OpenedAccountStatusEnum.CLOSED && (
          <button
            className="text-sm text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate({ to: `/home/profile/wallet` })}
          >
            View card
          </button>
        )}
      </div>

      <p
        className={`text-2xl font-bold my-4 ${
          accStatus === OpenedAccountStatusEnum.CLOSED ? "text-gray-400" : ""
        }`}
      >
        ₱{balance.toFixed(2)}
      </p>

      <p
        className={`${
          accStatus === OpenedAccountStatusEnum.CLOSED ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Balance
      </p>

      {accStatus === OpenedAccountStatusEnum.CLOSED ? (
        <div className="text-center">
          <button
            className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={() => setIsOpen(true)}
          >
            Reactivate Account
          </button>
        </div>
      ) : (
        <div className="mt-4 text-sm text-blue-600 flex flex-row justify-between items-center">
          <div className="space-x-4">
            <button
              className="hover:underline focus:outline-none cursor-pointer"
              onClick={() => handleNavigation("deposit")}
            >
              Deposit
            </button>
            <span className="text-gray-300">|</span>
            <button
              className="hover:underline focus:outline-none cursor-pointer"
              onClick={() => handleNavigation("transfer")}
            >
              Transfer
            </button>
            <span className="text-gray-300">|</span>
            <button
              className="hover:underline focus:outline-none cursor-pointer"
              onClick={() => handleNavigation("paybills")}
            >
              Pay Bills
            </button>
          </div>
          <div>
            <button
              className="hover:underline focus:outline-none cursor-pointer text-red-500"
              onClick={() => setIsOpen(true)}
            >
              Close Account
            </button>
          </div>
        </div>
      )}
      <CloseOrReactivateAccount
        isOpen={isOpen}
        loading={loading}
        accountId={accountId}
        setLoading={setLoading}
        onClose={() => setIsOpen(false)}
        setErrorMessage={setErrorMessage}
        setAccountStatus={setAccountStatus}
        setSuccessMessage={setSuccessMessage}
        status={accStatus as OpenedAccountStatusEnum}
      />
    </div>
  );
}
