import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/welcome/signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/welcome/signin"!</div>
}
