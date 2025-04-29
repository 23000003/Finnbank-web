import { createFileRoute } from "@tanstack/react-router";
import ActivityDataTable from "../../components/activity/ActivityDataTable";
import { useEffect, useState } from "react";
import useActionStatus from "../../hooks/useActionStatus";
import { ActivityData } from "../../types/entities/transaction.entity";
import { useAuth } from "../../contexts/AuthContext";
import TransactionService from "../../services/transaction.service";
import { ArrowDown } from "lucide-react";
import GenerateStatement from "../../components/activity/GenerateStatement";

export const Route = createFileRoute("/home/activity")({
  component: RouteComponent,
});

function RouteComponent() {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const [openedAccountIds, setOpenedAccountIds] = useState<number[]>([]);
  const [limit, setLimit] = useState(10);
  const [filterByTime, setFilterByTime] = useState("all");

  const { setErrorMessage, setLoading, setSuccessMessage, loading } = useActionStatus();
  const { userId } = useAuth();

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const { data, openData } = await TransactionService.getAllTransaction(
          userId as string,
          limit
        );
        setActivityData(data);
        setOpenedAccountIds(openData.map((account) => account.openedaccount_id));
        setSuccessMessage("Activity data fetched successfully");
      } catch (err) {
        setErrorMessage("Error fetching activity data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchActivityData();
  }, [setErrorMessage, setLoading, setSuccessMessage, userId, limit]);

  if (loading && activityData.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="pt-5 mb-24">
      <div className="mt-6 mb-4 flex flex-row justify-between items-center">
        <div>
          <span className="text-gray-600 mr-2">Filter by:</span>
          <select
            className="border rounded px-3 py-1 cursor-pointer"
            value={filterByTime}
            onChange={(e) => setFilterByTime(e.target.value)}
          >
            <option value="all">All</option>
            <option value="7days">7 days</option>
            <option value="1m">1 month</option>
            <option value="6m">6 months</option>
            <option value="1yr">1 year</option>
          </select>
        </div>
        <GenerateStatement />
      </div>

      <ActivityDataTable data={activityData} openedAccountIds={openedAccountIds} />
      {activityData.length === limit ? (
        <div
          className="flex items-center justify-center py-4 gap-2 cursor-pointer hover:text-blue-400 text-blue-500 duration-300"
          onClick={() => {
            setLimit((prevLimit) => prevLimit + 10);
          }}
        >
          <span className="text-sm">View more</span>
          <ArrowDown className="h-6 w-5" />
        </div>
      ) : null}
    </div>
  );
}

// Takes too long to load lol

// import { createFileRoute } from "@tanstack/react-router";
// import ActivityDataTable from "../../components/activity/ActivityDataTable";
// import StatementService from "../../services/statement.service";
// import { ActivityData } from "../../types/activity.types";

// export const Route = createFileRoute("/home/activity")({
//   loader: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return {
//       data: await StatementService.getAllStatements(1),
//     };
//   },
//   component: RouteComponent,
//   pendingComponent: () => (
//     <div className="flex justify-center items-center h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
//     </div>
//   ),
// });

// function RouteComponent() {

//   const { data } : { data : ActivityData[] } = Route.useLoaderData();

//   return (
//     <div className="pt-5">
//       <div className="mt-6 mb-4">
//         <span className="text-gray-600 mr-2">Filter by:</span>
//         <select className="border rounded px-3 py-1">
//           <option value="all">All</option>
//           <option value="7days">7 days</option>
//           <option value="1m">1 month</option>
//           <option value="6m">6 months</option>
//           <option value="1yr">1 year</option>
//         </select>
//       </div>

//       <ActivityDataTable mockData={data} />
//     </div>
//   );
// }
