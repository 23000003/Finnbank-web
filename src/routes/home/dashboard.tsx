import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>This is dashboard, reuse the activity data table but only fetch 5 data</div>;
}
