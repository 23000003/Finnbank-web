import { createFileRoute } from '@tanstack/react-router'
import { showToast } from '../../utils/toast'

export const Route = createFileRoute('/welcome/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <div>
      <h1>Welcome to Landing Pagee!!</h1>
      <button onClick={() => showToast.warning("HERE")}>Show Toast</button>
    </div>
  )
}
