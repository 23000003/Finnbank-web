type InfoProps = {
  type: "Emails" | "Phone Numbers" | "Addresses";
  value: string;
  onEdit: (type: "Emails" | "Phone Numbers" | "Addresses", value: string) => void;
};

const InfoCard: React.FC<InfoProps> = ({ type, value, onEdit }) => {
  const renderIcon = () => {
    switch (type) {
      case "Emails":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "Phone Numbers":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        );
      case "Addresses":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">{type}</h1>
      </div>
      <div className="flex flex-row bg-white justify-between items-center p-4 rounded-lg mt-4">
        <div className="flex flex-row gap-4 items-start w-full px-2">
          {renderIcon()}
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <span className="bg-blue-500 text-white p-1 px-3 mr-auto rounded-xl font-semibold text-[10px]">
                Primary
              </span>
              <span className={`text-sm ${type === "Addresses" ? "w-2/3" : ""}`}>{value}</span>
            </div>
            <button
              className="text-xs text-blue-600 font-semibold hover:text-blue-400 cursor-pointer focus:outline-none"
              onClick={() => onEdit(type, value)}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
