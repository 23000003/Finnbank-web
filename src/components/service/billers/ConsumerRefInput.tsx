import { getInputBorderClass } from "../../../utils/input-error";

type ConsumerRefInputProps = {
  consumer: string;
  setConsumer: React.Dispatch<React.SetStateAction<string>>;
  refNumber: string;
  setRefNumber: React.Dispatch<React.SetStateAction<string>>;
  hasSubmitted: boolean;
};

const ConsumerRefInput: React.FC<ConsumerRefInputProps> = ({
  consumer,
  setConsumer,
  refNumber,
  setRefNumber,
  hasSubmitted,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Consumer Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="consumer" className="text-sm font-medium text-gray-600">
          Consumer name
        </label>
        <input
          type="text"
          id="consumer"
          value={consumer}
          onChange={(e) => setConsumer(e.target.value)}
          onBlur={() => setConsumer(consumer.replace(/\s/g, ""))}
          placeholder="e.g. Maratas, Kenny"
          maxLength={30}
          className={`w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 
            focus:border-transparent outline-none transition-all ${getInputBorderClass(consumer, hasSubmitted)}`}
        />
      </div>

      {/* Reference Number */}
      <div className="flex flex-col gap-1">
        <label htmlFor="refNumber" className="text-sm font-medium text-gray-600">
          8-Digit reference number
        </label>
        <input
          type="text"
          id="refNumber"
          value={refNumber}
          onChange={(e) => setRefNumber(e.target.value)}
          onBlur={() => setRefNumber(refNumber.replace(/\s/g, ""))}
          placeholder="e.g. 12345678"
          maxLength={8}
          pattern="[0-9]*"
          title="Reference number must be 8 digits long."
          className={`w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 
          focus:border-transparent outline-none transition-all ${getInputBorderClass(refNumber, hasSubmitted)}`}
        />
      </div>
    </div>
  );
};

export default ConsumerRefInput;
