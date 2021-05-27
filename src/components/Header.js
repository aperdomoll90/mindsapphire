import React from 'react'
import { Link } from 'react-router-dom'
function Header (){
    return(
        <nav class="nav-extended nav">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Mind Sapphire</a>
      <ul class="right hide-on-med-and-down">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/singleview">SingleView</Link></li>
        <li><Link to="/overview">overview</Link></li>
        <li><Link to="/details">details</Link></li>
        <li><Link to="/feelings">feelings</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Header