// import React from 'react'
import { Link, useLocation } from "@tanstack/react-router";
import reactLogo from "../../../assets/react.svg";
import notif from "../../../assets/notif.svg";
import settings from "../../../assets/settings.svg";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

// @design to be change in toggle or recommend

type NavLinks = "dashboard" | "service" | "activity";

export default function HomeNavbar() {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <nav className="bg-blue-500 text-white h-16 flex items-center justify-between px-4 md:px-40">
      <div className="flex items-center gap-3 w-1/2">
        <div className="flex items-center gap-3">
          <img src={reactLogo} alt="finnbank-logo" />
          <h1 className="text-2xl font-bold">Finnbank</h1>
        </div>
        {/* Navbar Links */}
        <div className="ml-10 flex gap-4">
          {["dashboard", "service", "activity"].map((link) => {
            const match = location.pathname.includes(link);
            return (
              <Link
                key={link}
                to={`/home/${link as NavLinks}`}
                className={`px-4 py-2 rounded-lg hover:bg-blue-600 duration-300 ${match ? "underline" : ""}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex w-1/2 items-center  justify-around">
        <Profile logout={logout} />
      </div>
    </nav>
  );
}

function Profile({ logout }: { logout: () => void }) {
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
        <div className="flex flex-col">
          <img
            src={settings}
            alt="settings-icon"
            className="w-6 h-5 cursor-pointer hover:opacity-60 duration-300"
            onClick={() => setToggle(toggle === "settings" ? null : "settings")}
          />
          {toggle === "settings" ? (
            <div className="flex flex-col absolute mt-8 bg-white w-60 p-3 rounded-lg shadow">
              <span className="text-black border-b w-full text-start text-lg">Settings</span>
              <div className="flex mt-2">
                <span className="text-black">Notif</span>
              </div>
            </div>
          ) : null}
        </div>
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
}
