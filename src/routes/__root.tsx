import { 
  createRootRoute, 
  redirect, 
  useLocation, 
  useRouter 
} from "@tanstack/react-router";
import LandingLayout from "../components/layout/LandingLayout";
import HomeLayout from "../components/layout/HomeLayout";
import { ToastContainer } from "react-toastify";
import { AuthContextType } from "../types/contexts";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  beforeLoad: ({ context, location }) => {
    const ctx = context as AuthContextType;
    if (ctx.isAuthenticated && !location.pathname.startsWith("/home")) {
      throw redirect({
        to: "/home/dashboard",
      });
    } else if (!ctx.isAuthenticated && !location.pathname.startsWith("/welcome")) {
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
      { isAuthenticated 
        ? <HomeLayout /> 
        : IsAtAuthPage() 
      }
      <ToastContainer autoClose={3000} />
    </>
  );
}

function NotFoundComponent() {
  const router = useRouter();
  router.history.back();
  return <></>;
}
