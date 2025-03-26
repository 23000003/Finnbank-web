// import React from 'react'

import { Outlet } from "@tanstack/react-router";
import LandingNavbar from "./LandingNavbar";

export default function LandingLayout() {
  return (
    <>
      <LandingNavbar/>
      <main>
        <Outlet />
      </main>
      <div>Landing Footer</div>
    </>
  );
}
