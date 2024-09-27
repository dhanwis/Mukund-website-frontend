import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BASE_URL}/product/${id}`)
      .then(response => {
        console.log("productbyid", response);
        setProduct(response.data);
        setSelectedImage(response.data.image[0]); // Set the first image as the selected image by default
      })
      .catch(error => {
        console.log('error fetching data', error);
      });
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the image filename directly
  };

  return (
    <Container>
        <br/>
        <br/>
      <Row>
        <Col md={6} className="text-center mb-3">
          {product && (
            <Image
              src={`${BASE_URL}/uploads/${selectedImage}`} 
              alt="Selected"
              fluid
              style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }} 
            />
          )}
        </Col>
        <Col md={6}>
          {product && (
            <>
            <br/>
              <h2 style={{color:'rgb(210, 33, 39)'}}>{product.productname}</h2>
              <p className='fw-bold' style={{whiteSpace:'pre-wrap'}}>{product.description}</p>
            </>
          )}
        </Col>
      </Row>
      <Row className="mt-4">
        {product && product.image.map((image, index) => (
          <Col xs={3} key={index} className="text-center mb-4">
            <Image
              src={`${BASE_URL}/uploads/${image}`}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(image)} 
              thumbnail
              className={`img-fluid ${selectedImage === image ? 'border border-warning' : ''}`} 
              style={{ cursor: 'pointer', maxHeight: '100px', objectFit: 'cover' }} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductDetail;
