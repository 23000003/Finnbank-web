import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/inbox")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/inbox"!</div>;
}
