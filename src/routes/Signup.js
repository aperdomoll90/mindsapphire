import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

function Signup() {
  const [newUser, setNewUser] = useState(null)
  const { user, setUser, firebaseAuth } = useContext(UserContext)
  let history = useHistory()

  const createUser = () => {
    firebaseAuth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((data) => {
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data.user))
        sendFirestore({ ...newUser, id: user.uid })
        history.push("/overview")
      })
      .catch((err) => console.log(err.message))
  }

  const sendFirestore = (myNewUser) => {
    console.log('New user', myNewUser)
    //make sure to delete console log
    fetch('https://mindsapphire-api.web.app/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewUser),
    })
  }
  return (
    <main className="main">
      <div className="row">
        <div>
          <i className="material-icons prefix">mode_edit</i>SIGNUP
        </div>
        <div className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                onChange={(e) =>
                  setNewUser({ ...newUser, firstName: e.target.value })
                }
                id="first_name"
                type="text"
                className="validate"
              />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
                id="last_name"
                type="text"
                className="validate"
              />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
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
                  setNewUser({ ...newUser, password: e.target.value })
                }
                id="password"
                type="password"
                className="validate"
              />
              <label for="password">Password</label>
            </div>
          </div>
          <div>
            <a className="waves-effect waves-light btn-large blue">Back</a>
            <button
              onClick={() => createUser()}
              className="btn-large waves-effect waves-light blue"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Signup
