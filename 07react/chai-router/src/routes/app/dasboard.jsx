import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dasboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/dasboard"!</div>
}
