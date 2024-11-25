import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
   
    
    const [show, setShow] = useState(false);

    const [ videoDetails ,setVideoDetails] = useState({
        caption : "" ,
        imgUrl : "" , 
        emdedLink : ""
    })
    console.log(videoDetails);
    const handleCancel = () => setVideoDetails({caption:"",
        imgUrl:"",
        emdedLink:""
    })
    const handleClose = () => {setShow(false);
        handleCancel()
    }
    const handleShow = () => setShow(true);
    const handleAdd = async() => {
        const{caption , imgUrl , emdedLink} = videoDetails
        if(!caption || !imgUrl || !emdedLink)
        {
            toast.info('please fill the form completely')
        }
        else
        {
            if(emdedLink.startsWith('https://youtu.be/'))
            {
                let link = `https://www.youtube.com/embed/${emdedLink.slice(17,28)}`
                console.log(link);
                const result = await addVideoApi({caption,imgUrl,emdedLink:link})
                console.log(result);
                if(result.status >= 200 || result.status < 300)
                {
                    toast.success('video added successfully')
                    handleClose()
                    setAddStatus(result)
                }
                else
                {
                    toast.error('something went wrong')
                    handleCancel()

                }
            }
            else
            {
                let link = `https://www.youtube.com/embed/${emdedLink.slice(-11)}`
                console.log(link);
                const result = await addVideoApi({caption,imgUrl,emdedLink:link})
                console.log(result);
                if(result.status >= 200 || result.status < 300)
                    {
                        toast.success('video added successfully')
                        handleClose()
                        setAddStatus(result)
                    }
                    else
                    {
                        toast.error('something went wrong')
                        handleCancel()
                    }
            }
           
        }
    }
    return (
        <>
            <h5>Upload New Video <FontAwesomeIcon icon={faCloudArrowUp} className='ms-2' onClick={handleShow} /></h5>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-3' />Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>please fill the following details</h6>
                    <form className='border border-secondary p-3 rounded mt-3'>
                        <div className="mb-3">
                            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails, caption:e.target.value})} value = {videoDetails.caption}/>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Video Image' className='form-control'onChange={(e)=>setVideoDetails({...videoDetails, imgUrl:e.target.value})} value = {videoDetails.imgUrl}/>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Video Url' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails, emdedLink:e.target.value})} value = {videoDetails.emdedLink}/>
                          
                            
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleAdd}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        </>
    )
}

export default Add