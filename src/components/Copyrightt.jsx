// src/Footer.js
import React from 'react';
import './Footer.css';
import './Footer.css';


const Copy = () => {
  return (
    <footer  style={{backgroundColor:'rgb(210, 33, 39)'}} className="footer">
      <div className="footer-container">
        <div className="footer-logo">

          <img style={{width:'55px'}} src="img/icon/Mukundiconog3.png" alt="Site Logo" />
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Mukund Machine Tools. All rights reserved. <br />
          <span style={{fontSize:'12px',color:'rgb(11, 10, 78)'}}> Powered by:<span  > <a target="_blank" rel='noopener noreferrer' style={{color:'rgb(235, 183, 65)'}}  href="http://dhanwis.com/">Dhanwis TechInfo Solutions</a> </span></span>
        </div>
        <div className="footer-social">
          {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
         
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            
          </a> */}
          
        </div>
      </div>
    </footer>
  );
};

export default Copy;
