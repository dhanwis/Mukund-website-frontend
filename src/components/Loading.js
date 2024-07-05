// Loading.js
import React, { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Loading = () => {


    useEffect(() => {
        Aos.init({
          duration: 1000, // Duration of animation in milliseconds
          easing: 'ease-in-out', // Easing function for animation
          once: false, // Whether animation should happen only once
          mirror: false, // Whether elements should animate out while scrolling past them
        });
      }, []);
  return (
    <div data-aos="zoom-out-down" className="loading-container">
 <div className="d-flex justify-content-center align-items-center vh-100">
      <img
        className="c1 ms-2"
        style={{ width: '85px' }}
        src="img/icon/Mukundiconog.png"
        alt="logo"
      />
    </div>
    </div>
  );
};

export default Loading;
