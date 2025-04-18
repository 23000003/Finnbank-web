import { createFileRoute } from "@tanstack/react-router";
import BillerCards from "../../../components/service/BillerCards";

export const Route = createFileRoute("/home/service/pay-bills")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row justify-between gap-8 p-6 max-w-6xl mx-auto">
        {/* Biller Selection */}
        <div className="flex flex-col gap-6 w-full max-w-md bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800">Choose Billers</h2>
          <BillerCards />
        </div>
      </div>
    </div>
  );
}
