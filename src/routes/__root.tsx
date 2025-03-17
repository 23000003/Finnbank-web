import { createRootRoute, Outlet, redirect, useLocation, useRouter } from "@tanstack/react-router";
import LandingLayout from "../components/layout/LandingLayout";
import HomeLayout from "../components/layout/HomeLayout";
import { ToastContainer } from "react-toastify";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  beforeLoad: ({ context }) => {
    const ctx = context as { test: boolean };
    if (ctx.test && location.pathname.startsWith("/welcome/")) {
      console.log("Before Load");
      throw redirect({
        to: "/home/dashboard",
      });
    } else if (!ctx.test && location.pathname.startsWith("/home/")) {
      console.log("Before Load");
      throw redirect({
        to: "/welcome",
      });
    }
  },
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
    </>
  );
}

function NotFoundComponent() {
  const router = useRouter();
  router.history.back();
  return <></>;
}
