type InfoProps = {
  type: "Emails" | "Phone Numbers" | "Addresses";
  value: string;
};

export default function InfoCard(props: InfoProps) {
  const { type, value } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">{type}</h1>
        <span className="text-sm text-blue-600 font-semibold hover:text-blue-400 cursor-pointer">
          + Add
        </span>
      </div>
      <div className="flex flex-row bg-white justify-between items-center p-4 rounded-lg mt-4">
        <div className="flex flex-row gap-4 items-start w-full px-2">
          <span>X</span>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <span className="bg-gray-200 p-1 px-3 mr-auto rounded-xl font-semibold text-[10px]">
                Primary
              </span>
              <span className={`text-sm ${type === "Addresses" ? "w-3/4" : ""}`}>{value}</span>
            </div>
            <span className="text-xs text-blue-600 font-semibold hover:text-blue-400 cursor-pointer">
              Change
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
