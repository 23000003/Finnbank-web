import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter, createHashHistory } from "@tanstack/react-router";
import "./index.css";

const history = createHashHistory();

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Create a new router instance
const router = createRouter({
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
}

const InitApp = () => {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth: auth }} />;
};

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
