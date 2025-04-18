import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/service/billers/water-utilities")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/service/billers/water-utilities"!</div>;
}
