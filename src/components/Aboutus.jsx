import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react'

function Aboutus() {

    const sliderStyle1 = {
        backgroundImage: 'url(img/bg/bdrc-bg.png)',
        
      
      };


      useEffect(() => {
        Aos.init({
          duration: 1000, // Duration of animation in milliseconds
          easing: 'ease-in-out', // Easing function for animation
          once: false, // Whether animation should happen only once
          mirror: false, // Whether elements should animate out while scrolling past them
        });
      }, []);
  return (
    <div >


<section class="breadcrumb-area d-flex align-items-center" style={sliderStyle1}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-lg-12">
                            <div class="breadcrumb-wrap text-left">
                                <div class="breadcrumb-title">
                                    <h2>About Us</h2>    
                                    <div class="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
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
                                <img className='mb-5' src="img/services/aboutuss.jpg" alt="img"/>   
                               {/* <div class="about-text second-about">
                                    <span>5 <sub>+</sub></span>
                                    <p>Years of Experience</p>
                                </div> */}
                            </div>
                          
                        </div>
                        
					<div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="about-content s-about-content pl-30 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                                <div class="about-title second-title pb-25">  
                                    <h3 style={{color:'00173c'}}>Welcome to <br /></h3>   
                                    <h2 ><span style={{color:'rgb(210, 33, 39)'}}>Mukund Machine Tools</span></h2>                                
                                </div>
                                   <p>Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.</p>
                                  <p>Ut iaculis dignissim justo, ut scelerisque lacus gravida sit amet. Mauris at pharetra quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi accumsan hendrerit dapibus. Quisque auctor leo non nulla maximus, tincidunt lobortis diam dignissim.Teger eu venenatis tellus. Nullam vehicula magna id tellus accumsan blandit. Vivamus vehicula vel lorem vel purus sapien, cursus sed nisl dignissim.</p>
                                 {/* <div class="slider-btn mt-20">                                          
                                     <a href="/aboutus" class="btn ss-btn smoth-scroll">Read More</a>				
                                </div> */}
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Aboutus