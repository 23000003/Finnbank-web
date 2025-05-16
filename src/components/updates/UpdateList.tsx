import React from "react";
import { UpdateItem } from "./UpdateItem";
import { Notification } from "../../types/entities/notification.entity";
import { ArrowDown } from "lucide-react";
import UpdateItemLoading from "../loading/UpdateItemLoading";

interface UpdatesListProps {
  hasMoreNotifs: boolean;
  loading: boolean;
  updates: Notification[];
  selectedId: string | undefined;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  viewNotification: (notifId: string) => Promise<void>;
}

export const UpdatesList: React.FC<UpdatesListProps> = ({
  updates,
  selectedId,
  viewNotification,
  setLimit,
  hasMoreNotifs,
  loading,
}) => {
  return (
    <div
      className={`w-3/3 p-4 mt-5 ${updates.length >= 6 ? "h-[72vh] overflow-y-auto border-y-2" : ""}`}
    >
      {loading && updates.length === 0 ? (
        <UpdateItemLoading />
      ) : updates.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800">No updates available.</h2>
          <p className="mt-2 text-sm text-gray-500">You have no new notifications.</p>
        </div>
      ) : (
        updates.map((notif) => (
          <UpdateItem
            key={notif.notif_id}
            notif={notif}
            isSelected={selectedId === notif.notif_id}
            onClick={() => viewNotification(notif.notif_id)}
          />
        ))
      )}
      {loading && updates.length !== 0 ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
        </div>
      ) : hasMoreNotifs && updates.length !== 0 ? (
        <div
          className="flex flex-row items-center gap-1 justify-center mt-4 cursor-pointer hover:text-blue-400 text-blue-500 duration-300"
          onClick={() => setLimit((prevLimit) => prevLimit + prevLimit)}
        >
          <p className="text-sm text-bold">View more</p>
          <ArrowDown className="h-6 w-5" />
        </div>
      ) : null}
    </div>
  );
};
