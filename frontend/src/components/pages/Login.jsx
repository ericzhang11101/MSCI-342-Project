import React, {useContext, useState} from 'react'
import {googleAuth, googleProvider} from '../../firebase/services'
import { UserContext } from '../../App'


export default function Login() {
  const {user, setUser} = useContext(UserContext)
  console.log('user: ' + user)

  async function handleSignIn(e){
      e.preventDefault()

      const login = await googleAuth(googleProvider)
      console.log(login)
     
  }

  return (
    <div>
      Login
      <button onClick={handleSignIn}>
        click me
      </button>
    </div>
  )
}
