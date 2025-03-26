// import React from 'react'

import { Outlet } from "@tanstack/react-router";
import HomeNavbar from "./HomeNavbar";

export default function HomeLayout() {
  return (
    <>
      <HomeNavbar/>
      <main>
        <Outlet />
      </main>
      <div>Home Footer</div>
    </>
  );
}
