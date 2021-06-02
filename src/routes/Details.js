import React, { useEffect, useState, useContext } from 'react'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import { useParams } from 'react-router'
import { UserContext } from '../App'
import { Link, useHistory } from 'react-router-dom'

function Details(props) {
  const { emotion } = useParams()
  const now = Date.now()
  const { user } = useContext(UserContext)
  const [newLog, setNewLog] = useState()
  let history = useHistory()

  useEffect(() => {
    setNewLog({ ...newLog, emotion: emotion, timeStamp: now})
  }, [emotion])

  const handleSubmit = () => {
    fetch(`https://mindsapphire-api.web.app/logs/${user.uid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLog),
    })
    .then(() => history.push('/overview'))
    .catch(err => console.log(err))
  }

  return (
    <main className="main">
      <form action="#" className="detailsForm" >
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
            <button
              onClick={() => handleSubmit()}
              className="btn-floating btn-large waves-effect waves-light blue "
            >
              <i className="material-icons">create_new_folder</i>
            </button>
          </Link>
        </div>
      </form>
    </main>
  )
}

export default Details
