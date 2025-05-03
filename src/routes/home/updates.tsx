import { createFileRoute } from "@tanstack/react-router";
import { UpdatesList } from "../../components/updates/UpdateList";
import { UpdateDetails } from "../../components/updates/UpdateDetails";
import { MessageCenterNotice } from "../../components/updates/MessengerCenterNotice";
import { useNotification } from "../../hooks/useNotification";
import { useAuth } from "../../contexts/AuthContext";
import { Notification } from "../../types/entities/notification.entity";

export const Route = createFileRoute("/home/updates")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = useAuth();

  const {
    loading,
    notifications,
    viewNotification,
    selectedNotification,
    setLimit,
    limit,
    notifCount,
    readNotification,
  } = useNotification(userId as string, "/home/updates");

  if (loading && notifications.length === 0) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const hasMoreNotifs = (notifCount as number) > (limit as number);
  console.log("hasMoreNotifs", hasMoreNotifs);

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row text-[#2c2e33] gap-5 mx-auto max-w-screen-xl">
      <div className="flex flex-col w-[450px] px-0 pt-4 pb-0 overflow-y-hidden">
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">Updates</h1>
        </div>
        <UpdatesList
          hasMoreNotifs={hasMoreNotifs}
          loading={loading as boolean}
          setLimit={setLimit as React.Dispatch<React.SetStateAction<number>>}
          updates={notifications as Notification[]}
          selectedId={selectedNotification?.notif_id}
          viewNotification={viewNotification as (notifId: string) => Promise<void>}
        />
        <div className="mt-auto p-4 text-sm text-center text-gray-500">
          <MessageCenterNotice />
        </div>
      </div>
      <div className="w-2/3 mt-16">
        {selectedNotification ? (
          <UpdateDetails
            notif={selectedNotification as Notification}
            readNotification={readNotification as (notifId: string) => Promise<void>}
            loading={loading as boolean}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="mb-5 p-4 rounded-full bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">No update selected</h2>

            <p className="text-gray-500 dark:text-gray-400 max-w-md mb-6">
              Select a notification from the list to view details
            </p>

            <div className="w-24 border-t border-gray-200 dark:border-gray-600 my-4"></div>

            <p className="text-sm text-gray-400 dark:text-gray-500">
              <span className="font-medium text-gray-500 dark:text-gray-400">Tip:</span> Click items
              to view details
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
