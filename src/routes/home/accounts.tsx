import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/accounts")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/accounts"!</div>;
}
