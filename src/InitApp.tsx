import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "./contexts/AuthContext";
import { router } from "./main";

const InitApp: React.FC = () => {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth: auth }} />;
};

export default InitApp;
