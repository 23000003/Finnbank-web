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
