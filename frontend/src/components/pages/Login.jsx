import React from 'react'
import {googleAuth, googleProvider} from '../../firebase/services'


export default function Login() {
  
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
