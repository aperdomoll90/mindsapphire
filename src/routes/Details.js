import React, { useEffect, useState } from 'react'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function Details(props) {
  const { emotion } = useParams()
  const [newLog, setNewLog] = useState()


  const handleSubmit = () => {
    setNewLog({ ...newLog, emotion: emotion })
    console.log('New log', myNewUser)
    // fetch(`https://mindsapphire-api.web.app/logs`, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newLog),
    // })
  }

  return (
    <main className="main">
      <form action="#" className="detailsForm">
        <p className="detailsForm-title">How {emotion} are you feeling?</p>
        <p className="range-field detailsForm-selector">
          <input
            onChange={(e) => setNewLog({ ...newLog, rating: e.target.value })}
            type="range"
            id="test5"
            min="0"
            max="10"
          />
        </p>
        <p className="detailsForm-descTitle">What is making you {emotion}?</p>
        <div className="row detailsForm-textArea">
          <div className="input-field col s12 ">
            <i className="material-icons prefix">mode_edit</i>
            <textarea
              onChange={(e) =>
                setNewLog({ ...newLog, comment: e.target.value })
              }
              id="icon_prefix2"
              className="materialize-textarea"
              rows="20"
            ></textarea>
            <label for="icon_prefix2">Comment here</label>
          </div>
        </div>
        <div classNameName="detailsForm-buttonArea">
          <Link to="./feelings">
            <a
              onClick={() => handleSubmit()}
              className="btn-floating btn-large waves-effect waves-light blue "
            >
              <i className="material-icons">create_new_folder</i>
            </a>
          </Link>
        </div>
      </form>
    </main>
  )
}

export default Details
