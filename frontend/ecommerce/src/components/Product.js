import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating';
import { Link } from 'react-router-dom';


function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} style={{ width: '100%', height: '200px' }}/>
      </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`} className='text-dark'>
        <Card.Title as="h3">
          {product.productname}
        </Card.Title>
      </Link>
      <Card.Text as='h6'>
        {product.price} Rs
      </Card.Text>
      <Rating value={product.rating} 
              text={`from ${product.numreviews} reviews`} color={'yellow'} />
      </Card.Body>
    </Card>
  )
}

export default Product;