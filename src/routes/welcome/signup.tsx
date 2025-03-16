import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/welcome/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/welcome/signup"!</div>;
}
