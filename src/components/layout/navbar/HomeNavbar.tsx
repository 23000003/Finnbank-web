// import React from 'react'
import { Link, useLocation } from "@tanstack/react-router";
import notif from "../../../assets/notif.svg";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import logo from "../../../assets/finnbank-logo.png";
// @design to be change in toggle or recommend

type NavLinks = "dashboard" | "service" | "activity";

const HomeNavbar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();

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
          <Profile logout={logout} />
        </div>
      </div>
    </nav>
  );
};
export default HomeNavbar;

const Profile: React.FC<{ logout: () => void }> = ({ logout }) => {
  const [toggle, setToggle] = useState<"settings" | "user" | null>(null);

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
          <span>John Doe</span>
        </div>
        {toggle === "user" ? (
          <div className="flex flex-col absolute mt-12 bg-white w-60 p-3 rounded-lg shadow right-5">
            <span className="text-black border-b w-full text-start text-lg">User</span>
            <div className="flex mt-2 flex-col">
              <Link
                className="text-black hover:text-gray-600 duration-300 cursor-pointer"
                to="/home/profile"
              >
                View Profile
              </Link>
              <span
                className="text-red-500 hover:text-red-300 duration-300 cursor-pointer"
                onClick={logout}
              >
                Logout
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
