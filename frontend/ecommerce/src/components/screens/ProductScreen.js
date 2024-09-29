import React, { useEffect, useState } from "react";
import { Link,useParams } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Button,Card,Container} from 'react-bootstrap';
import Rating from '../Rating';
import axios from "axios";

function ProductScreen({params}) {

const {id}=useParams()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchproduct() {
      const { data } = await axios.get(`/api/product/${id}`);
      setProduct(data);
    }
    fetchproduct();
  }, []);

  return (
    <Container>
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.productname} fluid />
        </Col>

      <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.productname}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numreviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price} Rs </ListGroup.Item>
            <ListGroup.Item>Brand: {product.productbrand} </ListGroup.Item>

            <ListGroup.Item>Description: {product.productinfo}</ListGroup.Item>
          </ListGroup>
    </Col>
    </Row>
    </div>
    </Container>
  )
}

export default ProductScreen;