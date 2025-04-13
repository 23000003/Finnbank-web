import { createFileRoute } from "@tanstack/react-router";
import ActivityDataTable from "../../components/activity/ActivityDataTable";
import { useEffect, useState } from "react";
import StatementService from "../../services/statement.service";
import useActionStatus from "../../hooks/useActionStatus";
import { ActivityData } from "../../types/activity.types";

export const Route = createFileRoute("/home/activity")({
  component: RouteComponent,
});

function RouteComponent() {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);

  const { setErrorMessage, setLoading, setSuccessMessage, loading } = useActionStatus();

  useEffect(() => {
    setLoading(true);
    const fetchActivityData = async () => {
      try {
        const data = await StatementService.getAllStatements(1);
        setActivityData(data);
        setLoading(false);
        setSuccessMessage("Activity data fetched successfully");
      } catch (err) {
        setErrorMessage("Error fetching activity data");
        console.error(err);
      }
    };
    setTimeout(() => {
      fetchActivityData();
    }, 1000);
  }, [setErrorMessage, setLoading, setSuccessMessage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="pt-5">
      <div className="mt-6 mb-4">
        <span className="text-gray-600 mr-2">Filter by:</span>
        <select className="border rounded px-3 py-1">
          <option value="all">All</option>
          <option value="7days">7 days</option>
          <option value="1m">1 month</option>
          <option value="6m">6 months</option>
          <option value="1yr">1 year</option>
        </select>
      </div>

      <ActivityDataTable mockData={activityData} />
    </div>
  );
}
