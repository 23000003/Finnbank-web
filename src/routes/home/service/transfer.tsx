import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/service/transfer')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/service/transfer"!</div>
}
