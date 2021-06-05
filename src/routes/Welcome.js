import React from 'react'
import { useHistory } from 'react-router-dom'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import Welcomeimg from '../elements/Welcome.png'

function Welcome() {
  let history = useHistory()
  return (
    <div className='main '>
      <img src={Welcomeimg} className="welcomeImg" alt="welcome banner" />
      <button onClick={() => history.push('/feelings')} class='btn-floating btn-large waves-effect waves-light'>
        <i class='material-icons'>play_circle_outline</i>
      </button>
    </div>
  )
}

export default Welcome
