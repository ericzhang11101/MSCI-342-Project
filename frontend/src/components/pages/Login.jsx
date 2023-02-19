import React, {useContext, useState} from 'react'
import {googleAuth, googleProvider} from '../../firebase/services'
import { UserContext } from '../../App'

export default function Login() {
  const {user, setUser} = useContext(UserContext)
  const [showFailedLogin, setShowFailedLogin] = useState(false)

  async function handleSignIn(e){
      e.preventDefault()

      let login = await googleAuth(googleProvider)

      if (login.email){
        console.log('logged in')
        console.log(login)

        const user = {
          email: login.email,
          name: login.displayName,
          photo: login.photoURL
        }

        setUser(user, () => {
          // redirect
        })
      }
      else {
        console.log('failed')
        // handle on page
      }
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
