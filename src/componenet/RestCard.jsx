import React from 'react'
import { Card } from 'react-bootstrap'


function RestCard({restaurants}) {
  return (
    <>
    <Card >
      <Card.Img style={{height:'350px'}} className='rounded p-3' variant="top" src={restaurants.photograph} />
      <Card.Body>
        <Card.Title>{restaurants.name}</Card.Title>
        <Card.Text>
          <p>
          cuisine: {restaurants.cuisine_type}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default RestCard