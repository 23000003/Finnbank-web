import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import ChangePass from "../../../components/settings/ChangePass";

export const Route = createFileRoute("/home/profile/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <button
          className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90"
          onClick={() => setPasswordModalOpen(true)}
        >
          Change Password
        </button>
        <button
          className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90"
          onClick={() => navigate({ to: "/learnmore" })}
        >
          Account Benefits
        </button>
      </div>
      <ChangePass isOpen={isPasswordModalOpen} onClose={() => setPasswordModalOpen(false)} />
    </div>
  );
}
