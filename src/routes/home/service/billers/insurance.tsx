import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/service/billers/insurance")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/service/billers/insurance"!</div>;
}
