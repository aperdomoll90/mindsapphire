import React, { useState, useContext } from 'react'
import { useHistory,Link } from 'react-router-dom'
import firebase from 'firebase'
import { UserContext } from '../App'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

function Login() {
  const [loading, setLoading] = useState(false)
  const { setUser, firebaseAuth } = useContext(UserContext)
  let history = useHistory()

  const handleLogin = () => {
    setLoading(true)
    firebaseAuth
      .signInWithEmailAndPassword(loading.email, loading.password)
      .then((data) => {
        setUser(data.user)
        history.push('/overview')
        setLoading(false)
        localStorage.setItem('user', JSON.stringify(data.user))
        history.push('/overview')
      })
      .catch((err) => console.log(err.message))
  }

  const loginWithGoogle = () => {
    setLoading(true)
    const provider = new firebase.auth.GoogleAuthProvider()
    firebaseAuth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebaseAuth.signInWithPopup(provider).then((data) => {
          setUser(data.user)
          setLoading(false)
          localStorage.setItem('user', JSON.stringify(data.user))
          history.push('/overview')
        })
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <main className="main">
      <div class="row">
        <div>
          <i className="material-icons prefix">account_circle</i>LOGIN
        </div>
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={(e) =>
                  setLoading({ ...loading, email: e.target.value })
                }
                id="email"
                type="email"
                className="validate"
              />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={(e) =>
                  setLoading({ ...loading, password: e.target.value })
                }
                id="password"
                type="password"
                className="validate"
              />
              <label for="password">Password</label>
            </div>
          </div>
        </div>
        <div>
          <a
            onClick={() => loginWithGoogle()}
            className="waves-effect waves-light btn-large blue"
          >
            Google
          </a>
          <a
            onClick={() => handleLogin()}
            className="waves-effect waves-light btn-large blue"
          >
            Login
          </a>
          <br/>
          <p>Or create a new profile</p>
          <Link to="./signup">Signup</Link>
        </div>
      </div>
    </main>
  )
}

export default Login
