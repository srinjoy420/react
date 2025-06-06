import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools"
import { useNotification } from '../context/notificationContext'
import { useCardtStore } from '../store/cartStore'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const{addNotification,count}=useNotification()
  const cartLength=useCardtStore((state)=>state.cart.length)
  const addTocart=useCardtStore((state)=>state.addToCart)
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <div className='p-2 flex gap-2'>
        <Link to="/" className='[&.active]:font-bold'>
            Home
        </Link>
        <Link to="/about" className='[&.active]:font-bold'>
            About
        </Link>
        <Link to="/Products" className='[&.active]:font-bold'>
            Products
        </Link>
      </div>
      <div className='notification-count'>
        notification:{count}

      </div>
      <Outlet />
      <TanStackRouterDevtools/>
    </React.Fragment>
  )
}
