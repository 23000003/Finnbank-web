import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { showToast } from "../../utils/toast";

export const Route = createFileRoute("/welcome/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Landing Page!!</h1>
      <button onClick={() => showToast.warning("HERE")}>Show Toast</button>

      {/* Button for Sign In */}
      <button onClick={() => navigate({ to: "/welcome/signin" })}>Go to Sign In</button>

      {/* Button for Sign Up */}
      <button onClick={() => navigate({ to: "/welcome/signup" })}>Go to Sign Up</button>
    </div>
  );
}
