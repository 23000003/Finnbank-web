import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/profile/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/profile/settings"!</div>;
}
