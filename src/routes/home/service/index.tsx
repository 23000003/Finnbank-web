import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/home/service/")({
  beforeLoad: () => {
    throw redirect({
      to: "/home/service/transfer",
      search: {
        accountNum: undefined,
        type: undefined,
      },
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/service/"!</div>;
}
