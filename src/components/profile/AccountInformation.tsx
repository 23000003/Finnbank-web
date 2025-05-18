import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { AccountService } from "../../services/account.service";
import { AccountTypeEnum } from "../../types/enums/account.enum";

type AccountOptionsProps = {
  nationality: string;
  accountNumber: string;
  nationalIdNumber: string;
  accountType: AccountTypeEnum;
  birthdate: string;
  userID: string;
};

const AccountInformation: React.FC<AccountOptionsProps> = ({
  nationalIdNumber,
  accountNumber,
  accountType,
  birthdate,
  nationality,
  userID,
}) => {
  const { logout } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAccountStatus = async () => {
    if (confirmation !== "I CONFIRM") {
      setShowConfirm(true);
      return;
    }
    setLoading(true);
    try {
      const type = "DEACTIVATE";
      await AccountService.updateAccountStatus(userID, type);
      logout();
      console.log("logout ok");
    } catch (err) {
      console.error("Update Account Status error: ", err);
      throw err;
    } finally {
      setLoading(false);
      setShowConfirm(false);
      setConfirmation("");
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Account Options</h1>
      <div className="flex flex-col bg-white p-4 rounded-lg gap-4">
        <LanguageDropdown />
        <TimezoneDropdown />
        {/* Info */}
        {[
          { label: "Account Type", value: accountType },
          { label: "Account Number", value: accountNumber },
          { label: "Birthdate", value: birthdate },
          { label: "Nationality", value: nationality },
          { label: "National ID No.", value: nationalIdNumber },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1 mt-2">
            <span className="text-xs text-gray-500 font-semibold">{label}</span>
            <span className="text-sm font-semibold">
              {label === "Birthdate" ? new Date(value).toLocaleDateString() : value}
            </span>
          </div>
        ))}
        <button
          className="
          flex items-center justify-center gap-2 border-red-500 border
        text-red-500 font-semibold py-2 px-4 rounded-lg hover:opacity-50 transition duration-300 cursor-pointer mt-
        "
          onClick={() => handleAccountStatus()}
        >
          <span>Close your account</span>
        </button>
      </div>
      {/* confirmation module before closing account. 
      wa nalang nako gi separate nga component kay gamay rmn */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4 text-red-600">Confirm Account Closure</h2>
            <p className="mb-4 text-gray-700">
              Type <span className="font-mono bg-gray-100 px-1 rounded">I CONFIRM</span> to close
              your account.
            </p>
            <input
              type="text"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              placeholder='Type "I CONFIRM"'
              disabled={loading}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200 text-gray-700"
                onClick={() => {
                  setShowConfirm(false);
                  setConfirmation("");
                }}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"}`}
                onClick={handleAccountStatus}
                disabled={loading}
              >
                {loading ? "Closing..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountInformation;

const LanguageDropdown: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative">
        <select
          id="language-select"
          className="block w-full text-sm pt-5 pb-2 px-3 border border-gray-300 rounded-md appearance-none h-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          defaultValue="english"
        >
          <option value="english">English</option>
          <option value="japanese">日本語 (Japanese)</option>
          <option value="korean">한국어 (Korean)</option>
        </select>
        <label
          htmlFor="language-select"
          className="absolute left-3 top-2 text-xs text-gray-500 pointer-events-none"
        >
          Language
        </label>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const TimezoneDropdown: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative">
        <select
          id="timezone-select"
          className="block w-full text-sm pt-5 pb-2 px-3 border border-gray-300 rounded-md appearance-none h-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          defaultValue="manila"
        >
          <option value="manila">(GMT+8) Manila, Philippines</option>
          <option value="tokyo">(GMT+9) Tokyo, Japan</option>
          <option value="seoul">(GMT+9) Seoul, South Korea</option>
          <option value="singapore">(GMT+8) Singapore</option>
          <option value="hongkong">(GMT+8) Hong Kong</option>
          <option value="sydney">(GMT+10) Sydney, Australia</option>
          <option value="london">(GMT+0) London, UK</option>
          <option value="newyork">(GMT-5) New York, USA</option>
          <option value="losangeles">(GMT-8) Los Angeles, USA</option>
        </select>
        <label
          htmlFor="timezone-select"
          className="absolute left-3 top-2 text-xs text-gray-500 pointer-events-none"
        >
          Time zone
        </label>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
