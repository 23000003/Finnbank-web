import { useNavigate } from "@tanstack/react-router";

interface AccountCardProps {
  accountType: string;
  balance: number;
  status: string;
  userId: string;
  accountId: number;
  bankCardId: number | null;
}

export function AccountCard({ accountType, balance }: AccountCardProps) {
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
        navigate({ to: `/home/service/transfer` });
        break;
      case "transfer":
        navigate({ to: `/home/service/transfer` });
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
      className="bg-white p-6 rounded-lg shadow-md transition-transform 
          transform hover:scale-102 hover:shadow-lg hover:bg-gray-100 duration-300"
    >
      <div className="flex justify-between items-center text-blue-700 font-semibold">
        <span>{cardName}</span>
        <button
          className="text-sm text-blue-600 hover:underline cursor-pointer"
          onClick={() => navigate({ to: `/home/profile/wallet` })}
        >
          View card
        </button>
      </div>
      <p className="text-2xl font-bold my-4">₱{balance.toFixed(2)}</p>
      <p className="text-gray-600">Balance</p>
      <div className="mt-4 text-sm text-blue-600 space-x-4">
        <button
          className="hover:underline focus:outline-none cursor-pointer"
          onClick={() => handleNavigation("deposit")}
        >
          Deposit
        </button>
        <span>|</span>
        <button
          className="hover:underline focus:outline-none cursor-pointer"
          onClick={() => handleNavigation("transfer")}
        >
          Transfer
        </button>
        <span>|</span>
        <button
          className="hover:underline focus:outline-none cursor-pointer"
          onClick={() => handleNavigation("paybills")}
        >
          Pay Bills
        </button>
      </div>
    </div>
  );
}
