import { createFileRoute } from "@tanstack/react-router";
import TransferForm from "../../../components/service/TransferForm";
import AccountSelection from "../../../components/service/AccountSelection";

export const Route = createFileRoute("/home/service/transfer")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between gap-8 p-6 max-w-6xl mx-auto">
      {/* Transfer Form */}
      <div className="flex flex-col gap-6 w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800">Transfer To</h2>
        <TransferForm />
      </div>
      <AccountSelection />
    </div>
  );
}
