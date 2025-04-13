import { createFileRoute, Link } from "@tanstack/react-router";
import { showToast } from "../../utils/toast";

export const Route = createFileRoute("/welcome/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Welcome to Landing Page!! SKSKSKSK</h1>
      <h2>Test</h2>
      <h2>Test2</h2>
      <button 
        className="p-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={() => showToast.warning("HERE")}
      >
        Show Toast
      </button>
      <div className="flex flex-col space-y-2">
        <Link 
          to="/welcome/signin" 
          className="underline text-blue-500"
        >
          Go to Sign In
        </Link>
        <Link 
          to="/welcome/signup" 
          className="underline text-blue-500"
        >
          Go to Sign Up
        </Link>
        <Link 
          to="/home/dashboard" 
          className="underline text-blue-500"
        >
          Go to Protected Route (Dashboard)
        </Link>
      </div>
    </div>
  );
}
