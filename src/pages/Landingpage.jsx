import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landingpage() {
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center align-items-center mt-4'>
          <Col sm={12} md={6}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id eaque dolor asperiores consectetur quisquam sapiente cumque atque ullam quam. Velit asperiores suscipit expedita sit, quod dolor quibusdam nobis cupiditate.</p>
            <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
          </Col>
          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKVYn8mgqSf0Fb0AXsuHTdnJ8D_rrj9nT3g&s" alt="No image" className='w-100' />
          </Col>
        </Row>
      </Container>
      <Container className='p-5'>
        <h4 className='text-center mt-5'>FEATURES</h4>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className='mt-4'>
              <Col sm={12} md={4} className=''>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://cdn.dribbble.com/users/1036808/screenshots/7143535/media/c7a511fc2050f7b078812129d61d17e3.gif" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4} className=''>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/789753588663340202/3A577E4B5AED98E18C8193DB6AE2A9BDB8F0794B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4} className=''>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://cdn.dribbble.com/users/1036808/screenshots/7143535/media/c7a511fc2050f7b078812129d61d17e3.gif" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>

        </Row>
      </Container>
      <Container className='border border-light border-5'>
        <Row className='mt-4 p-3'>
          <Col md={6} sm={12}>
            <h4 className='text-warning'>Simple fast and Powerful</h4>
            <p> <span style={{ fontSize: '25px' }}>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci odio illum, ad repudiandae animi nisi vovelit ab. Molestias, excepturi adipisci.</p>
            <p> <span style={{ fontSize: '25px' }}>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci odio illum, ad repudiandae animi nisi vovelit ab. Molestias, excepturi adipisci.</p>
            <p> <span style={{ fontSize: '25px' }}>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci odio illum, ad repudiandae animi nisi vovelit ab. Molestias, excepturi adipisci.</p>
          </Col>
          <Col md={6} sm={12} className=''>
            <iframe width="98%" height="315" src="https://www.youtube.com/embed/0Z3I8TSUwLI?si=JrOlZ2lliVpC2RdK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landingpage