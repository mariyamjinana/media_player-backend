import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faTrash } from '@fortawesome/free-solid-svg-icons'
import Videocards from './Videocards'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category(updateStatus) {
  const [allCategory, setAllCategory] = useState([]);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [CategoryStatus , setCategoryStatus] = useState({})
  const [deleteStatus,setDeleteCategory] = useState([])
  const [categoryUpdateStatus , setCategoryUpdatStatus] =useState({})
  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);
  const handleCancel = () => {
    setCategoryName("")
  }
  const handleAdd = async () => {
    if (!categoryName) {
      toast.info('Please fill the form')
    }
    else {
      const reqBody = {
        category: categoryName,
        allVideos: []
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('category added successfully')
        handleClose()
        setCategoryStatus(result)
      }
      else {
        toast.error('something went wrong')
      }
    }
  }

  const getAllCategory = async () => {
    const result = await getCategoryApi()
    // {    console.log(result);}
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data)
    }

  }
  console.log(allCategory);

  const deleteCategory = async (id)=>{
   const result = await deleteCategoryApi(id)
   if(result.status>=200 && result.status<300)
   {
    setDeleteCategory(result)
   }
   else
   {
    toast.error('something went wrong')
   }

  }

  const videoOver = (e)=>{
    //prevent reload
    e.preventDefault()
  }

  const videoDrop = async (e,categoryDetails)=>{
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    if(categoryDetails.allVideos.find((item)=>item.id==videoDetails.id))
    {
      alert('video is already in the same category')
    }
    else
    {
       categoryDetails.allVideos.push(videoDetails)
       console.log(categoryDetails);
       const result = await updateCategoryApi(categoryDetails.id , categoryDetails)
       console.log(result);
       if(result.status>=200 && result.status<300)
       {
        setCategoryStatus(result)
       }
    }
   
    
  }

  const videoDrag = (e,videoDetails,categoryDetails)=>{
    console.log(videoDetails , categoryDetails);

    const details = {
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("Details",JSON.stringify(details))
  }


  useEffect(() => {
    getAllCategory()
  }, [CategoryStatus,deleteStatus,categoryUpdateStatus,updateStatus])

  console.log(categoryName);

  return (
    <>
      <h5 className='mt-5'>Category</h5>
      <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>
      {allCategory?.length > 0 ?
        allCategory?.map((item) => (
          <div className="border border-secondary p-3 rounded mt-4" droppable onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e,item)}>

          <div className="d-flex justify-content-between">
            <h6>{item.category}</h6>
            <button className="btn btn-danger" onClick={()=>deleteCategory(item?.id)}><FontAwesomeIcon icon={faTrash} /></button>
          </div>

          {item?.allVideos.length>0 &&
            item?.allVideos.map((video)=>(
             <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
               <Videocards videoDetails={video} present = {true}/>
             </div>
            ))
           }
        </div>
        ))

        :
        <h5 className='text-center text-danger mt-4'>No category added yet.....</h5>}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border-dark border'>
            <input type="text" placeholder='Enter Category Name' className='form-control' onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Category