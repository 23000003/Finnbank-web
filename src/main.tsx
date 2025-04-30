import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter, createHashHistory } from "@tanstack/react-router";
import "./index.css";

const history = createHashHistory();

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { AuthProvider } from "./contexts/AuthContext";
import { ActivityData } from "./types/entities/transaction.entity";
import InitApp from "./InitApp";

// Create a new router instance
export const router = createRouter({
  history, // support client-side routing in production
  routeTree,
  context: {
    auth: undefined!,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  interface HistoryState {
    activityData?: ActivityData;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <InitApp />
      </AuthProvider>
    </StrictMode>
  );
}

// import { createRootRoute, redirect, useLocation, useNavigate, useRouter } from "@tanstack/react-router";
// import LandingLayout from "../components/layout/LandingLayout";
// import HomeLayout from "../components/layout/HomeLayout";
// import { ToastContainer } from "react-toastify";
// import { useAuth } from "../contexts/AuthContext";
// import AuthLayout from "../components/layout/AuthLayout";
// import { useEffect } from "react";

// export const Route = createRootRoute({
//   component: RootComponent,
//   notFoundComponent: NotFoundComponent,
//   // onEnter: ({ context }) => {
//   //   const { auth } = context as Context;
//   //   // check if token is expired
//   //   console.log(auth.isAuthenticated, "ON ENTER")
//   //   console.log(auth.loading, "LOADING  ON ENTER");
//   // },
// });

// function RootComponent() {
//   const auth = useAuth();
//   const navigate = useNavigate()
//   const location = useLocation();
//   useEffect(() => {
//     if (auth.loading) {
//       return;
//     }
//     // redirect to dashboard if authenticated
//     if (auth.isAuthenticated && !location.pathname.startsWith("/home")) {
//       console.log("redirecting to dashboard");
//       navigate({
//         to: "/home/dashboard",
//         replace: true,
//       });
//       // redirect to welcome (landing page) if not authenticated
//     } else if (!auth.isAuthenticated && !location.pathname.startsWith("/welcome")) {
//       console.log("redirecting to welcome");
//       navigate({
//         to: "/welcome",
//         replace: true,
//       });
//     }
//   }, [auth, navigate, location])

//   const IsAtAuthPage = () => {
//     const loc = useLocation();
//     if (loc.pathname.startsWith("/welcome/sign")) {
//       return <AuthLayout />;
//     }
//     return <LandingLayout />;
//   };

//   return (
//     <>
//       {auth.isAuthenticated ? <HomeLayout /> : IsAtAuthPage()}
//       <ToastContainer autoClose={3000} />
//     </>
//   );
// }

// function NotFoundComponent() {
//   const router = useRouter();
//   router.history.back();
//   return <></>;
// }
