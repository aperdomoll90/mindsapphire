import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../App'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
function Overview() {
  const [userOverview, setUserOverview] = useState(true)
  const { user } = useContext(UserContext)
  // useEffect(() => {
  //   if(user){
  //     fetch(`https://mindsapphire-api.web.app/users/${user.uid}`)
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //       .catch(err => console.log(err))
  //   } else {
  //     setUserOverview([])
  //   }
  // }, [user])

  useEffect(()=>{
    fetch(`https://mindsapphire-api.web.app/logs/${user.uid}`)
    .then(response => response.json())
    .then(data => console.log('user data',data))
    .then(data => setUserOverview(data))
    .then(data => console.log('userOverview',data.emotion))
    .catch(err =>console.log(err))
},[])
  return (
    <main className="main">
      <p>Overview </p>
    </main>
  )
}

export default Overview
