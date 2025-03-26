import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/transfer')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/transfer"!</div>
}
