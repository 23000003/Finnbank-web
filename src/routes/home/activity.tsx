import { createFileRoute } from "@tanstack/react-router";
import ActivityDataTable from "../../components/activity/ActivityDataTable";
import { useEffect, useState } from "react";
import useActionStatus from "../../hooks/useActionStatus";
import { ActivityData } from "../../types/entities/transaction.entity";
import { useAuth } from "../../contexts/AuthContext";
import TransactionService from "../../services/transaction.service";
import { ArrowDown } from "lucide-react";
import GenerateStatement from "../../components/activity/GenerateStatement";
import { motion } from "framer-motion";
import { useSocketConnection } from "../../hooks/useSocketConnection";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Route = createFileRoute("/home/activity")({
  component: RouteComponent,
});

function RouteComponent() {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const [openedAccountIds, setOpenedAccountIds] = useState<number[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [limit, setLimit] = useState(10);

  const { userId, username } = useAuth();
  useSocketConnection({
    url: "listen-to-transaction",
    type: "transaction",
    setActivityData: setActivityData,
    openedAccountIds: openedAccountIds,
    userId: userId as string,
    fullName: username as string,
    activityData: activityData,
  });
  const { setErrorMessage, setLoading, setSuccessMessage, loading } = useActionStatus(true);

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const { data, openData } = await TransactionService.getAllTransaction(
          userId as string,
          limit
        );
        setActivityData(data);
        setOpenedAccountIds(openData.map((account) => account.openedaccount_id));
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchActivityData();
  }, [setErrorMessage, setLoading, setSuccessMessage, userId, limit]);

  console.log("loading", loading);

  const handleDateChange = async (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);

    console.log("start 1", start);
    console.log("end 1", end);

    if (start && end) {
      try {
        setLoading(true);
        const openData = await TransactionService.getTransactionByTimeStamp(
          openedAccountIds,
          end,
          start
        );
        setActivityData(openData);
        setLoading(false);
      } catch (err) {
        setErrorMessage("Something went wrong...");
        console.error(err);
      }
    } else {
      const { data, openData } = await TransactionService.getAllTransaction(
        userId as string,
        limit
      );
      setActivityData(data);
      setOpenedAccountIds(openData.map((account) => account.openedaccount_id));
    }
  };

  return (
    <motion.div
      className="pt-5 mb-24"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mt-6 mb-4 flex flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={handleDateChange}
              isClearable
              placeholderText="Select date range"
              className="
                border focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer w-64
               border-blue-600 text-blue-600 placeholder:text-blue-600 rounded px-3 py-1 
              "
              dateFormat="MMM d, yyyy"
            />
          </div>
        </div>
        <GenerateStatement
          openedAccountIds={openedAccountIds}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <ActivityDataTable
        data={activityData}
        openedAccountIds={openedAccountIds}
        loading={loading && activityData.length === 0}
      />
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
      ) : loading ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
        </div>
      ) : null}
    </motion.div>
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
