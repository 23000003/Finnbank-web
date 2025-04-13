import { Link } from "@tanstack/react-router";
import reactLogo from "../../../assets/react.svg";

export default function LandingNavbar() {
  return (
    <nav className="bg-blue-500 text-white h-16 flex items-center justify-between px-20">
      <div className="flex items-center gap-3">
        <img src={reactLogo} alt="finnbank-logo" />
        <h1 className="text-2xl font-bold">Finnbank</h1>
      </div>
      <div className="flex gap-4">
        <Link
          to="/welcome/signin"
          className="px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 duration-300 cursor-pointer"
        >
          Sign In
        </Link>
        <Link
          to="/welcome/signup"
          className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
