import React,{useContext } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'
function Header (){
  const { user, setUser, firebaseAuth } = useContext(UserContext)

  
  const logOut =()=>{
    firebaseAuth.signOut().then(() => {
      setUser(null);
      localStorage.setItem("user", null)
      console.log('Sign-out successful.')
    })
    .catch((err) => console.log(err.message))
  }
    return(
        <nav class="nav-extended nav">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Mind Sapphire</a>
      <ul class="right hide-on-med-and-down">
        {!user ? (<li><Link to="/login"><i class="material-icons prefix">account_circle</i></Link></li>): (<li><i onClick={() => logOut()} class="material-icons prefix">person_outline</i></li>)}
        <li><Link to="/"><i class="material-icons prefix">home</i></Link></li>
        <li><Link to="/singleview">SingleView</Link></li>
        <li><Link to="/overview">overview</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Header