import React from "react";

interface UpdateItemProps {
  id: string;
  sender: string;
  title: string;
  date: string;
  isRead: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export const UpdateItem: React.FC<UpdateItemProps> = ({
  sender,
  title,
  date,
  isRead,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`p-3 rounded cursor-pointer mb-2 border ${isSelected ? "border-blue-800 shadow-xl" : "border-transparent hover:border-gray-300"}`}
      onClick={onClick}
    >
      <div className="text-sm font-bold text-blue-800">{sender}</div> {/* Sender */}
      <div className="flex items-center justify-between">
        <div className="font-medium">{title}</div>
        {!isRead && <div className="w-2 h-2 bg-red-500 rounded-full ml-2" />}
      </div>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
};
