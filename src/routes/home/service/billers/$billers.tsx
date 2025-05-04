import { createFileRoute, useParams, useRouter } from "@tanstack/react-router";
import { Billers } from "../../../../data/billers";
import BillerForm from "../../../../components/service/billers/BillerForms";
import { useAuth } from "../../../../contexts/AuthContext";
import { useOpenedAccountData } from "../../../../hooks/useOpenedAccountData";
import BillerLoading from "../../../../components/loading/BillerLoading";
export const Route = createFileRoute("/home/service/billers/$billers")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  const { billers } = useParams({ from: "/home/service/billers/$billers" });

  const { userId } = useAuth();

  const { loading, setLoading, setErrorMessage, setSuccessMessage, openedAccounts } =
    useOpenedAccountData(userId as string);

  const billerData = Billers.find((b) => b.name.toLowerCase().replace(/\s+/g, "-") === billers);

  if (!billerData) {
    return router.history.back();
  }

  return loading && openedAccounts.length === 0 ? (
    <BillerLoading />
  ) : (
    <div className="bg-white p-14 rounded-lg shadow-md w-full max-w-2xl mx-auto flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-center">{billerData.name}</span>
          <span className="text-sm text-gray-400">fee: {billerData.fee.toFixed(2)}</span>
        </div>
        <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={billerData.icon}
            />
          </svg>
        </div>
      </div>
      <BillerForm
        accounts={openedAccounts}
        biller={billerData}
        loading={loading}
        setLoading={setLoading}
        setErrorMessage={setErrorMessage}
        setSuccessMessage={setSuccessMessage}
      />
    </div>
  );
}
