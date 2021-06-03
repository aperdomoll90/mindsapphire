import React, { useState, useContext, useEffect } from 'react'
import { Modal, Button } from 'react-materialize'
import { UserContext } from '../App'
import { useHistory } from 'react-router-dom'

import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

function Overview() {
  const [userOverview, setUserOverview] = useState(null)
  const { user } = useContext(UserContext)
  let history = useHistory()

  const getColor = emotion => {
    switch (emotion) {
      case 'happy':
        return 'yellow'
      case 'angry':
        return 'red'
      case 'anxious':
        return 'green'
      case 'sad':
        return 'blue'
      default:
        return 'white'
    }
  }

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
              const bgColor = getColor(log.emotion)
              return (
                <Modal
                  actions={[
                    <Button flat modal='close' node='button' waves='green'>
                      {' '}
                      Close
                    </Button>,
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header='You were feeling'
                  id='Modal-0'
                  open={false}
                  options={{ dismissible: true, endingTop: '10%', inDuration: 250, onCloseEnd: null, onCloseStart: null, onOpenEnd: null, onOpenStart: null, opacity: 0.5, outDuration: 250, preventScrolling: true, startingTop: '4%' }}
                  trigger={
                    <div className='overviewCalendarField-emoCard' style={{ backgroundColor: bgColor, color: bgColor !== 'yellow' ? 'white' : 'black' }} key={log.comment}>
                      {log.emotion}
                    </div>
                  }>
                  <p>{log.emotion}</p>
                  <p>{log.comment}</p>
                </Modal>
              )
            })
          )}
        </div>
      </div>
      <div>
          <button onClick={() => history.push('/feelings')} className='btn-floating btn-large waves-effect waves-light blue '>
            <i className='material-icons'>local_hospital</i>
          </button>
        </div>
    </div>
  )
}

export default Overview
