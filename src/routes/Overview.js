import React, { useState, useContext, useEffect } from 'react'
import { Modal, Button } from 'react-materialize'
import { UserContext } from '../App'
import { useHistory } from 'react-router-dom'

import moods from '../elements/emoSettings'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

function Overview() {
  const [userOverview, setUserOverview] = useState(null)
  const { user } = useContext(UserContext)
  let history = useHistory()

  useEffect(() => {
    if (user) {
      fetch(`https://mindsapphire-api.web.app/logs/${user.uid}`)
        .then(res => res.json())
        .then(data => setUserOverview(data.logs))
        .catch(err => console.log(err))
    } else {
      setUserOverview([])
    }
  }, [])

  return (
    <div className='pickerField'>
      <div className='overviewCalendarField'>
        <div className='overviewCalendarField-titleArea'>Overview Table </div>
        <div className='overviewCalendarField-calendar'>
          {!userOverview ? (
            <p>Loading...</p>
          ) : (
            userOverview.map(log => {
              const settings = (log.emotion) ? moods[log.emotion] : moods.default
              return (
                <Modal
                  key={log.timeStamp}
                  actions={[
                    <Button flat modal='close' node='button' className='btn-floating btn-medium waves-effect waves-light buttonColor '>
                      <i className='material-icons'>close</i>
                    </Button>,
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header={`You were feeling ${log.emotion}`}
                  id='Modal-0'
                  open={false}
                  options={{ dismissible: true, endingTop: '0%', inDuration: 250, onCloseEnd: null, onCloseStart: null, onOpenEnd: null, onOpenStart: null, opacity: 0.6, outDuration: 250, preventScrolling: true, startingTop: '0%' }}
                  trigger={
                    <div className='overviewCalendarField-emoCard' style={{ backgroundColor: settings.bgColor, color: settings.color }} key={log.comment}>
                      {log.emotion}
                    </div>
                  }>
                  <div class='modal-stuff'>
                    <p>{log.rating}</p>
                    <p>"{log.comment}"</p>
                  </div>
                </Modal>
              )
            })
          )}
        </div>
      </div>
      <div>
        <button onClick={() => history.push('/feelings')} className='btn-floating btn-large waves-effect waves-light buttonColor  modal-button'>
          <i className='material-icons'>local_hospital</i>
        </button>
      </div>
    </div>
  )
}

export default Overview
