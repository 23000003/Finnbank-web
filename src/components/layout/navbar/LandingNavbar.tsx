import { Link } from "@tanstack/react-router";
import logo from "../../../assets/finnbank-logo.png";

export default function LandingNavbar() {
  return (
    <nav className="bg-blue-500 sticky top-0 z-50 text-white px-4 md:px-12 lg:px-24">
      <div className="flex flex-wrap items-center justify-between h-16 mx-auto max-w-screen-2xl">
        <Link className="flex items-center gap-3" to="/welcome">
          <img src={logo} alt="finnbank-logo" className="h-12 w-16" />
          <h1 className="text-2xl font-bold">Finnbank</h1>
        </Link>
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
      </div>
    </nav>
  );
}
