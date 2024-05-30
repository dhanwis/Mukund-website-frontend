import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'


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
      backgroundImage: 'url(img/slider/slider_img02.png)',
      backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // height: '100vh', // adjust this to your desired height
      // display: 'flex',
      // alignItems: 'center',
    };


    const sliderStyle1 = {
      backgroundImage: 'url(img/bg/servies-bg.png)',
      
      
      // backgroundPosition: 'center',
      // height: '100vh', // adjust this to your desired height
      // display: 'flex',
      // alignItems: 'center',
    };


    // style="background-image: url(img/bg/servies-bg.png); background-repeat: no-repeat;"
  return (
    <div>

{/* style="background-image: url(img/slider/slider_img01.png); background-size: cover;" */}

<div class="single-slider slider-bg d-flex align-items-center" style={sliderStyle} >
                        <div class="container">
                           <div class="row justify-content-center align-items-center">
                              
                                <div class="col-lg-6 col-md-6">
                                    <div class="slider-content s-slider-content mt-20">
                                        

                                         <h2 data-animation="fadeInUp" data-delay=".4s">We Are Best In Industry</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Your Gateway to Precision Manufacturing: Reliable Tools for Every Task.</p>
                                        
                                         <div class="slider-btn mt-30 mb-160">     
                                             <a href="/aboutus" class="btn ss-btn mr-40" data-animation="fadeInLeft" data-delay=".4s">Read More</a>
                                        </div>        
                                                              
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                </div>
                                
                            </div>
                        </div>
                    </div>



                    <section id="services" class="services-area services-bg pt-120 pb-90 p-relative">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-10">
                            <div class="section-title text-center mb-35">
                                <h2>OUR PRODUCTS</h2>
                            </div>
                        </div>
                    </div>
                    <div  class="row">
                        <div style={{borderRadius:'10px'}}  class="col-lg-4 col-md-6 mb-30">
                        <div data-aos="fade-right" style={{ borderRadius: '10px' }} className="s-single-services text-center">
      <img style={{ height: '500px', width: '500px' }} src="img/services/ik.jpg" alt="feature" />
      <div className="h-service"><h5>Industrial Knives</h5></div>
      <div className="services-icon">
        <img src="img/icon/sve-icon1.png" />
      </div>
      <div className="services-hover">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="second-services-content">
          <h5>Industrial Knives</h5>
          <p>Crafted from high-grade materials, our industrial knives deliver unparalleled precision and durability. Whether you're working with metal, wood, plastic, or food products, these knives ensure reliable, efficient cutting for the toughest industrial tasks.</p>
          {/* <a href="single-service.html">Read More</a> */}
        </div>
      </div>
    </div>
                        </div>
                         <div class="col-lg-4 col-md-6 mb-30">
                            <div data-aos="zoom-out" class="s-single-services text-center">
                                 <img style={{height:'500px',width:'500px'}} src="img/services/pt2.jpg" alt="feature"/>
                                 <div class="h-service"><h5>Power Tools</h5></div>
                                 <div class="services-icon">
                                       <img src="img/icon/sve-icon2.png"/>
                                    </div>
                                <div class="services-hover">
                                    <div class="box1"></div>
                                    <div class="box2"></div>
                                    <div class="second-services-content">
                                        <h5>Power Tools</h5>
                                        <p>Our power tools combine innovative technology with rugged construction to deliver outstanding performance. Perfect for demanding applications, they provide the power, accuracy, and durability needed for professional-grade results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-lg-4 col-md-6 mb-30">
                            <div data-aos="fade-left" class="s-single-services text-center">
                                <img style={{height:'500px',width:'500px'}} src="img/services/powertools.jpg" alt="feature"/>
                                <div class="h-service"><h5>Cutters</h5></div>
                                 <div class="services-icon">

                                 <img src="img/icon/sve-icon1.png"/>
                                    </div>
                                <div class="services-hover">
                                    <div class="box1"></div>
                                    <div class="box2"></div>
                                    <div class="second-services-content">
                                        <h5>Cutters</h5>
                                        <p>Designed for professional and industrial use, our cutters offer exceptional cutting power and precision. Built to last, they handle the toughest materials with ease, making them an essential tool for any job site or workshop..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                  
                </div>
            </section>

            <section data-aos="zoom-in-up" class="about-area about-p pt-120 pb-120 p-relative fix ">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                         <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                                <img src="img/features/about_img.png" alt="img"/>   
                               <div class="about-text second-about">
                                    <span>5 <sub>+</sub></span>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                          
                        </div>
                        
					<div   class="col-lg-6 col-md-12 col-sm-12">
                            <div  class="about-content s-about-content pl-30 wow fadeInRight  animated"   >
                                <div class="about-title second-title pb-25">  
                                    <h2>Our Industrial Solution</h2>                                   
                                </div>
                                   <p>Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.</p>
                                 <div class="slider-btn mt-20">                                          
                                     <a href="/aboutus" class="btn ss-btn smoth-scroll">Read More</a>				
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>


            <section   data-aos="zoom-in-up"  id="services-08" class="services-08 pt-105 pb-100 p-relative" style={sliderStyle1} >
                <div class="container">
                    <div class="row">   
                        <div class="col-lg-12">
                            <div class="section-title center-align mb-50 text-center">
                                <h2>
                                   Why Choose Us
                                </h2>
                             
                            </div>
                           
                        </div>
                         
                    </div>
                    </div>
                    <div class="container bg-outer">
                    <div class="row services-08-item--wrapper mt-0">
                            <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/high-quality.png" alt="circle_left"/>
                                    </div>
                                    <div class="services-08-content">
                                        <h3>
                                            <a href="single-service.html">Superior Quality</a>                                     
                                        </h3>
                                        <p>We pride ourselves on delivering machine tools of the highest quality,ensuring durability and optimal performance for all your machining needs.</p>
                                        <a href="single-service.html" class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                              <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/drill.png" alt="circle_left"/>

                                      
                                    </div>
                                    <div class="services-08-content">
                                        <h3>
                                            <a href="single-service.html">Comprehensive Product Range</a>
                                        </h3>
                                       <p>Whether you need milling machines, lathes, grinders, or specialized equipment, we have a comprehensive range of products to meet your requirements.</p>
                                        <a href="single-service.html" class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/project-management.png" alt="circle_left"/>
                                    </div>
                                    <div class="services-08-content">
                                        <h3><a href="single-service.html">Innovative Technology</a></h3>
                                        <p>Our commitment to innovation means you get access to the latest advancements in machine tool technology.</p>
                                        <a href="single-service.html" class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        
                       
                        </div>
                    
                    <div class="row services-08-item--wrapper mt-0">
                             <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/competitive.png" alt="circle_left"/>
                                    </div>
                                    <div class="services-08-content">
                                        <h3><a href="single-service.html">Competitive Pricing</a></h3>
                                        <p>We offer premium machine tools at competitive prices. Our goal is to provide you with the best value for your investment.</p>
                                        <a href="single-service.html" class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/trust.png" alt="circle_left"/>
                                    </div>
                                    <div class="services-08-content">
                                        <h3><a href="single-service.html">Reliability and Trust</a></h3>
                                        <p>Over the years, we have built a reputation for reliability and trustworthiness. Our clients know they can depend on us for consistent quality, timely deliveries, and exceptional service.</p>
                                        <a href="single-service.html" class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/target.png" alt="circle_left"/>
                                    </div>
                                    <div class="services-08-content">
                                        <h3><a href="single-service.html">Customer-Focused</a></h3>
                                        <p>Your satisfaction is our top priority. We offer personalized service, tailored solutions, and ongoing support to ensure you get the most out of our products.</p>
                                        <a href="single-service.html" class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                       
                        </div>
					
                     
                    </div>
            </section>

<br />
       <div className='text-center mt-5'><h2>OUR BRANDS</h2></div>

     <div className='container'>
         <div className='row'>
  
         <div class="col-md-2 col-6 mt-5">
  
          <div data-aos="flip-left"  class="brand-bx">
            <img src="img/icon/brand.png" alt="circle_left"/>
            
            
            </div>
  
  
  
  
  
          
          </div>
          <div class="col-md-2 col-6 mt-5">
  
          <div data-aos="flip-left" class="brand-bx">
          <img src="img/icon/brand.png" alt="circle_left"/>

            
            
            </div>
  
  
  
  
  
          
          </div>
          <div class="col-md-2 col-6 mt-5">
  
          <div data-aos="flip-left" class="brand-bx">
          <img src="img/icon/brand.png" alt="circle_left"/>

            
            
            </div>
            </div>

            <div class="col-md-2 col-6 mt-5">
  
  <div data-aos="flip-left" class="brand-bx">
  <img src="img/icon/brand.png" alt="circle_left"/>

    
    
    </div>
    </div>

    <div class="col-md-2 col-6 mt-5">
  
  <div data-aos="flip-left" class="brand-bx">
  <img src="img/icon/brand.png" alt="circle_left"/>

    
    
    </div>
    </div>

    <div class="col-md-2 col-6 mt-5">
  
  <div data-aos="flip-left" class="brand-bx">
  <img src="img/icon/brand.png" alt="circle_left"/>

    
    
    </div>
    </div>
  
  
  
  
  
          
          </div>
  
     </div>
    </div>
  )
}

export default Home