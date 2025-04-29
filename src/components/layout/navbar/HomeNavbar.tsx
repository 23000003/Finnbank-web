import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import notif from "../../../assets/notif.svg";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import logo from "../../../assets/finnbank-logo.png";

type NavLinks = "dashboard" | "service" | "activity";

const HomeNavbar: React.FC = () => {
  const location = useLocation();
  const { logout, username } = useAuth();

  return (
    <nav className="bg-blue-500 text-white px-4 md:px-12 lg:px-24">
      <div className="flex flex-wrap items-center justify-between h-16 mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <img src={logo} alt="finnbank-logo" className="h-12 w-16" />
            <h1 className="text-2xl font-bold">Finnbank</h1>
          </div>

          <div className="lg:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex gap-4 ml-0 lg:ml-10">
          {["dashboard", "service", "activity"].map((link) => {
            const match = location.pathname.includes(link);
            return (
              <Link
                key={link}
                to={`/home/${link as NavLinks}`}
                className={`px-3 py-2 rounded-lg hover:bg-blue-600 duration-300 ${
                  match ? "underline" : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            );
          })}
        </div>

        {/* Profile section */}
        <div className="hidden lg:flex items-center">
          <Profile logout={logout} username={username as string} />
        </div>
      </div>
    </nav>
  );
};
export default HomeNavbar;

const Profile: React.FC<{ logout: () => void; username: string }> = ({ logout, username }) => {
  const [toggle, setToggle] = useState<"settings" | "user" | null>(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    setToggle(null);
    navigate({ to: "/welcome", replace: true });
  };

  return (
    <div className="flex items-center w-full gap-6 justify-end">
      {/* notif and settings icon */}
      <div className="flex gap-8 mr-5">
        <Link className="flex flex-col" to="/home/updates">
          <img
            src={notif}
            alt="notif-icon"
            className="w-4 h-5 cursor-pointer hover:opacity-60 duration-300"
          />
        </Link>
      </div>
      {/* user view bar */}
      <div className="flex flex-col">
        <div
          className="flex items-center gap-6 hover:opacity-70 p-2 cursor-pointer duration-300"
          onClick={() => setToggle(toggle === "user" ? null : "user")}
        >
          <img src="" alt="user-profile-image" className="bg-white w-9 h-9 rounded-full" />
          <span>{username}</span>
        </div>
        {toggle === "user" ? (
          <div className="absolute right-5 mt-12 w-64 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 z-50">
            <div className="p-4 border-b border-gray-100">
              <span className="font-medium text-gray-800">User Menu</span>
            </div>
            <div className="flex flex-col p-2">
              <Link
                className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-all duration-200 flex items-center gap-2"
                to="/home/profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                View Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-2 cursor-pointer text-red-600 hover:bg-red-50 rounded-md transition-all duration-200 flex items-center gap-2 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 text-xs text-gray-500"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
