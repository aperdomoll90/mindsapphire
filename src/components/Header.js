import React,{useContext } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'
import logo from '../elements/favicon.ico'
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
        <nav className="nav-extended nav">
    <div className="nav-wrapper">
      <img src={logo} alt="blue sapphire logo"/>
      <p className="brand-logo">Mind Sapphire</p>
      <ul className="right hide-on-med-and-down">
        {!user ? (<li><Link to="/login"><i className="material-icons prefix">account_circle</i></Link></li>): (<li><i onClick={() => logOut()} className="material-icons prefix">person_outline</i></li>)}
        <li><Link to="/"><i className="material-icons prefix">home</i></Link></li>
        <li><Link to="/overview">Overview</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Header