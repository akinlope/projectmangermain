import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { Registrationform } from './Registrationform'
import bg from "../img/bg.jpg"

export const Authentication = () => {
  const [check, setCheck] = useState(false);
  const checkForm = () => {
    // console.log("first")
    setCheck(prevState=> !prevState)
  }
  return (
    <div  className="bg-cover bg-center h-screen flex justify-center items-center"
    style={{ backgroundImage: `url(${bg})` }}
    >
      {
        !check ? (<LoginForm check={checkForm} />) : (<Registrationform check={checkForm}/>)
      }
    </div>
  )
}
