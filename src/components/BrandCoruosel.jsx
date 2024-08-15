import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import './BrandCarousel.css'; // Make sure to import your CSS file

const BrandCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    const brands = [
        { src: "img/icon/cmtorangetools.jpg", alt: "CMT Orange Tools" },
        { src: "img/icon/bosh.jpg", alt: "Bosch" },
        { src: "img/icon/kanefusa.png", alt: "Kanefusa" },
        { src: "img/icon/kaymo.jpg", alt: "Kaymo" },
        { src: "img/icon/sharpex.png", alt: "Sharpex" },
        { src: "img/icon/abracut.jpg", alt: "Abracut" },
        { src: "img/icon/unicol.jpeg", alt: "unicol" },
        { src: "img/icon/mitutoyo.jpeg", alt: "mitutoyo" },
        { src: "img/icon/insize.jpeg", alt: "insize" }

       
    ];

    return (
        <div className="container">
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
                {brands.map((brand, index) => (
                    <div key={index} className="brand-container">
                        <div className="brand-bx" data-aos="flip-left">
                            <img src={brand.src} alt={brand.alt} />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default BrandCarousel;
