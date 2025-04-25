import { createFileRoute } from "@tanstack/react-router";
import { OpenedAccountService } from "../../services/opened-account.service";

export const Route = createFileRoute("/home/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  // Test Api call to golang backend
  const handleGetAll = async () => {
    try {
      const data = await OpenedAccountService.getAllOpenedAccountsOfUser(2);
      console.log("Opened accounts:", data);
    } catch (error) {
      console.error("Error fetching opened accounts:", error);
    }
  };

  const handleCreate = async () => {
    try {
      const data = await OpenedAccountService.createOpenedAccount(1, 1000, "savings");
      console.log("Created account:", data);
    } catch (error) {
      console.error("Error creating opened account:", error);
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* <h1 className="text-2xl font-bold underline">Dashboard</h1>

      <input
        type="text"
        placeholder="finnbank ads"
        className="w-full p-3 border border-gray-300 rounded"
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Checking Account */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center text-blue-700 font-semibold">
            <span>Checking Account</span>
            <span className="text-sm text-gray-500">this is debit</span>
            <button className="text-sm text-blue-600 underline">View card</button>
          </div>
          <p className="text-2xl font-bold my-4">696969.00</p>
          <p className="text-gray-600">Balance</p>
          <div className="mt-4 text-sm text-blue-600 space-x-4">
            <span>Deposit</span>
            <span>|</span>
            <span>Transfer</span>
            <span>|</span>
            <span>Pay Bills</span>
          </div>
        </div>

        {/* Credit Account */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center text-blue-700 font-semibold">
            <span>Credit Account</span>
            <button className="text-sm text-blue-600 underline">View card</button>
          </div>
          <p className="text-2xl font-bold my-4">696969.00</p>
          <p className="text-gray-600">Balance</p>
          <div className="mt-4 text-sm text-blue-600 space-x-4">
            <span>Loan</span>
            <span>|</span>
            <span>Pay Bills</span>
          </div>
        </div>

        {/* Savings */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center text-blue-700 font-semibold">
            <span>Savings</span>
          </div>
          <p className="text-2xl font-bold my-4">696969.00</p>
          <p className="text-gray-600">Balance</p>
          <div className="mt-4 text-sm text-blue-600 space-x-4">
            <span>Deposit</span>
            <span>|</span>
            <span>Transfer</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Recent activity</h2>
          <button className="text-blue-600 text-sm">View all</button>
        </div>
        <p className="text-gray-500 italic">No recent activity to show.</p>
      </div>

      {/* Optional Debug Buttons */}
      <div className="pt-4">
        <button
          onClick={handleGetAll}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2"
        >
          Get All
        </button>
        <button
          onClick={handleCreate}
          className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Create
        </button>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <button
  //       onClick={handleGetAll}
  //       className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
  //     >
  //       Get All
  //     </button>
  //     <button
  //       onClick={handleCreate}
  //       className="bg-green-500 text-white px-4 py-2 rounded ml-2 cursor-pointer"
  //     >
  //       Create
  //     </button>
  //   </div>
  // );
}
