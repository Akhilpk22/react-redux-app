import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../componenet/RestCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../redux/RestaurantSlice';


function Home() {

    const {allrestaurant,loading,error} = useSelector((state)=>state.RestaurantSlice);
    // console.log(useSelector((state)=>state.RestaurantSlice.allresturant));

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestaurants())
    },[])

  return (
    <>
        <div className='d-flex justify-content-center align-items-center '>
            {
                loading &&  
                <div>
                    <h1 className='text-info'>loading </h1>
                </div>
                
                
            }

        </div>
        <Row className='mt-5'>
            {
                allrestaurant?.length>0?allrestaurant.map(restaurants=>(
                <Col className='px-3 py-3' sm={12} md={6} lg={4} xl={3}>
               <RestCard restaurants={restaurants} />
               </Col>
                ))
                :(
                    <p>nothing to display</p>
                )
            }
        </Row>
    </>
  )
}

export default Home