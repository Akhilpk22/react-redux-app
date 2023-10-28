import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../componenet/RestCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../redux/RestaurantSlice';


function Home() {

    const allresturant = useSelector((state)=>state.RestaurantSlice.allrestaurant)
    // console.log(useSelector((state)=>state.RestaurantSlice.allresturant));

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestaurants())
    },[])

  return (
    <>
        <Row className='mt-5'>

            {
                allresturant?.length>0?allresturant.map(restaurants=>(
                <Col className='px-3 py-3' sm={12} md={6} lg={4} xl={3}>
               <RestCard restaurants={restaurants} />
               </Col>
                ))
                :<p>nothing</p>
            }
        </Row>
    </>
  )
}

export default Home