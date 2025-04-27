import { createFileRoute, Link } from "@tanstack/react-router";
import RegisterForm from "../../components/auth/RegisterForm";

export const Route = createFileRoute("/welcome/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-md w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center gap-3 mb-10">
          <img
            src="https://wallpapershome.com/images/pages/pic_h/11927.jpg"
            alt="finnbank-logo"
            className="w-12 h-12 rounded-full border-2 border-gray-200"
          />
          <span className="text-3xl font-bold text-gray-800">FINNBANK</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Start your banking journey with us</h1>
        <p className="text-gray-500 text-sm">Sign up to start now!</p>
      </div>
      <RegisterForm />
      <div className="text-center text-sm text-gray-600 mt-5">
        Already have an account?{" "}
        <Link to="/welcome/signin" className="font-medium text-blue-600 hover:text-blue-500">
          Sign In
        </Link>
      </div>
    </div>
  );
}
