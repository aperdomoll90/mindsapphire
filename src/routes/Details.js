import React from 'react'
import '.././styles/_app.scss'
import params from './Feelings'
import { useParams } from 'react-router'

function Details(props) {
  const {emotion} = useParams()

  console.log(emotion)
  return (
    <main className="main">
      
      <p>Details {emotion}</p>
    </main>
  )
}

export default Details
