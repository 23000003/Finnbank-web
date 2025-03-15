import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/home/dashboard" />
  }

  return <Navigate to="/welcome" />
}
