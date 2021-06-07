import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import leftSnow from '../elements/leftSnow.png'

function Welcome() {
  let history = useHistory()
  return (
    <div className='main '>
      <section className='animationField'>
        <div className='startButton'></div>
        <section className='FloatingBase'>
          <div className='FloatingBase-field'></div>
          {/* <div className='baseCorner'></div>
          <div className='baseCorner'></div>
          <div className='baseCorner'></div> */}
          <section className='mountainRange'>
            <section className='lefMountain'>
              <div className='lefMountain-half'></div>
              <div className='lefMountain-mountain'></div>
              <img src={leftSnow} className='lefMountain-snow' />
            </section>
            <div className="middleBush">
              <div className='middleBush-circle'></div>
              <div className='middleBush-circle'></div>
              <div className='middleBush-circle'></div>
              <div className='middleBush-circle'></div>
              <div className='middleBush-base'></div>
            </div>
            <div className="leftBush">
              <div className='leftBush-circle'></div>
              <div className='leftBush-circle'></div>
              <div className='leftBush-circle'></div>
              <div className='leftBush-circle'></div>
              <div className='leftBush-base'></div>
            </div>

            <div className="pine">
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-trunk"></div>
            </div>
            <div className="rightPine">
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-foliage"></div>
            <div className="pine-trunk"></div>
            </div>

            <section className='middleMountain'>
              <div className='middleMountain-half'></div>
              <div className='middleMountain-mountain'></div>
              <img src={leftSnow} className='middleMountain-snow' />
            </section>
            <section className='rightMountain'>
              <div className='rightMountain-half'></div>
              <div className='rightMountain-mountain'></div>
              <img src={leftSnow} className='rightMountain-snow' />
            </section>

            <section className='cloud'>
              <div className='cloud-circle'></div>
              <div className='cloud-circle'></div>
              <div className='cloud-circle'></div>
              <div className='cloud-circle'></div>
              <div className='cloud-base'></div>
            </section>
            <section className='cloudRight'>
              <div className='cloudRight-circle'></div>
              <div className='cloudRight-circle'></div>
              <div className='cloudRight-circle'></div>
              <div className='cloudRight-circle'></div>
              <div className='cloudRight-base'></div>
            </section>
          </section>
          <section className='treeField'>
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
          </section>
        </section>
      </section>
    </div>
  )
}

export default Welcome
