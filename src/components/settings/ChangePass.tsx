import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import useActionStatus from "../../hooks/useActionStatus";
import { getInputBorderClass } from "../../utils/input-error";

interface ChangePassProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChangePass({ isOpen, onClose }: ChangePassProps) {
  const { userId } = useAuth();
  const { setLoading, setErrorMessage, setSuccessMessage } = useActionStatus(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const validatePasswords = () => {
    if (
      passwords.currentPassword === "" ||
      passwords.newPassword === "" ||
      passwords.confirmNewPassword === ""
    ) {
      setErrorMessage("All fields are required");
      return false;
    }
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      setErrorMessage("New password and confirm password do not match");
      return false;
    }
    return true;
  };

  const handleChangePassword = async () => {
    setHasSubmitted(true);
    setTimeout(() => {
      setHasSubmitted(false);
    }, 3000);
    if (!validatePasswords()) {
      return;
    }
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const data = {
        userId: userId,
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword,
      };
      console.log(data);
      setSuccessMessage("Password changed successfully!");
      onClose();
    } catch (error) {
      setErrorMessage("Failed to change password. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <Dialog.Title className="text-xl font-semibold mb-4">Change Password</Dialog.Title>
          <div className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Current Password"
              value={passwords.currentPassword}
              onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
              className={`
                border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none
                ${getInputBorderClass(passwords.currentPassword, hasSubmitted)}
              `}
            />
            <input
              type="password"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
              className={`
                border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none
                ${getInputBorderClass(passwords.newPassword, hasSubmitted)}
              `}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={passwords.confirmNewPassword}
              onChange={(e) => setPasswords({ ...passwords, confirmNewPassword: e.target.value })}
              className={`
                border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none
                ${getInputBorderClass(passwords.confirmNewPassword, hasSubmitted)}
              `}
            />
            <div className="flex justify-end gap-6 mt-4">
              <button onClick={onClose} className="text-sm text-gray-700 cursor-pointer">
                Cancel
              </button>
              <button
                onClick={() => {
                  handleChangePassword();
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
