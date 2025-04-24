// This is the Setting Page
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/profile/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* Change Password Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Change Password</h2>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-600">
            New Password
          </label>
          <input
            type="password"
            id="settings_new_password"
            placeholder="Enter new password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="settings_confirm_new_password"
            placeholder="Enter same password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="text-center mt-4">
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            onClick={() => alert("Change Password functionality triggered!")}
          >
            Confirm Change Password
          </button>
        </div>
      </div>

      {/* Change PIN Number Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Change PIN Number</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="card" className="text-sm font-medium text-gray-600">
              Select Card
            </label>
            <select
              id="card"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            >
              <option value="card1">5106583635918</option>
              <option value="card2">5208249471403</option>
              <option value="card3">5259511534540</option>
            </select>
          </div>
          <div>
            <label htmlFor="pin" className="text-sm font-medium text-gray-600">
              Change PIN
            </label>
            <button
              id="pin"
              type="button"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              onClick={() => alert("Change PIN functionality triggered!")}
            >
              Change PIN
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="text-center">
        <button
          type="button"
          className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
          onClick={() => alert("Logout functionality triggered!")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
