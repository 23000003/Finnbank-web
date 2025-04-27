import { Dialog } from "@headlessui/react";

interface ChangePassProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChangePass({ isOpen, onClose }: ChangePassProps) {
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
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <div className="flex justify-end gap-6 mt-4">
              <button onClick={onClose} className="text-sm text-gray-700">
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Change Password submitted!");
                  onClose();
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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
