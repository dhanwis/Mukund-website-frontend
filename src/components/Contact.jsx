import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Card from 'react-bootstrap/Card';
import './officeaddress.css'; 

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
        backgroundImage: 'url(img/bg/bgchang.jpg)',
        
      };
  return (
    <div data-aos="zoom-out-down">

<section  class="breadcrumb-area d-flex align-items-center" style={sliderStyle}>
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
                            <div className="single-cta wow" data-delay=".2s">
            <div className="f-cta-icon">
                <i className="far fa-map" style={{ backgroundColor: 'rgb(210, 33, 39)' }}></i>
            </div>
            <h5>Office Address</h5>
            <p className='fw-bold'>147, Stadium Complex, Kannur <br /> 670 001, Kerala, India</p>
        </div>
                                     <div class="single-cta pb-30 mb-30 wow " d data-delay=".2s">
                                        <div class="f-cta-icon">
                                            <i style={{backgroundColor:'rgb(210, 33, 39)'}} class="far fa-clock"></i>
                                        </div>
                                        <h5>Working Hours</h5>
                                        <p className='fw-bold'>Monday to saturday <br /> 09:00 to 5:30 , 
                                            Sunday holiday</p> 
                                    </div>
                                     <div class="single-cta wow "  data-delay=".2s">
                                        <div class="f-cta-icon">
                                            <i style={{backgroundColor:'rgb(210, 33, 39)'}} class="far fa-envelope-open"></i>
                                        </div>
                                        <h5>Message Us</h5>
                                        <p className='fw-bold'><a>info@mukundmachine.com</a></p>         
                                    </div>  
                                         
                                </div>							
                        </div>
                        <div data-aos="fade-left" className="col-lg-8 order-2">
  <br />
  <br />
  <div className="row">
    {/* First column for "Other Branches" */}
    <div className="col-12 col-md-6 mb-4"> {/* Add mb-4 for mobile spacing */}
      <h3 className="text-center mb-5">Other Branch</h3>
      <Card className="m-3" style={{ width: "100%", borderColor: "rgb(210, 33, 39)" }}>
        <Card.Body>
          <Card.Title>MUKUND MACHINE TOOLS</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Perumbavoor</Card.Subtitle>
          <br />
          <Card.Text>
            4F9G+63M, Karthika Annex, Ground Floor, Kalady-Perumbavoor Rd, Perumbavoor, Kerala 683542
          </Card.Text>
          <Card.Text>
            Phone: <a href="tel:9544421115">+919544421115</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    {/* Second column for "Our Service Partner" */}
    <div className="col-12 col-md-6">
      <h3 className="text-center mb-5">Our Service Partner</h3>
      <Card className="m-3" style={{ width: "100%", borderColor: "rgb(210, 33, 39)" }}>
        <Card.Body>
          <Card.Title>PREBIN ENGINEERING</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Kannur</Card.Subtitle>
          <Card.Text>
          Industrial Plot, Andoor, Parassinikkadavu, 670 563 <br />
Kannur Dt., Kerala. Tel: 0497 2931428
Email: prebinengg@gmail.com
          </Card.Text>
          <Card.Text>
            Phone: <a href="tel:7293115909">+9172931 15909</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>


					</div>
                    
                </div>
               
            </section>
            <div class="map fix" style={{background:' #f5f5f5;'}} >
                <div class="container-flud">
                    
                    <div class="row">
                        <div class="col-lg-12">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999533.8942689339!2d74.14937777812501!3d11.875168000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d3698079455%3A0xdbe4609715f541e1!2sMukund%20Machine%20Tools!5e0!3m2!1sen!2sin!4v1717047988547!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact