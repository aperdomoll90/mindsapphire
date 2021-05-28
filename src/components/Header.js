import React from 'react'
import { Link } from 'react-router-dom'
function Header (){
    return(
        <nav class="nav-extended nav">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Mind Sapphire</a>
      <ul class="right hide-on-med-and-down">
        <li><Link to="/login"><i class="material-icons prefix">account_circle</i></Link></li>
        <li><Link to="/signup"><i class="material-icons prefix">person_add</i></Link></li>
        <li><Link to="/"><i class="material-icons prefix">home</i></Link></li>
        <li><Link to="/singleview">SingleView</Link></li>
        <li><Link to="/overview">overview</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Header