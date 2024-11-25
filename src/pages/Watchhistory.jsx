import React from 'react'
import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi';


function Watchhistory() {

  const [AllHisVideo, setAllHisVideo] = useState([])
  const [deleteStatus,setDeleteStatus] = useState({})

  const getAllVideo = async () => {
    const result = await getAllVideoHistoryApi()
    console.log(result);
    
    setAllHisVideo(result.data);
  }
console.log(AllHisVideo);

const handleDelete = async(id)=>{
  const result = await deleteHistoryVideoApi(id)
  console.log(result);
  if(result.status>=200 && result.status<300){
    setDeleteStatus(result)
  }
  else{
    toast.error('something went wrong')
  }
  
}
useEffect(()=>{
  getAllVideo()
},[deleteStatus])

  return (
    <>
      <div className="d-flex justify-content-between px-5 mt-5" >
        <h4>Watch history</h4>
        <Link to={'/Home'} style={{ textDecoration: 'none' }}><h4> <FontAwesomeIcon icon={faHouse} /> <span className='d-md-inline d-none'>Back home</span> </h4></Link>
      </div>

      {AllHisVideo?.length > 0 ? <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10 table-responsive'>
            <table className='table table-bordered mt-5'>
              <thead>
                <tr>
                  <th className='text-center'>#</th>
                  <th className='text-center'>Caption</th>
                  <th className='text-center'>Url</th>
                  <th className='text-center'>Time stamp</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
              {AllHisVideo?.map((videoItem , index) => (
                  <tr>
                    <td className='text-center'>{index+1}</td>
                    <td className='text-center'>{videoItem?.caption}</td>
                    <td className='text-center'><Link to={videoItem?.url}>{videoItem?.url}</Link></td>
                    <td className='text-center'>{videoItem?.timeStamp}</td>
                    <td className='text-center'>
                      <button onClick={()=>handleDelete(videoItem?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
        :
        <h3 className='text-center text-danger'>No Watch History</h3>}
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Watchhistory