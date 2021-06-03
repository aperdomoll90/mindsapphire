import React from 'react'
import { Link } from 'react-router-dom'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import Welcomeimg from '../elements/Welcome.png'

function Welcome() {
  return (
    <div className="pickerField">
      <img src={Welcomeimg} className="welcomeImg" alt="welcome banner" />
      <Link to="./feelings">
        <button class="btn-floating btn-large waves-effect waves-light buttonColor">
          <i class="material-icons">play_circle_outline</i>
        </button>
      </Link>
    </div>
  )
}

export default Welcome
