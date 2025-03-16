import { createFileRoute, Link } from "@tanstack/react-router";
import { showToast } from "../../utils/toast";

export const Route = createFileRoute("/welcome/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Welcome to Landing Page!! SKSKSKSK</h1>
      <button onClick={() => showToast.warning("HERE")}>Show Toast</button>
      <Link to="/welcome/signin">Go to Sign In</Link>
      <Link to="/welcome/signup">Go to Sign Up</Link>
    </div>
  );
}
