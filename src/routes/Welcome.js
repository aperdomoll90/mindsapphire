import react from 'react'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import '.././styles/_app.scss'
import Welcomeimg from '../elements/Welcome.png'

function Welcome() {
  return (
    <main className="main">

      <img src={Welcomeimg} className="welcomeImg"/>
      <Link to="./feelings"><a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">Go!</i></a></Link>
    </main>
  )
}

export default Welcome
