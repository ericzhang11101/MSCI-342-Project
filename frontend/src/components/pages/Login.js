import React, {useContext, useState} from 'react'
import {googleAuth, googleProvider} from '../../firebase/services'
import { UserContext } from '../../App'
import {useNavigate} from 'react-router-dom'
import LoginComponent from '../LoginComponent'

export default function Login() {
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const [showFailedLogin, setShowFailedLogin] = useState(false)

  async function handleSignIn(e){
      // e.preventDefault()
      setShowFailedLogin(false)

      let login = await googleAuth(googleProvider)

      if (login.email){
        console.log('logged in')
        console.log(login)

        const newUser = {
          email: login.email,
          name: login.displayName,
          photo: login.photoURL
        }

        setUser(newUser)
        navigate('/home')
      }
      else {
        console.log('failed')
        setShowFailedLogin(true)
        setTimeout(() => {
          setShowFailedLogin(false)
        }, 5000)
      }
  }

  return (
    <div>
      <h2>Login with Google</h2>
      <LoginComponent handleSignIn={handleSignIn} showFailedLogin={showFailedLogin}/>
    
    </div>
  )
}
