import { createRootRoute, useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import LandingLayout from "../components/layout/LandingLayout";
import HomeLayout from "../components/layout/HomeLayout";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";
import { useEffect, useState } from "react";
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
  const [showLoading, setShowLoading] = useState(false);
  const [currentLayout, setCurrentLayout] = useState<string | null>(null);

  useEffect(() => {
    if (auth.loading) {
      return;
    }

    const toMetaTitle = () => {
      const pathSegments = location.pathname.split("/").filter(Boolean);
      const lastSegment = pathSegments[pathSegments.length - 1] || "landing page";

      const title = lastSegment
        .replace(/-/g, " ") // Replace dashes with spaces
        .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize first letters

      return `Finnbank | ${title}`;
    };

    document.title = toMetaTitle();

    if (location.pathname.startsWith("/learnmore")) {
      return;
    } else if (auth.isAuthenticated && !location.pathname.startsWith("/home")) {
      navigate({ to: "/home/dashboard", replace: true });
    } else if (!auth.isAuthenticated && !location.pathname.startsWith("/welcome")) {
      navigate({ to: "/welcome", replace: true });
    }
  }, [auth, navigate, location]);

  // Handle layout transitions
  useEffect(() => {
    if (auth.isAuthenticated) {
      return;
    }
    const getLayoutType = () => {
      if (location.pathname.startsWith("/welcome/sign")) return "auth";
      return "landing";
    };
    const newLayout = getLayoutType();
    if (currentLayout !== null && currentLayout !== newLayout && newLayout !== "landing") {
      setShowLoading(true);
      setTimeout(() => setShowLoading(false), 500);
    }
    setCurrentLayout(newLayout);
  }, [location.pathname, currentLayout, auth.loading, auth.isAuthenticated]);

  const LoadingLayout = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );

  const getCurrentLayout = () => {
    if (auth.isAuthenticated) return <HomeLayout />;
    if (location.pathname.startsWith("/welcome/sign")) return <AuthLayout />;
    return <LandingLayout />;
  };

  return (
    <>
      {showLoading && <LoadingLayout />}
      <div className={showLoading ? "hidden" : "block"}>
        {getCurrentLayout()}
        <ToastContainer autoClose={3000} />
      </div>
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
