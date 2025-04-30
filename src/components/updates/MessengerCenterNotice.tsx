import React from "react";

export const MessageCenterNotice: React.FC = () => {
  return (
    <div className="text-xs text-center text-blue-900 font-bold p-4 mt-4">
      All messages sent on or after January 1, 2023 are available in the Message Center for 3 years
      from the date originally sent. If you would like a copy of any previous messages not displayed
      in the Message Center, please contact us.
    </div>
  );
};
