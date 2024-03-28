import React, {useCallback, useState} from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
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
    

    {/* <button onClick={console.log("Clicked")}><GiHamburgerMenu /></button> */}
    <RouterProvider router={router} />
    </>
  )
}
