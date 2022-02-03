import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../../firebase-config'
import './Auth.css'

const Auth = () => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [user, setUser] = useState({})
  const [logInState, setLogInState] = useState(false)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
      setLogInState(true)
    } catch (error) {
      alert(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user);
      setLogInState(true)
    } catch (error) {
      alert(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
    setLogInState(false)
  }

  return (
    <div className='auth'>
      <div className='auth-entry-section'>
        <div className='auth-split'>
          <h4>Register User</h4>
          <input
            className='auth-input'
            placeholder='Email...'
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            type='password'
            className='auth-input'
            placeholder='Password...'
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <button className='auth-buttons' onClick={register}>
            Register Now
          </button>
        </div>
      </div>
      <div className='auth-entry-section'>
        <div className='auth-split'>
          <h4>Log In</h4>
          <input
            className='auth-input'
            placeholder='Email...'
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type='password'
            className='auth-input'
            placeholder='Password...'
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          {!logInState && (
            <button className='auth-buttons' onClick={login}>
              Log In
            </button>
          )}
        </div>
        <div className='auth-split'>
          {logInState && <p>Currently logged in as {user?.email}</p>}
          {logInState && (
            <button className='auth-buttons' onClick={logout}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth
