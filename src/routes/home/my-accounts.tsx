import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/my-accounts")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/my-accounts"!</div>;
}
