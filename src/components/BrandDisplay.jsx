import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProductDisplay = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div className="container product-wrapper">
      <div className="row product-container">
       
        <div className="col-12 col-md-6 p-0 mb-3 pe-md-2">
          <div className="d-flex flex-column flex-md-row product-card">
            <img
              src="img/icon/mumatul.jpeg"
              alt="Mumatul Peeling Knives"
              className="product-image"
              style={{ width: '300px', height: '200px' }}
            />
            <div className="product-content">
              <h2 className="product-title ms-3">Mumatul Peeling Knives</h2>
              <p className="product-description ms-3">
                Manufactured under uncompromised metallurgical & meteorological quality control.<br />
                * Excellent edge holding property due to high tungsten inlay.<br />
                * No teething or chipping problem.<br />
                * Long interval between regrinds hence long durable life.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col-12 col-md-6 p-0 mb-3 ps-md-2">
          <div className="d-flex flex-column flex-md-row product-card">
            <img
              src="img/icon/our-brand1.png"
              alt="Mumatul Circular Saw Blade"
              className="product-image mb-4"
              style={{ width: '300px', height: '200px' }}
            />
            <div className="product-content">
              <h2 className="product-title ms-3">Mumatul Circular Saw Blade</h2>
              <p className="product-description ms-3">
                ● For cutting wood, plywood, block board, flush door, chipboard, laminates, plastics, steel, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
