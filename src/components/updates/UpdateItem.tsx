import React from "react";
import { Notification } from "../../types/entities/notification.entity";
import { motion } from "framer-motion";

interface UpdateItemProps {
  notif: Notification;
  isSelected: boolean;
  onClick: () => Promise<void>;
}

export const UpdateItem: React.FC<UpdateItemProps> = ({ notif, isSelected, onClick }) => {
  return (
    <motion.div
      className={`p-4 rounded-lg cursor-pointer mb-3 border-l-4 ${
        isSelected
          ? "border-blue-600 bg-blue-50 shadow-md"
          : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
      }`}
      onClick={onClick}
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      exit={{ opacity: 0 }}
      layout
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center mb-1">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {notif.notif_from_name}
              {!notif.is_read && (
                <span className="ml-2 inline-block w-2 h-2 bg-red-500 rounded-full" />
              )}
            </p>
          </div>

          <p className="text-sm font-medium text-gray-700 mb-1">{notif.notif_type}</p>

          <p className="text-xs text-gray-500">
            {new Date(notif.date_notified).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        {isSelected && (
          <div className="ml-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );
};
