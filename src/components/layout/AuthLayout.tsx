import { Outlet } from "@tanstack/react-router";
import AuthFooter from "./footer/AuthFooter";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-row">
        <div className="w-1/2">
          <img
            src="https://wallpapershome.com/images/pages/pic_h/11927.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center p-6 gap-6">
          <Outlet />
          <AuthFooter />
        </div>
      </main>
    </div>
  );
}
