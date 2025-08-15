import { Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { showToast } from "../../utils/toast";
import { getInputBorderClass } from "../../utils/input-error";
import ReactivationForm from "./ReactivateAccount";

const TEST_ACCOUNT_EMAIL = "testtestaccount123@gmail.com";
const TEST_ACCOUNT_PASSWORD = "testaccount123";

const LoginForm: React.FC = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isClosed, setClosed] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedRememberMe = localStorage.getItem("rememberMe");

    if (storedEmail && storedRememberMe === "true") {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

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
        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
          localStorage.setItem("email", email);
        }
        navigate({ to: "/home/dashboard", replace: true });
      })
      .catch((error) => {
        if (error instanceof EvalError) {
          setClosed(true);
          showToast.error("Your account is closed.");
          return;
        } else if ((error as Error).message.includes("Somethings wrong...")) {
          showToast.error("Somethings wrong...");
          return;
        }
        showToast.error("Invalid credentials");
      });
  };

  if (isClosed) {
    return <ReactivationForm />;
  }

  // hahahaha
  const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("email");
    }
  };

  // login button also triggers since its inside a form which generates an error but who cares
  const handleTestAccountLogin = async () => {
    setEmail(TEST_ACCOUNT_EMAIL);
    setPassword(TEST_ACCOUNT_PASSWORD);
    await handleLogin({ preventDefault: () => {} } as FormEvent);
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
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <Link to="/welcome/forgotpass" className="text-sm text-blue-600 hover:text-blue-500">
          Forgot password?
        </Link>
      </div>
      <button
        className={`px-4 py-2 rounded-lg shadow-sm w-full cursor-pointer ${
          loading
            ? "bg-blue-300 text-white cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          // Loading spinner copied from uiverse
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        ) : (
          "Login"
        )}
      </button>
      <button
        className={`px-4 py-2 rounded-lg shadow-sm w-full cursor-pointer ${
          loading
            ? "bg-blue-300 text-white cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={handleTestAccountLogin}
        disabled={loading}
      >
        {loading ? (
          // Loading spinner copied from uiverse
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        ) : (
          "Test Account"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
