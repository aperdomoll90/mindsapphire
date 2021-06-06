import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import Welcomeimg from '../elements/Welcome.png'

function Welcome() {
  let history = useHistory()
  return (
    <div className='main '>
      <div className='animationField'>
        <div className='startButton'></div>
        <div className='cloud'>
          <div className='cloud-circle'></div>
          <div className='cloud-circle'></div>
          <div className='cloud-circle'></div>
          <div className='cloud-circle'></div>
          <div className='cloud-base'></div>
        </div>
        <div className='cloudRight'>
          <div className='cloudRight-circle'></div>
          <div className='cloudRight-circle'></div>
          <div className='cloudRight-circle'></div>
          <div className='cloudRight-circle'></div>
          <div className='cloudRight-base'></div>
        </div>
        <div className='grassField'>
          <div className='grassField-base'></div>
        </div>
        <div className='treeField'>
          <div className='treeField-circle'></div>
          <div className='treeField-roots'></div>
          <div className='treeField-branch'></div>
          <div className='treeField-trunk'></div>
          <div className='canopy'>
            <div className='canopy-circle'></div>
            <div className='canopy-circle'></div>
            <div className='canopy-circle'></div>
            <div className='canopy-circle'></div>
            <div className='canopy-circle'></div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Welcome
