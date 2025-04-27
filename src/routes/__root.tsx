import { createRootRoute, redirect, useLocation, useRouter } from "@tanstack/react-router";
import LandingLayout from "../components/layout/LandingLayout";
import HomeLayout from "../components/layout/HomeLayout";
import { ToastContainer } from "react-toastify";
import { Context } from "../types/interfaces/auth-context.interface";
import { useAuth } from "../contexts/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  beforeLoad: ({ context, location }) => {
    const { auth } = context as Context;

    if (auth.tokenExp) {
      const tokenExp = new Date(auth.tokenExp * 1000);
      const now = new Date();
      if (tokenExp < now) {
        auth.logout();
        return;
      }
    }
    // redirect to dashboard if authenticated
    if (auth.isAuthenticated && !location.pathname.startsWith("/home")) {
      console.log(location.pathname);
      console.log("redirecting to dashboard");
      throw redirect({
        to: "/home/dashboard",
      });
      // redirect to welcome (landing page) if not authenticated
    } else if (!auth.isAuthenticated && !location.pathname.startsWith("/welcome")) {
      throw redirect({
        to: "/welcome",
      });
    }

    return { auth };
  },
});

function RootComponent() {
  const { isAuthenticated } = useAuth();

  const IsAtAuthPage = () => {
    const loc = useLocation();
    if (loc.pathname.startsWith("/welcome/sign")) {
      return <AuthLayout />;
    }
    return <LandingLayout />;
  };

  return (
    <>
      {isAuthenticated ? <HomeLayout /> : IsAtAuthPage()}
      <ToastContainer autoClose={3000} />
    </>
  );
}

function NotFoundComponent() {
  const router = useRouter();
  router.history.back();
  return <></>;
}
