import { useState } from "react";

interface UpdateInfoFormProps {
  type: "Emails" | "Phone Numbers" | "Addresses";
  value: string;
  onUpdate: (type: "Emails" | "Phone Numbers" | "Addresses", updatedValue: string) => void;
  onClose: () => void;
}

export const UpdateInfoForm: React.FC<UpdateInfoFormProps> = ({
  type,
  value,
  onUpdate,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(type, inputValue);
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
      <h2 className="text-lg font-semibold mb-4">Update {type}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="updateInput" className="block text-sm font-medium text-gray-700">
            {type}
          </label>
          <input
            id="updateInput"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
