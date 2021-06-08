import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'
import tree from '../elements/tree.png'
import { Icon, Button, SideNav, SideNavItem } from 'react-materialize'
import audio from '../elements/wind.mp3'

function Header() {
  const { user, setUser, firebaseAuth } = useContext(UserContext)
  const sound = new Audio(audio)

  const logOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        setUser(null)
        localStorage.setItem('user', null)
        console.log('Sign-out successful.')
      })
      .catch(err => console.log(err.message))
  }
  return (
    <div>
       <div className='nav-musicButtonArea'>
              <div onClick={() => {sound.play()}}>
                <i className='material-icons'>music_note</i>
              </div>
              <div onClick={() => {sound.pause()}}>
                <i className='material-icons'>volume_off</i>{' '}
              </div>
            </div>
      <SideNav
        id='SideNav-10'
        options={{ draggable: false }}
        trigger={
            <Button className='btn-floating btn-large waves-effect waves-light nav-button' node='button'>
              <i className='material-icons'>view_headline</i>
            </Button>
        }>
        <SideNavItem
          user={{
            background: tree,
            email: 'Welcome',
          }}
          userView
        />

        {!user ? (
          <Link to='/login'>
            <SideNavItem icon={<Icon>account_circle</Icon>}> Login</SideNavItem>
          </Link>
        ) : (
          <p onClick={() => logOut()}>
            <SideNavItem icon={<Icon>person_outline</Icon>}>Log Out</SideNavItem>
          </p>
        )}

        <Link to='/'>
          <SideNavItem icon={<Icon>home</Icon>}>Home</SideNavItem>
        </Link>
        <Link to='/overview'>
          <SideNavItem icon={<Icon>home</Icon>}>Overview </SideNavItem>
        </Link>
      </SideNav>
    </div>
  )
}

export default Header
