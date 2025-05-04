import React from "react";
import { UpdateItem } from "./UpdateItem";
import { Notification } from "../../types/entities/notification.entity";
import { ArrowDown } from "lucide-react";

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
    <div className="w-3/3 p-4">
      {updates.map((update) => (
        <UpdateItem
          key={update.notif_id}
          notif={update}
          isSelected={update.notif_id === selectedId}
          onClick={() => viewNotification(update.notif_id)}
        />
      ))}
      {loading ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
        </div>
      ) : hasMoreNotifs ? (
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
