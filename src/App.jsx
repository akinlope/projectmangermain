import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import { Authentication } from './components/Authentication'
import { MyApp } from './MyApp'
import { ForgetPassword } from './components/ForgetPassword'

export const App = () => {
  



  const router = createBrowserRouter([
    {
      path: "/",
      element:<Authentication />
    },
    {
      path: "/mainpage",
      element: <MyApp />
    },
    {
      path: "/reset",
      element: <ForgetPassword />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
    </>
  )
}
