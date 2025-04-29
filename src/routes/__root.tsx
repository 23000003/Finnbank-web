import { createRootRoute, useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import LandingLayout from "../components/layout/LandingLayout";
import HomeLayout from "../components/layout/HomeLayout";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";
import { useEffect } from "react";
import { isTokenExpired } from "../utils/validate-token-expiry";
import { Context } from "../types/interfaces/auth-context.interface";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  beforeLoad: async ({ context }) => {
    const { auth } = context as Context;
    // validate session without refreshing the page
    if (auth.isAuthenticated && auth.tokenExp) {
      if (isTokenExpired(auth.tokenExp)) {
        console.log("Token expired");
        await auth.logout();
      }
    }
  },
});

function RootComponent() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (auth.loading) {
      return;
    }
    if (auth.isAuthenticated && !location.pathname.startsWith("/home")) {
      navigate({ to: "/home/dashboard", replace: true });
    } else if (!auth.isAuthenticated && !location.pathname.startsWith("/welcome")) {
      navigate({ to: "/welcome", replace: true });
    }
  }, [auth, navigate, location]);

  const IsAtAuthPage = () => {
    const loc = useLocation();
    if (loc.pathname.startsWith("/welcome/sign")) {
      return <AuthLayout />;
    }
    return <LandingLayout />;
  };

  return (
    <>
      {auth.isAuthenticated ? <HomeLayout /> : IsAtAuthPage()}
      <ToastContainer autoClose={3000} />
    </>
  );
}

function NotFoundComponent() {
  const router = useRouter();
  router.history.back();
  return <></>;
}

function ErrorComponent() {
  return <div>Something went wrong</div>;
}
