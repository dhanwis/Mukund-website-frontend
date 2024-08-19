import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

import { addprojectresponsecontext } from './context/Contextshare';
import { allproductAPI } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BrandCarousel from './BrandCoruosel';





function Home() {

    useEffect(() => {
        Aos.init({
          duration: 1000, // Duration of animation in milliseconds
          easing: 'ease-in-out', // Easing function for animation
          once: false, // Whether animation should happen only once
          mirror: false, // Whether elements should animate out while scrolling past them
        });
      }, []);
 
    const sliderStyle = {
      backgroundImage: 'url(img/slider/slider_img0244.jpg)',
      backgroundSize: 'cover',
      
    };


    const sliderStyle1 = {
      backgroundImage: 'url(img/bg/servies-bg.png)',
      
      
    
    };

    const [getProduct, setgetProduct] = useState([]);

    const {addprojectresponse,setaddprojectresponse}=useContext(addprojectresponsecontext)

 useEffect(() => {
      getProducts(); 

    }, [addprojectresponse]);
  
    const getProducts = async () => {
      const reqheader = {
        "Content-Type": "application/json",
      };
      const result = await allproductAPI(reqheader);
      setgetProduct(result.data);
      setaddprojectresponse(result.data)
    };

    // console.log(getProduct);


    


  return (
    <div>


<div class="single-slider slider-bg d-flex align-items-center" style={sliderStyle} >
                        <div class="container">
                           <div class="row justify-content-center align-items-center">
                              
                                <div class="col-lg-6 col-md-6">
                                    <div class="slider-content s-slider-content mt-20">
                                        

                                         <h2 data-animation="fadeInUp" data-delay=".4s">We Are Best In Industry</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Your Gateway to Precision Manufacturing: Reliable Tools for Every Task.</p>
                                        
                                         <div  class="slider-btn mt-30 mb-160">     
                                             <a style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}} href="/aboutus" class="btn ss-btn mr-40" data-animation="fadeInLeft" data-delay=".4s">Read More</a>
                                        </div>        
                                                              
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                </div>
                                
                            </div>
                        </div>
                    </div>



                    <section id="services" className="services-area services-bg pt-120 pb-90 p-relative" style={{ marginBottom: '0', paddingBottom: '0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10">
            <div className="section-title text-center mb-35">
              <h2>What We Provide</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div style={{ borderRadius: '10px' }} className="col-lg-4 col-md-6 mb-30">
            <Link to={'/products'}>
              <div data-aos="fade-right" style={{ borderRadius: '10px' }} className="s-single-services text-center">
                <img loading="lazy" style={{ height: '500px', width: '500px' }} src="img/icon/ik1.jpeg" alt="Industrial Knives" />
                <div className="h-service"><h5 style={{fontSize:'30px'}}>Industrial Knives</h5></div>
                <div className="services-icon">
                  <img loading="lazy" src="img/icon/sve-icon2.jpg" alt="icon" />
                </div>
                <div className="services-hover">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="second-services-content">
                    <h5 style={{fontSize:'30px'}}>Industrial Knives</h5>
                    <p style={{fontSize:'20px'}}>Made from imported alloy steel with special composition for smooth surface and consistent thickness. Customised knife can be made based on your drawing for all kind of woods.</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
         

          <div  style={{ borderRadius: '10px' }} className="col-lg-4 col-md-6 mb-30">
            <Link to={'/products'}>
              <div data-aos="zoom-out" style={{ borderRadius: '10px' }} className="s-single-services text-center">
                <img loading="lazy" style={{ height: '500px', width: '500px' }} src="img/icon/ct-whatweprovide.jpeg" alt="Industrial Knives" />
                <div className="h-service"><h5 style={{fontSize:'30px'}}>Converting Tools</h5></div>
                <div className="services-icon">
                  <img loading="lazy" src="img/icon/sve-icon4.1.jpg" alt="icon" />
                </div>
                <div className="services-hover">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="second-services-content">
                    <h5 style={{fontSize:'30px'}}>Converting Tools</h5>
                    <p style={{fontSize:'20px'}}>Crafted from high-grade materials, our industrial cutters deliver unparalleled precision and durability in cutting, slitting, trimming, and profiling.</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>


          <div data-aos="fade-left" className="col-lg-4 col-md-6 mb-30">
            <Link to={'/products'}>
              <div className="s-single-services text-center">
                <img loading="lazy" style={{ height: '500px', width: '500px' }} src="img/icon/client.jpeg" alt="Cutters" />
                <div className="h-service"><h5>Saw Blades</h5></div>
                <div className="services-icon">
                  <img loading="lazy" src="img/icon/sve-icon1.0.jpg" alt="icon" />
                </div>
                <div className="services-hover">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="second-services-content">
                    <h5 style={{fontSize:'30px'}}>Saw Blades</h5>
                    <p style={{fontSize:'20px'}}>All kinds of tungsten tipped and polycrystalline diamond saw blades are available for precise cutting of wood, aluminum, metal, plastic, ferrous, and non-ferrous materials.</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
          
            <br />
            <br />
            <br />
<br />
            <center>
              <h2 className='mt-2' style={{fontSize:'50px'}}>Our <span style={{color:'#d22127'}}>Brand</span></h2>                                   
  
</center>
<br />

<div className="section-content">
  <div
    id="projectCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval={3000}
  >
    <div data-aos="zoom-in-right" className="carousel-inner">
      {/* Static Carousel Item */}
      <div className="carousel-item active">
        <div className="container my-4">
          <div
            className="card shadow-lg border-light"
            style={{
              borderRadius: 20,
              backgroundImage:
                'url("img/icon/services_bg.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="card-body">
              <div className="row gx-4 align-items-center">
                {/* Image Section (Top on Mobile, Right on Larger Screens) */}
                <div className="col-12 col-lg-6 order-lg-2 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img
                    src="img/icon/mumatul.jpeg"
                    className="img-fluid"
                    alt="Project Title"
                    style={{ borderRadius: 15, border: "4px solid lightgrey",width:"250px" }}
                  />
                </div>
                {/* Information Section (Below Image on Mobile, Left of Image on Larger Screens) */}
                <div className="col-12 col-lg-6 order-lg-1 d-flex flex-column justify-content-center">
                  <h3 className="display-6 text-center text-lg-start mb-4">
                  Mumatul Peeling Knives
                  </h3>
                 <p>  Manufactured under uncompromised metallurgical & meteorological quality control.<br />
                 • Excellent edge holding property due to high tungsten inlay.<br />
          • No teething or chipping problem.<br />
          • Long interval between regrinds hence long durable life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* corousel2 */}
      <div  className="carousel-item active">
        <div className="container my-4">
          <div
            className="card shadow-lg border-light"
            style={{
              borderRadius: 20,
              backgroundImage:
                'url("img/icon/bg-og.png")',
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="card-body">
              <div className="row gx-4 align-items-center">
                {/* Image Section (Top on Mobile, Right on Larger Screens) */}
                <div className="col-12 col-lg-6 order-lg-2 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img
                    src="img/icon/mumatul.jpeg"
                    className="img-fluid"
                    alt="Project Title"
                    style={{ borderRadius: 15, border: "4px solid lightgrey",width:"300px" }}
                  />
                </div>
                {/* Information Section (Below Image on Mobile, Left of Image on Larger Screens) */}
                <div className="col-12 col-lg-6 order-lg-1 d-flex flex-column justify-content-center">
                  <h3 className="display-6 text-center text-lg-start mb-4">
                  Mumatul Peeling Knives
                  </h3>
                 <p className='me-3'>• Manufactured under uncompromised metallurgical & meteorological quality control.<br />
                 • Excellent edge holding property due to high tungsten inlay.<br />
          • No teething or chipping problem.<br />
          • Long interval between regrinds hence long durable life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat the above carousel-item block for more items if needed */}
    </div>
    <div data-aos="zoom-in-right" className="carousel-inner">
      {/* Static Carousel Item */}
      <div className="carousel-item active">
        <div className="container my-4">
          <div
            className="card shadow-lg border-light"
            style={{
              borderRadius: 20,
              backgroundImage:
                'url("img/icon/bg-og.png")',
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="card-body">
              <div className="row gx-4 align-items-center">
                {/* Image Section (Top on Mobile, Right on Larger Screens) */}
                <div className="col-12 col-lg-6 order-lg-2 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img
                    src="img/icon/mumatul.jpeg"
                    className="img-fluid"
                    alt="Project Title"
                    style={{ borderRadius: 15, border: "4px solid lightgrey",width:"250px" }}
                  />
                </div>
                {/* Information Section (Below Image on Mobile, Left of Image on Larger Screens) */}
                <div className="col-12 col-lg-6 order-lg-1 d-flex flex-column justify-content-center">
                  <h3 className="display-6 text-center text-lg-start mb-4">
                  Mumatul Peeling Knives
                  </h3>
                 <p>  Manufactured under uncompromised metallurgical & meteorological quality control.<br />
                 • Excellent edge holding property due to high tungsten inlay.<br />
          • No teething or chipping problem.<br />
          • Long interval between regrinds hence long durable life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* corousel2 */}
      <div className="carousel-item active">
        <div className="container my-4">
          <div
            className="card shadow-lg border-light"
            style={{
              borderRadius: 20,
              backgroundImage:
                'url("img/icon/bg-og.png")',
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="card-body">
              <div className="row gx-4 align-items-center">
                {/* Image Section (Top on Mobile, Right on Larger Screens) */}
                <div className="col-12 col-lg-6 order-lg-2 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img
                    src="img/icon/our-brand1.png"
                    className="img-fluid"
                    alt="Project Title"
                    style={{ borderRadius: 15, border: "4px solid lightgrey",width:'250px' }}
                  />
                </div>
                {/* Information Section (Below Image on Mobile, Left of Image on Larger Screens) */}
                <div className="col-12 col-lg-6 order-lg-1 d-flex flex-column justify-content-center">
                  <h3 className="display-6 text-center text-lg-start mb-4">
                  Mumatul Circular Saw Blade
                  </h3>
                 <p>    • For cutting wood, plywood, block board, flush door, chipboard, laminates, plastics, steel, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat the above carousel-item block for more items if needed */}
    </div>
    {/* Carousel Controls (Uncomment if needed) */}
    
  {/* <a class="carousel-control-prev custom-carousel-control" href="#projectCarousel" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next custom-carousel-control" href="#projectCarousel" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </a>  */}
 
  </div>
</div>

<br />






            <div style={{ marginBottom: '0', marginTop: '0' }}>
  <section data-aos="zoom-in-up" id="services" className="services-area services-bg pt-120 pb-90 p-relative">
    <div className="container">
      <h1 className="text-center">Our <span style={{ color: 'rgb(210, 33, 39)' }}>Products</span> are Here</h1>
      <br />
      <div className="container">
        <div className="row">
          {getProduct && getProduct.length > 0 ? (
            getProduct.slice(0, 4).map((item) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={item.id}>
                <Link to={`/productdetail/${item._id}`}>
                  <Card style={{ borderColor: 'grey', marginBottom: '1rem' }}>
                    <Card.Img style={{ height: '200px' }} variant="top" src={`${BASE_URL}/uploads/${item.image[0]}`} />
                    <Card.Body>
                      <Card.Title style={{ height: '3rem' }}>{item.productname}</Card.Title>
                      <Button style={{ borderRadius: '10px', backgroundColor: 'rgb(35, 42, 49)', borderColor: 'rgb(35, 42, 49)', padding: '7px', float: 'right' }}>
                        Details <i className="fa-solid fa-arrow-right-long" style={{ color: '#dfe1e2' }}></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))
          ) : null}
        </div>
        <div className="row">
          <div className="col text-center">
            <a style={{ backgroundColor: 'rgb(210, 33, 39)', borderColor: 'rgb(210, 33, 39)' }} href="/products" className="btn ss-btn">See More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<br />
<br />

            <section
      data-aos="zoom-in-up"
      id="services-08"
      className="services-08 pt-105 pb-100 p-relative"
      style={sliderStyle1}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center">
              <h2>Why Choose Us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-outer">
        <div className="row services-08-item--wrapper mt-0">
          <div className="col-lg-4 col-md-4">
            <div className="services-08-item">
              <div className="services-08-thumb">
                <img src="img/icon/high-quality.png" alt="circle_left" />
              </div>
              <div className="services-08-content">
                <h3>
                  <a href="#">Superior Quality</a>
                </h3>
                
                  <p>We are committed to delivering superior quality machine tools that meet the highest standards. Our products are built to last, ensuring you get the most reliable performance for your investment, with long-run accuracy.

</p>
               
                {/* <a className="readmore"><i className="far fa-angle-right"></i></a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="services-08-item">
              <div className="services-08-thumb">
                <img src="img/icon/drill.png" alt="circle_left" />
              </div>
              <div className="services-08-content">
                <h3>
                  <a href="#">Wide Product Range</a>
                </h3>
                
                  <p>Our extensive product range covers all your machine tool needs. From basic tools to advanced machinery, we offer customized products to suit any application and budget, with a global product range.

.</p>
            
                {/* <a className="readmore"><i className="far fa-angle-right"></i></a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="services-08-item">
              <div className="services-08-thumb">
                <img src="img/icon/project-management.png" alt="circle_left" />
              </div>
              <div className="services-08-content">
                <h3><a href="#">Innovative Technology</a></h3>
                {/* <div className="me-5" style={{ width: '20rem', height: '10rem' }}> */}
                  <p>Stay ahead with our innovative technology solutions. We believe in manufacturing superior products, offering the best tools to ensure your output is superior.

</p>
                {/* </div> */}
                {/* <a className="readmore"><i className="far fa-angle-right"></i></a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row services-08-item--wrapper mt-0">
          <div className="col-lg-4 col-md-4">
            <div className="services-08-item">
              <div className="services-08-thumb">
                <img src="img/icon/competitive.png" alt="circle_left" />
              </div>
              <div className="services-08-content">
                <h3><a href="#">Competitive Pricing</a></h3>
                {/* <div className="me-5" style={{ width: '20rem', height: '10rem' }}> */}
                  <p>We offer premium machine tools at competitive prices. Our goal is to provide you with the best value for your investment, ensuring high quality without compromising affordability.</p>
                {/* </div> */}
                {/* <a className="readmore mt-4"><i className="far fa-angle-right"></i></a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="services-08-item">
              <div className="services-08-thumb">
                <img src="img/icon/trust.png" alt="circle_left" />
              </div>
              <div className="services-08-content">
                <h4><a href="#">Reliability and Trust</a></h4>
                {/* <div className="me-5" style={{ width: '20rem', height: '10rem' }}> */}
                  <p>You can count on our machine tools for consistent performance. Built with precision and reliability in mind, our products are trusted by professionals across various industries.
                  </p>
                {/* </div> */}
                {/* <a className="readmore"><i className="far fa-angle-right"></i></a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="services-08-item">
              <div className="services-08-thumb">
                <img src="img/icon/target.png" alt="circle_left" />
              </div>
              <div className="services-08-content">
                <h3><a href="#">Customer-Focused</a></h3>
                {/* <div className="me-5" style={{ width: '20rem', height: '10rem' }}> */}
                  <p>We prioritize your needs and satisfaction. Our customer-focused approach ensures you receive the best support, from product selection to after-sales service, making your experience seamless and rewarding.</p>
                {/* </div> */}
                {/* <a className="readmore"><i className="far fa-angle-right"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<br />
       <div className='text-center mt-5'><h2><span style={{color:'rgb(210, 33, 39)'}}>BRANDS</span></h2></div>

<BrandCarousel/>
    </div>
  )
}

export default Home