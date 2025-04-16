export default function TransferForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="account" className="text-sm font-medium text-gray-600">
          Account number
        </label>
        <input
          type="text"
          id="account"
          placeholder="Enter account number"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="amount" className="text-sm font-medium text-gray-600">
          Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-500">₱</span>
          <input
            type="text"
            id="amount"
            placeholder="0.00"
            className="w-full border border-gray-300 rounded-lg p-3 pl-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-medium text-gray-600">
          Description
        </label>
        <input
          type="text"
          id="description"
          placeholder="What's this transfer for?"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Transfer Now
      </button>
    </form>
  );
}
