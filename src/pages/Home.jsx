import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'

function Home() {
  const [addStatus , setAddStatus ] = useState({})
  const [updateStatus ,setUpdateStatus] = useState([])

  return (
    <>
      <div className='container d-flex justify-content-between'>
        <Add setAddStatus={setAddStatus}/>
        <Link to={'/watchhistory'} style={{ textDecoration: 'none' }}><h5>Watch History <FontAwesomeIcon icon={faClockRotateLeft} className='me-3' /></h5></Link>
      </div>
      <div className='container-fluid p-4'>
        <div className="row">
          <div className="col-md-9">
            <Allvideos addStatus={addStatus} setUpdateStatus={setUpdateStatus}/>
          </div>
          <div className="col-md-3">
            <Category updateStatus={updateStatus}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home