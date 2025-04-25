import React from "react";

interface UpdateDetailsProps {
  sender: string;
  title: string;
  date: string;
  content: string;
}

export const UpdateDetails: React.FC<UpdateDetailsProps> = ({ sender, title, date, content }) => {
  return (
    <div className="flex flex-col w-full max-w-3xl h-full p-8 border border-gray-200 bg-white rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
            {sender}
          </div>
          <div className="text-2xl font-semibold text-blue-700 mt-1">{title}</div>
        </div>
        <div className="text-sm font-semibold text-blue-800 whitespace-nowrap">{date}</div>
      </div>

      {/* Scrollable Content */}
      <div className="prose prose-blue text-gray-800 leading-relaxed overflow-y-auto max-h-[500px] flex-1 pr-2">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
