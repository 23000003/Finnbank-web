import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/updates")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/updates"!</div>;
}
