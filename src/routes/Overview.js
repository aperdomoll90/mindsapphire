import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../App'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
function Overview() {
  const [userOverview, setUserOverview] = useState(true)
  const { user } = useContext(UserContext)
  useEffect(() => {
    if(user){
      fetch(`https://todo-bc-api.web.app/logs/${user.uid}`)
        .then(res => res.json())
        .then(data => setUserOverview(data))
        .catch(err => console.log(err))
    } else {
      setUserOverview([])
    }
  }, [user])
  return (
    <main className="main">
      <p>Overview </p>
    </main>
  )
}

export default Overview
