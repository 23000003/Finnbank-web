import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/service/loan")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/service/loan"!</div>;
}
