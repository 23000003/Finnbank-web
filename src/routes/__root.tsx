import { createRootRoute, Outlet, useLocation, useRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import LandingLayout from "../components/layout/LandingLayout";
import HomeLayout from "../components/layout/HomeLayout";
import { ToastContainer } from "react-toastify";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const isAuthenticated = false;

  const IsAtAuthPage = () => {
    const loc = useLocation();
    if (loc.pathname.startsWith("/welcome/sign")) {
      return <div>Auth Layout</div>;
    }
    return <LandingLayout />;
  };

  return (
    <>
      {isAuthenticated ? <HomeLayout /> : IsAtAuthPage()}
      <Outlet />
      <ToastContainer autoClose={3000} />
      <TanStackRouterDevtools />
    </>
  );
}

function NotFoundComponent() {
  const router = useRouter();
  router.history.back();
  return <></>;
}
