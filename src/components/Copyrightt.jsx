// src/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const Copy = () => {
  return (
    <footer style={{backgroundColor:'rgb(210, 33, 39)'}} className="footer">
      <div className="footer-container">
        <div className="footer-logo">

          <img style={{width:'55px'}} src="img/icon/Mukundiconog3.png" alt="Site Logo" />
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Mukund Machine Tools. All rights reserved.
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Copy;
