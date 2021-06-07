import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { UserContext } from '../App'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

function Login() {
  const [loading, setLoading] = useState(false)
  const { setUser, firebaseAuth } = useContext(UserContext)
  const [error, setError] = useState(null)
  let history = useHistory()

  const handleLogin = () => {
    setLoading(true)
    firebaseAuth
      .signInWithEmailAndPassword(loading.email, loading.password)
      .then(data => { 
        setError(null)
        setUser(data.user)
        setLoading(false)
        localStorage.setItem('user', JSON.stringify(data.user))
        history.push('/feelings')
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return (
    <div className="main">
      <div className='row formField'>
        <div className="">
          <i className='material-icons prefix'>account_circle</i>LOGIN
        </div>
        <div className='col s12 inputArea'>
          <div className='row  inputArea-inputField'>
            <div className='input-field col s12 '>
              <input
                onChange={e => setLoading({ ...loading, email: e.target.value })}
                id='email'
                type='email'
                className='validate'
              />
              <label for='email'>Email</label>
            </div>
          </div>
          <div className='row inputArea-inputField'>
            <div className='input-field col s12'>
              <input
                onChange={e => setLoading({ ...loading, password: e.target.value })}
                id='password'
                type='password'
                className='validate'
              />
              <label for='password'>Password</label>
            </div>
          </div>
        </div>
        {error && 
          <div className="errorText">{error}</div>
        }
        <div>
        <div className="loginButtonArea">
          <button onClick={() => handleLogin()} className='waves-effect waves-light btn-large buttonColor'>
            Login
          </button>
          </div>
          <br />
          <p>Or create a new profile</p>
          <Link to='./signup'>Signup</Link>
        
        </div>
      </div>
    </div>
  )
}

export default Login
