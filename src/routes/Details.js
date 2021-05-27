import React, { useState } from 'react'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import params from './Feelings'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function Details(props) {
  const { emotion } = useParams()
  const [log,setLog]=useState(
    {
      id:"",
      date:"",
      emotion:{emotion},
      rating:"",
      comment:""
    }
  )

  console.log(emotion)
  return (
    <main className="main">
      <form action="#" className="detailsForm">
        <p className="detailsForm-title">How {emotion} are you feeling?</p>
        <p className="range-field detailsForm-selector">
        <i class="material-icons prefix">face</i>
          <input type="range" id="test5" min="0" max="10" />
        </p>
        <p className="detailsForm-descTitle">What is making you {emotion}?</p>
        <div class="row detailsForm-textArea">
          <div class="input-field col s12 ">
          <i class="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix2" class="materialize-textarea" rows="20"></textarea>
            <label for="icon_prefix2">Comment here</label>
          </div>
        </div>
        <div className="detailsForm-buttonArea">
        <Link to="./feelings"><a class="btn-floating btn-large waves-effect waves-light blue "><i class="material-icons">backspace</i></a></Link>
        <Link to="./feelings"><a class="btn-floating btn-large waves-effect waves-light blue "><i class="material-icons">save</i></a></Link>
        </div>
        </form>
    </main>
  )
}

export default Details
