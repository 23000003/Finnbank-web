import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import ChangePass from "../../../components/settings/ChangePass";
import ChangePin from "../../../components/settings/ChangePin";
import { LockClosedIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

export const Route = createFileRoute("/home/profile/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isChangePinModalOpen, setChangePinModalOpen] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: "/welcome", replace: true });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-15">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Security</h1>
      {/* Security Section */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="flex-1 flex items-center justify-center gap-2 bg-blue-100 hover:bg-blue-500 hover:text-white active:bg-blue-300 text-blue-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
            onClick={() => setPasswordModalOpen(true)}
          >
            <LockClosedIcon className="w-5 h-5" />
            Change Password
          </button>

          <button
            className="flex-1 flex items-center justify-center gap-2 bg-red-100 hover:bg-red-500 hover:text-white active:bg-red-300 text-red-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
            onClick={handleLogout}
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>

      {/* Modals */}
      <ChangePass isOpen={isPasswordModalOpen} onClose={() => setPasswordModalOpen(false)} />
      <ChangePin isOpen={isChangePinModalOpen} onClose={() => setChangePinModalOpen(false)} />
    </div>
  );
}
