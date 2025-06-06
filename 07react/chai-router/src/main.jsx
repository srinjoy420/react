import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { NotificationProvider } from './context/notificationContext'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety


// Render the app
const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
      
    </StrictMode>,
  )
}