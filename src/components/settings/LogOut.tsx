import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../../contexts/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: "/welcome", replace: true });
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
