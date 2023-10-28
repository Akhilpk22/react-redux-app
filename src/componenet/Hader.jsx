import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Hader() {
  return (
    <>
        <Navbar className="bg-dark-subtle">
        <Container>
          <Navbar.Brand href="#home">
            
           <h1 style={{fontSize:'40px',color:'black'}}>Restaurant</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Hader