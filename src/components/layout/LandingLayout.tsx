// import React from 'react'

import { Outlet } from "@tanstack/react-router";
import LandingNavbar from "./navbar/LandingNavbar";
import LandingFooter from "./footer/LandingFooter";

export default function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-grow" style={{ backgroundColor: "#f3f3f6" }}>
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  );
}
