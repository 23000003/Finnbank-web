import React from "react";
import { Notification } from "../../types/entities/notification.entity";

type UpdateDetailsProps = {
  notif: Notification;
  loading: boolean;
  readNotification: (notifId: string) => Promise<void>;
};

export const UpdateDetails: React.FC<UpdateDetailsProps> = ({
  notif: { notif_id, notif_type, notif_from_name, content, date_notified, is_read },
  readNotification,
  loading,
}) => {
  const validateContent = (content: string) => {
    if (content.includes("Transaction failed with the following reasons:")) {
      return `
          Transaction failed with the following reasons:
          <div style="margin-left: 20px; margin-top: 10px;">
            <p>• Server is busy.</p>
            <p>• Account you are sending to is disabled.</p>
          </div>
        `;
    } else {
      return content;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
              {notif_from_name}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">{notif_type}</h1>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            {new Date(date_notified).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 flex-1 overflow-y-auto pr-2">
        <div
          className="[&_a]:text-blue-600 [&_a]:underline [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-5 [&_ol]:pl-5"
          dangerouslySetInnerHTML={{ __html: validateContent(content) }}
        />
      </div>
      {/* Footer */}
      {!is_read ? (
        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
          <button
            className={`px-4 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => readNotification(notif_id)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Mark as Read"}
          </button>
        </div>
      ) : null}
    </div>
  );
};
