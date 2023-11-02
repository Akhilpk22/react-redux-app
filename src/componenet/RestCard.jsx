import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function RestCard({restaurants}) {
  
  return (
    <>
    <Link to={`/CartDisplay/${restaurants.id}`}>
      <Card  >
        <Card.Img style={{height:'350px'}} className='rounded p-3' variant="top" src={restaurants.photograph} />
        <Card.Body>
          <Card.Title>{restaurants.name}</Card.Title>
          <Card.Text>
            <p>
            cuisine: {restaurants.cuisine_type}
            </p>
            <p>{restaurants.neighborhood}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
    </>
  )
}

export default RestCard