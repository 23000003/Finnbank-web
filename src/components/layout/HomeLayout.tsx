import { Outlet, useLocation } from "@tanstack/react-router";
import HomeNavbar from "./navbar/HomeNavbar";
import HomeFooter from "./footer/HomeFooter";
import ProfileNavbar from "./navbar/ProfileNavbar";
import ServiceNavbar from "./navbar/ServiceNavbar";

const basePath = "/home";

const routeNames: Record<string, string> = {
  [`${basePath}/dashboard`]: "Dashboard",
  [`${basePath}/activity`]: "Activity",
};

export default function HomeLayout() {
  const location = useLocation();
  const routeName = routeNames[location.pathname];

  return (
    <div className="min-h-screen flex flex-col">
      <HomeNavbar />
      {location.pathname.startsWith(`${basePath}/profile`) ? (
        <ProfileNavbar />
      ) : location.pathname.startsWith(`${basePath}/service/`) ? (
        <ServiceNavbar />
      ) : null}
      <main className="flex-grow p-6 px-4 pb-14 md:px-40" style={{ backgroundColor: "#f3f3f6" }}>
        <div className="text-2xl font-semibold">
          <span>{routeName}</span>
        </div>
        <Outlet />
      </main>
      <HomeFooter />
    </div>
  );
}
