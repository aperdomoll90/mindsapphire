import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { UserContext } from '../App'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

function Signup() {
  const [newUser, setNewUser] = useState(null)
  const [userPass, setUserPass] =useState(null)
  const { setUser, firebaseAuth } = useContext(UserContext)
  let history = useHistory()

  const createUser = () => {
    firebaseAuth
      .createUserWithEmailAndPassword(newUser.email, userPass.password)
      .then((data) => {
        setUser(data.user)
        localStorage.setItem('user', JSON.stringify(data.user))
        sendFirestore({ ...newUser, id: data.user.uid })
      })
      .catch((err) => console.log(err.message))
  }

  const sendFirestore = (myNewUser) => {
    console.log('Send New user to Firestore: ', myNewUser)
    // fetch(`https://localhost:5000/users/${myNewUser.id}`, {
    fetch(`https://mindsapphire-api.web.app/users/${myNewUser.id}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewUser),
    })
    .then(()=> {
      initLog(myNewUser)
    })
    .catch(err => console.log(err))
  }
  const initLog =(myNewUser)=>{
    console.log('Add Logs to New user: ', myNewUser)
    // fetch(`https://localhost:5000/logs/${myNewUser.id}`, {
    fetch(`https://mindsapphire-api.web.app/logs/${myNewUser.id}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({logs: []}),
    })
    .then(() => history.push('/feelings'))
    .catch(err => console.log(err))
    
  }

  
  return (
    <div className="pickerField">
      <div className='row pickerField-loginField'>
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
                  setUserPass({ ...userPass, password: e.target.value })
                }
                id="password"
                type="password"
                className="validate"
              />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="signUpFooter" >
            <div className="signUpFooter-signUpButtonArea">
            <button onClick={createUser} className="btn-large waves-effect waves-light blue " type="submit" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
            </div>
            <div className="signUpFooter-signTextArea">
            <p>Already have an account? then just go to</p>
            <Link to="./login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
