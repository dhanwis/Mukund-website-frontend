import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react'

function Aboutus() {

    const sliderStyle1 = {
        backgroundImage: 'url(img/bg/1920.jpg)',
        
      
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
    <div data-aos="zoom-out-down" >


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

            <section class="about-area about-p pt-120 pb-120 p-relative fix ">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                         <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="s-about-img p-relative  wow "  >
                                <img className='mb-5' src="img/services/about6.jpg" alt="img"/>   
                               {/* <div class="about-text second-about">
                                    <span>5 <sub>+</sub></span>
                                    <p>Years of Experience</p>
                                </div> */}
                            </div>
                          
                        </div>
                        
					<div  class="col-lg-6 col-md-12 col-sm-12 mb-5">
                            <div class="about-content s-about-content pl-30 wow "  >
                                <div class="about-title second-title pb-25">  
                                    <h3 style={{color:'00173c'}}>Welcome to <br /></h3>   
                                    <h1 ><span style={{color:'rgb(210, 33, 39)'}}>Mukund Machine Tools</span></h1>                                
                                </div>
                                   <p style={{color:'black'}}>Founded in 1987, Mukund Machine Tools has grown from a small business into a leading supplier of industrial cutting tools. We specialise in trading high-quality knives, saws, and cutters for industries working with wood, rubber, paper, plastics, ferrous and other non-ferrous metals.
                                   </p>
                                  <p style={{color:'black'}}>Our collaboration with top manufacturers from India and across the world ensures that our customers benefit from the latest cutting tools which we have been selling locally and abroad. This network allows us to  consistently offer innovative and reliable solutions.
                                  </p>
                                  <p style={{color:'black'}}>
                                  We have accumulated years of experience in providing timely services at our service centre which is equipped with state-of-the-art CNC machine.
                                  </p>
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