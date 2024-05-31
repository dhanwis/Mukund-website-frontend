import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        Aos.init({
          duration: 1000, // Duration of animation in milliseconds
          easing: 'ease-in-out', // Easing function for animation
          once: false, // Whether animation should happen only once
          mirror: false, // Whether elements should animate out while scrolling past them
        });
      }, []);


    const sliderStyle = {
        backgroundImage: 'url(img/bg/servies-bg.png)',
        
      };
  return (
    <div>

<section class="breadcrumb-area d-flex align-items-center" style={sliderStyle}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-lg-12">
                            <div class="breadcrumb-wrap text-left">
                                <div class="breadcrumb-title">
                                    <h2>Contact Us</h2>    
                                    <div class="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page"><a href="/aboutus">About Us</a></li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>



            <section id="contact" class="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
                <div class="container">
             
					<div class="row justify-content-center align-items-center">
						
                         <div data-aos="fade-right" class="col-lg-4 order-1">
                             
                            <div class="contact-info">
                                  <div class="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                        <div class="f-cta-icon">
                                            <i class="far fa-map"></i>
                                        </div>
                                        <h5>Office Address</h5>
                                        <p>147, Stadium Complex, Kannur <br/>
                                            670 001,Kerala,India</p>
                                    </div>
                                     <div class="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                        <div class="f-cta-icon">
                                            <i class="far fa-clock"></i>
                                        </div>
                                        <h5>Working Hours</h5>
                                        <p>Monday to Friday 09:00 to 18:30 <br/> 
                                            Saturday 15:30</p>
                                    </div>
                                     <div class="single-cta wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                        <div class="f-cta-icon">
                                            <i class="far fa-envelope-open"></i>
                                        </div>
                                        <h5>Message Us</h5>
                                        <p> <a >kannurmukund@gmail.com</a></p>
                                    </div>
                                </div>							
                        </div>
                        <div data-aos="fade-left" class="col-lg-8 order-2">
                            
                            {/* <div class="contact-bg02">
                                <div class="section-title center-align">
                                    <h2>
                                       Make Appointment
                                    </h2>
                                </div>                                
                                <form action="https://zcube.in/indobi/mail.php" method="post" class="contact-form mt-30">
                                    <div class="row">
                                    <div class="col-lg-6">
                                        <div class="contact-field p-relative c-name mb-20">                                    
                                            <input type="text" id="firstn" name="firstn" placeholder="First Name" required/>
                                        </div>                               
                                    </div>

                                    <div class="col-lg-6">                               
                                        <div class="contact-field p-relative c-subject mb-20">                                   
                                            <input type="text" id="email" name="email" placeholder="Eamil" required/>
                                        </div>
                                    </div>		
                                    <div class="col-lg-6">                               
                                        <div class="contact-field p-relative c-subject mb-20">                                   
                                            <input type="text" id="phone" name="phone" placeholder="Phone No." required/>
                                        </div>
                                    </div>	
                                    <div class="col-lg-6">                               
                                        <div class="contact-field p-relative c-subject mb-20">                                   
                                            <input type="text" id="subject" name="subject" placeholder="Subject"/>
                                        </div>
                                    </div>	
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-message mb-30">                                  
                                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write comments"></textarea>
                                        </div>
                                        <div class="slider-btn">                                          
                                                    <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Submit Now</span></button>				
                                                </div>                             
                                    </div>
                                    </div>
                            </form>                            
                            </div>     */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999533.8942689339!2d74.14937777812501!3d11.875168000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d3698079455%3A0xdbe4609715f541e1!2sMukund%20Machine%20Tools!5e0!3m2!1sen!2sin!4v1717047988547!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>

                        
						</div>
					</div>
                    
                </div>
               
            </section>
            {/* style="background: #f5f5f5;" */}
            {/* <div class="map fix" style={{background:' #f5f5f5;'}} >
                <div class="container-flud">
                    
                    <div class="row">
                        <div class="col-lg-12">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999533.8942689339!2d74.14937777812501!3d11.875168000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d3698079455%3A0xdbe4609715f541e1!2sMukund%20Machine%20Tools!5e0!3m2!1sen!2sin!4v1717047988547!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  )
}

export default Contact