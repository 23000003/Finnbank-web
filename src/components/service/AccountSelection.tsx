export default function AccountSelection() {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Account</h2>

      <div className="flex flex-col gap-4">
        {/* Sample account cards - you would map through real accounts here */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 cursor-pointer transition-colors">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Checking Account</h3>
            <span className="text-sm text-green-600">Active</span>
          </div>
          <p className="text-gray-500 text-sm">•••• •••• •••• 1234</p>
          <p className="font-bold mt-2">₱5,432.10</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 cursor-pointer transition-colors">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Savings Account</h3>
            <span className="text-sm text-green-600">Active</span>
          </div>
          <p className="text-gray-500 text-sm">•••• •••• •••• 5678</p>
          <p className="font-bold mt-2">₱12,345.67</p>
        </div>
      </div>
    </div>
  );
}
