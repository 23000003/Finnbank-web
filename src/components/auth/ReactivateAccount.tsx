import React, { useState } from "react";
import { AccountService } from "../../services/account.service";
import { showToast } from "../../utils/toast";
import { useAuth } from "../../contexts/AuthContext";

const ReactivationForm: React.FC = () => {
  const { validateEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmation !== "I CONFIRM") {
      showToast.error('Please type "I CONFIRM" to proceed.');
      return;
    }
    setLoading(true);
    try {
      // 1. Validate email to get account_id
      const accountId = await validateEmail(email);
      if (!accountId) {
        showToast.error("Email not found. Please check your email and try again.");
        return;
      }
      await AccountService.updateAccountStatus(accountId, "ACTIVATE");
      showToast.success("Account reactivation successful. Please login again.");
      window.location.reload();
    } catch (error) {
      console.error("Error reactivating account:", error);
      showToast.error("Failed to reactivate account. Please check your email and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
      <h2 className="text-lg font-semibold mb-4">Reactivate Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">
            Type <span className="font-mono bg-gray-100 px-1 rounded">I CONFIRM</span> to reactivate
            your account
          </label>
          <input
            id="confirm"
            type="text"
            placeholder="I CONFIRM"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 text-white rounded-lg shadow-sm ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Reactivate"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactivationForm;
