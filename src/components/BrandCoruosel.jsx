import React from 'react';

const BrandCarousel = () => {
   
    return (
        <div className="container">
        <div className="row mb-2">
            {/* First Row with 6 brands */}
            <div className="col-md-2 col-6 mt-4">
                <div data-aos="flip-left" className="brand-bx mt-4">
                    <img src="img/icon/cmtorangetools.jpg" alt="brand"/>
                </div>
            </div>
            <div className="col-md-2 col-6 mt-5">
                <div data-aos="flip-left" className="brand-bx">
                    <img src="img/icon/bosh.jpg" alt="brand"/>
                </div>
            </div>
            <div className="col-md-2 col-6 mt-5">
                <div data-aos="flip-left" className="brand-bx">
                    <img src="img/icon/kanefusa.png" alt="brand"/>
                </div>
            </div>
            <div className="col-md-2 col-6 mt-5">
                <div data-aos="flip-left" className="brand-bx">
                    <img src="img/icon/kaymo.jpg" alt="brand"/>
                </div>
            </div>
            <div className="col-md-2 col-6 mt-5">
                <div data-aos="flip-left" className="brand-bx">
                    <img src="img/icon/sharpex.png" alt="brand"/>
                </div>
            </div>
            <div className="col-md-2 col-6 mt-5">
                <div data-aos="flip-left" className="brand-bx">
                    <img src="img/icon/abracut.jpg" alt="brand"/>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mb-2">
            {/* Second Row with 3 centered brands */}
            <div className="col-md-2 col-6 mt-5">
                <div data-aos="flip-left" className="brand-bx">
                    <img src="img/icon/unicol.jpeg" alt="brand"/>
                </div>
            </div>
            <div className="col-md-2 col-6 mt-5">
                <div data-aos="flip-left" className="brand-bx">
                    <img src="img/icon/mitutoyo.jpeg" alt="brand"/>
                </div>
            </div>
            <div className="col-md-2 col-6 mt-5">
                <div data-aos="flip-left" className="brand-bx">
                    <img src="img/icon/insize.jpeg" alt="brand"/>
                </div>
            </div>
        </div>
    </div>
    
    
    );
};

export default  BrandCarousel;
