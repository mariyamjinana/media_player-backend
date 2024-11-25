// import React from 'react'

import { useEffect, useState } from "react";
import { getVideoApi, updateCategoryApi } from "../services/allApi"
import Videocards from "./Videocards"

function Allvideos({addStatus,setUpdateStatus}) {

  const [deleteStatus, setDeleteStatus] = useState([])
  const [video ,setVideo] = useState([])

  const getallVideo = async() =>{
    const result = await getVideoApi()
    // console.log(result);
    setVideo(result.data)
    
  }
  // console.log(video);
  const dragOver = (e)=>
  {
    e.preventDefault()
  }
  const videoDrop = async(e)=>{
    const {videoDetails,categoryDetails} = JSON.parse(e.dataTransfer.getData("Details"))
    console.log(videoDetails,categoryDetails);
    let result = categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id)
    const reqBody = {
      category:categoryDetails.category,
      allVideos:result,
      id:categoryDetails.id

    }
    const response = await updateCategoryApi(categoryDetails.id , reqBody)
    console.log(response);
    if(response.status>=200 && response.status<300)
    {
      setUpdateStatus(response.data)
    }
    
  }
  

  useEffect(()=>{getallVideo()},[addStatus,deleteStatus])



  return (
    <>
      <h4 className="mt-5">All videos</h4>

      {video?.length>0?
      
        <div className="container-fluid mt-5" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
        <div className="row">
          {video?.map((item)=>(
            <div className="col-md-3 p-2">
            <Videocards videoDetails={item} setDeleteStatus={setDeleteStatus}/>
          </div>
          ))
          }
        </div>
      </div>

      // no videos 
      :
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="no image" className="w-100"/>
            <h5 className="text-center text-danger">No video added yet....</h5>
          </div>
        </div>
      </div> 
      
      }
    </>
  )
}

export default Allvideos