import React, { useState } from 'react'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

function Signup() {
  const [newUser, setNewUser] = useState(null)
  const [first_name, setFirst_name] = useState(null)
  const [last_name, setLast_name] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleSubmit = () => {
    const newUser = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    }
  }
  console.log(newUser)
  return (
    <main className="main">
      <div class="row">
        <div>
          <i class="material-icons prefix">mode_edit</i>SIGNUP
        </div>
        <form class="col s12" onSubmit={handleSubmit}>
          <div class="row">
            <div class="input-field col s6">
              <input value={first_name} onChange={(e) => setFirst_name(e.target.value)} id="first_name" type="text" class="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input value={last_name} onChange={(e) => setLast_name(e.target.value)} id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div>
            <a class="waves-effect waves-light btn-large blue">Back</a>
            <button onClick={() => handleSubmit()} className="btn-large waves-effect waves-light blue" type="submit" name="action" >
                Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}


export default Signup
