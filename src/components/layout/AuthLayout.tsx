import { Outlet } from "@tanstack/react-router";
import AuthFooter from "./footer/AuthFooter";
import bg from "../../assets/form-bg.jpg";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex md:flex-row ">
        <div className="w-1/2 hidden md:flex">
          <img src={bg} alt="" className="object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-12 gap-6">
          <Outlet />
          <AuthFooter />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
