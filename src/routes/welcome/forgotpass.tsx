import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../../assets/finnbank-logo.png";
import ForgotPassForm from "../../components/auth/ForgotPassForm";

export const Route = createFileRoute("/welcome/forgotpass")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-md w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center mr-8 mb-10">
          <img src={logo} alt="finnbank-logo" className="w-20 h-15 border-gray-200" />
          <span className="text-4xl font-bold text-gray-800">Finnbank</span>
        </div>
        <h1 className="text-3xl font-light text-gray-500">Forgot Password</h1>
      </div>

      {/* Placeholder for the form */}
      <div className="bg-white p-6 rounded shadow-lg">
        <ForgotPassForm />
        <p className="text-gray-600 text-center">Enter your email to reset your password.</p>
      </div>

      {/* Back to Sign In Link */}
      <div className="text-center text-sm text-gray-600 mt-5">
        Remembered your password?{" "}
        <Link to="/welcome/signin" className="font-medium text-blue-600 hover:text-blue-500">
          Sign in
        </Link>
      </div>
    </div>
  );
}
