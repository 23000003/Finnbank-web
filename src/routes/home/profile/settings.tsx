import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ChangePass from "../../../components/settings/ChangePass";
import ChangePin from "../../../components/settings/ChangePin";

export const Route = createFileRoute("/home/profile/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isChangePinModalOpen, setChangePinModalOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Security</h1>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90"
          onClick={() => setPasswordModalOpen(true)}
        >
          Change Password
        </button>

        <button
          className="w-full bg-blue-600 text-white py-2 px-4 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90"
          onClick={() => setChangePinModalOpen(true)}
        >
          Change PIN Number
        </button>
      </div>

      <ChangePass isOpen={isPasswordModalOpen} onClose={() => setPasswordModalOpen(false)} />
      <ChangePin isOpen={isChangePinModalOpen} onClose={() => setChangePinModalOpen(false)} />
    </div>
  );
}
