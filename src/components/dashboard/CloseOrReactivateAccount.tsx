import { Dialog } from "@headlessui/react";
import { OpenedAccountStatusEnum } from "../../types/enums/opened-account.enum";
import { OpenedAccountService } from "../../services/opened-account.service";

// This component is used to close or reactivate an
// Opened Account

type CloseAccountProps = {
  isOpen: boolean;
  loading: boolean;
  accountId: number;
  onClose: () => void;
  status: OpenedAccountStatusEnum;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>;
  setAccountStatus: React.Dispatch<React.SetStateAction<OpenedAccountStatusEnum>>;
};

const CloseOrReactiveAccount: React.FC<CloseAccountProps> = ({
  status,
  isOpen,
  onClose,
  loading,
  accountId,
  setLoading,
  setErrorMessage,
  setAccountStatus,
  setSuccessMessage,
}) => {
  const closeAccount = async () => {
    console.log("Account closed successfully", accountId);
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await OpenedAccountService.updateOpenedAccountStatus(
        accountId,
        OpenedAccountStatusEnum.CLOSED
      );
      setSuccessMessage("Account closed successfully!");
      setAccountStatus(OpenedAccountStatusEnum.CLOSED);
      setLoading(false);
    } catch (error) {
      console.error("Error closing account: ", error);
      setErrorMessage("Failed to close account. Please try again.");
    } finally {
      onClose();
    }
  };

  const reactivateAccount = async () => {
    console.log("Account reactivated successfully", accountId);
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await OpenedAccountService.updateOpenedAccountStatus(
        accountId,
        OpenedAccountStatusEnum.ACTIVE
      );
      setSuccessMessage("Account reactivated successfully!");
      setAccountStatus(OpenedAccountStatusEnum.ACTIVE);
      setLoading(false);
    } catch (error) {
      console.error("Error reactivating account: ", error);
      setErrorMessage("Failed to reactivate account. Please try again.");
    } finally {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center px-4">
        {status === OpenedAccountStatusEnum.CLOSED ? (
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <Dialog.Title className="text-lg font-semibold mb-4 text-gray-900">
              Reactivate Account
            </Dialog.Title>
            <p className="text-gray-700 mb-6">
              Are you sure you want to reactivate your account? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 rounded-md transition cursor-pointer"
              >
                No
              </button>
              <button
                onClick={reactivateAccount}
                className={`
                  px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition cursor-pointer
                  ${loading ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {loading ? "Loading..." : "Yes, Reactivate"}
              </button>
            </div>
          </Dialog.Panel>
        ) : (
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <Dialog.Title className="text-lg font-semibold mb-4 text-gray-900">
              Close Account
            </Dialog.Title>
            <p className="text-gray-700 mb-6">
              Are you sure you want to close your account? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 rounded-md transition cursor-pointer"
              >
                No
              </button>
              <button
                onClick={closeAccount}
                className={`
                  px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition cursor-pointer
                  ${loading ? "opacity-50 cursor-not-allowed" : ""}
                `}
                disabled={loading}
              >
                {loading ? "Loading..." : "Yes, Close"}
              </button>
            </div>
          </Dialog.Panel>
        )}
      </div>
    </Dialog>
  );
};

export default CloseOrReactiveAccount;
