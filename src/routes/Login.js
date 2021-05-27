import React from 'react'
import '.././styles/_app.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
function Login (){
    return(
        <main className="main">
<div class="row">
        {/* <div>
          <i class="material-icons prefix">account_circle</i>
        </div> */}
        <div>
          <i class="material-icons prefix">account_circle</i>LOGIN
        </div>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
        </form>
        <div> 
        <a class="waves-effect waves-light btn-large blue">Back</a>
        <a class="waves-effect waves-light btn-large blue">Login</a>
    </div>
      </div>
        </main>
    )
}

export default Login