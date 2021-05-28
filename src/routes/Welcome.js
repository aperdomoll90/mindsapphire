import React from 'react'
import { Link } from 'react-router-dom'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import Welcomeimg from '../elements/Welcome.png'

function Welcome() {
  return (
    <main className="main">
      <img src={Welcomeimg} className="welcomeImg" alt="welcome banner" />
      <Link to="./feelings">
        <a class="btn-floating btn-large waves-effect waves-light blue">
          <i class="material-icons">play_circle_outline</i>
        </a>
      </Link>
    </main>
  )
}

export default Welcome
