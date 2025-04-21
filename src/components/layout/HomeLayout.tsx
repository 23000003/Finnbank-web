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

const HomeLayout: React.FC = () => {
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
      <main
        className="flex-grow p-6 sm:px-6 md:px-12 lg:px-24 pb-14"
        style={{ backgroundColor: "#f3f3f6" }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-2xl font-semibold">
            <span>{routeName}</span>
          </div>
          <Outlet />
        </div>
      </main>
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
