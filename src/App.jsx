import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import { Authentication } from './components/Authentication'
import { MyApp } from './MyApp'

export const App = () => {
  



  const router = createBrowserRouter([
    {
      path: "/",
      element:<Authentication />
    },
    {
      path: "/mainpage",
      element: <MyApp />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
    </>
  )
}
