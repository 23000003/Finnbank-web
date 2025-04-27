import { Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { showToast } from "../../utils/toast";
import { getInputBorderClass } from "../../utils/input-error";

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!email || !password) {
      showToast.error("Please fill in all fields");
      return;
    }

    await login(email, password)
      .then(() => {
        showToast.success("Login successful");
        console.log("Login OK");
        navigate({ to: "/home/dashboard", replace: true });
      })
      .catch((error) => {
        showToast.error(error.message);
      });
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md ${getInputBorderClass(email, hasSubmitted)}`}
        />
        {hasSubmitted && !email && <p className="text-sm text-red-600">Email is required</p>}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className={`w-full px-4 py-2 border rounded-md ${getInputBorderClass(password, hasSubmitted)}`}
        />
        {hasSubmitted && !password && <p className="text-sm text-red-600">Password is required</p>}
      </div>

      {/* Remember me and Forgot pass */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember-me"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <Link to="/welcome" className="text-sm text-blue-600 hover:text-blue-500">
          Forgot password?
        </Link>
      </div>

      {/* Sign in button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
