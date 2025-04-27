import React from "react";
import { UpdateItem } from "./UpdateItem";

export interface Update {
  id: string;
  title: string;
  date: string;
  isRead: boolean;
}

interface UpdatesListProps {
  updates: Update[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export const UpdatesList: React.FC<UpdatesListProps> = ({ updates, selectedId, onSelect }) => {
  return (
    <div className="w-3/3 p-4">
      {updates.map((update) => (
        <UpdateItem
          sender="Kentward Maratas"
          key={update.id}
          {...update}
          isSelected={update.id === selectedId}
          onClick={() => onSelect(update.id)}
        />
      ))}
    </div>
  );
};
