import { createFileRoute, Link } from "@tanstack/react-router";
import LoginForm from "../../components/auth/LoginForm";
import logo from "../../assets/finnbank-logo.png";
export const Route = createFileRoute("/welcome/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-md w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center mr-8 mb-10">
          <img src={logo} alt="finnbank-logo" className="w-20 h-15  border-gray-200" />
          <span className="text-4xl font-bold text-gray-800">Finnbank</span>
        </div>
        <h1 className="text-3xl font-light text-gray-500">Welcome Back!</h1>
      </div>

      {/* Login Form */}
      <LoginForm />
      {/* Sign Up Link */}
      <div className="text-center text-sm text-gray-600 mt-5">
        Don't have an account?{" "}
        <Link to="/welcome/signup" className="font-medium text-blue-600 hover:text-blue-500">
          Sign up
        </Link>
      </div>
    </div>
  );
}
