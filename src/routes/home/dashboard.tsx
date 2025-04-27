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

  // TODO: Remove this
  const handleCreate = async () => {
    try {
      const data = await OpenedAccountService.createOpenedAccount("1");
      console.log("Created account:", data);
    } catch (error) {
      console.error("Error creating opened account:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGetAll}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Get All
      </button>
      <button
        onClick={handleCreate}
        className="bg-green-500 text-white px-4 py-2 rounded ml-2 cursor-pointer"
      >
        Create
      </button>
    </div>
  );
}
