import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="py-5 px-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h4 className="text-warning"> <FontAwesomeIcon icon={faVideo} className='px-2' />media player</h4>
            <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum veniam quam porro veritatis saepe ducimus temporibus ullam perferendis iste corporis. Rerum delectus est vitae, magni porro esse placeat molestiae architecto?</p>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h4>Links</h4>
              <Link to={'/'}><p className='mt-3'>Landing Page</p></Link>
              <Link to={'/Home'}><p>Home Page</p></Link>
              <Link to={'/Watchhistory'}><p>Watch History</p></Link>
            </div>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h4>Guides</h4>
              <p className='mt-3'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>
          <div className="col-md-4 px-md-5 mt-md-0 mt-4">
            <h4>Contact Us</h4>
            <div className="mt-3 d-flex">
              <input type="text" placeholder='email id' className='form-control' />
              <button className='btn btn-warning ms-3'>Suscribe</button>
            </div>
            <div>
              <div className='d-flex justify-content-between m-3'>
                <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
                <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
                <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
                <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer