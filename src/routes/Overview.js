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
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(false)
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
    <div className='main'>
      <div className='overviewCalendarField'>
        <div className='overviewCalendarField-titleArea'>Overview of your Logs</div>
        <div className='overviewCalendarField-calendar'>
          {!userOverview ? (
            <p>Loading...</p>
          ) : (
            userOverview.map(log => {
              const settings = log.emotion ? moods[log.emotion] : moods.default
              return (
                <div
                  onClick={() => {
                    setModalContent({ ...log, setting: settings })
                    setShowModal(true)
                  }}
                  className='overviewCalendarField-emoCard'
                  style={{ backgroundColor: settings.bgColor, color: settings.color }}
                  key={log.comment}>
                  {log.emotion}
                </div>
              )
            })
          )}
          {modalContent && (
            <Modal
              key={modalContent.timeStamp}
              actions={[
                <Button
                  onClick={() => {
                    setModalContent(null)
                    setShowModal(false)
                  }}
                  modal='close'
                  node='button'
                  className='btn-floating btn-medium waves-effect waves-light buttonColor '>
                  <i className='material-icons'>close</i>
                </Button>,
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header={`You were feeling ${modalContent.emotion} ${modalContent.rating}/10`}
              id='Modal-0'
              open={showModal}
              options={{ dismissible: true, endingTop: '0%', inDuration: 250, onCloseEnd: null, onCloseStart: null, onOpenEnd: null, onOpenStart: null, opacity: 0.6, outDuration: 250, preventScrolling: true, startingTop: '0%' }}>
              <div class='modal-grid'>
                <div className='modal-progressBar '></div>
                <div className='modal-comment'>
                  <p>"{modalContent.comment}"</p>
                </div>
                <div className='modal-icon'>
                  <img src={modalContent.setting.icon} alt='image describing the emotion logged' />
                </div>
              </div>
            </Modal>
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
