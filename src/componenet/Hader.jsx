import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchResturant } from '../redux/RestaurantSlice'


function Hader() {
  const dispatch =useDispatch()
  return (
    <>
        <Navbar className="bg-dark-subtle">
        <Container>
          <Navbar.Brand href="#home">
            
           <h1 style={{fontSize:'40px',color:'black'}}>Restaurant</h1>
          </Navbar.Brand>
          <div className='d-flex align-items-center  ms-auto'>
              <input onChange={(e)=>dispatch(searchResturant(e.target.value))} className='form-control' placeholder='enter the item ' type="text" />
              <i class="fa-brands fa-searchengin "></i>
          </div>

        </Container>
      </Navbar>
    </>
  )
}

export default Hader