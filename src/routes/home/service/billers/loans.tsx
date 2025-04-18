import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/service/billers/loans")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/service/billers/loan"!</div>;
}
