import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useContext, useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';

import { addprojectresponsecontext } from './context/Contextshare';
import { allproductAPI } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';
import { Link } from 'react-router-dom';


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
      backgroundImage: 'url(img/slider/slider_img024.jpg)',
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

    console.log(getProduct);


    


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



                    <section id="services" className="services-area services-bg pt-120 pb-90 p-relative">
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
              <div data-aos="fade-right" style={{ borderRadius: '10px' }} className="s-single-services text-center" >
               <img style={{ height: '500px', width: '500px' }} src="img/services/ik.jpg" alt="feature" />
                <div className="h-service"><h5>Industrial Knives</h5></div>
                <div className="services-icon">
                  <img src="img/icon/sve-icon5.jpg" />
                </div>
                <div className="services-hover">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="second-services-content">
                    <h5>Industrial Knives</h5>
                    <p>Crafted from high-grade materials, our industrial knives deliver unparalleled precision and durability. Whether you're working with metal, wood, plastic, or food products, these knives ensure reliable, efficient cutting for the toughest industrial tasks.</p>
                  </div>
                </div>
              </div>
          </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-30">
           <Link to={'/products'}>
              <div data-aos="zoom-out" className="s-single-services text-center" >
               <img style={{ height: '500px', width: '500px' }} src="img/services/pt2.jpg" alt="feature" />
                <div className="h-service"><h5>Power Tools</h5></div>
                <div className="services-icon">
                  <img src="img/icon/sve-icon6.jpg" />
                </div>
                <div className="services-hover">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="second-services-content">
                    <h5>Power Tools</h5>
                    <p>Our power tools combine innovative technology with rugged construction to deliver outstanding performance. Perfect for demanding applications, they provide the power, accuracy, and durability needed for professional-grade results.</p>
                  </div>
                </div>
              </div>
           </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-30">
          <Link to={'/products'}>
              <div data-aos="fade-left" className="s-single-services text-center">
               <img style={{ height: '500px', width: '500px' }} src="img/services/powertools.jpg" alt="feature" />
                <div className="h-service"><h5>Cutters</h5></div>
                <div className="services-icon">
                  <img src="img/icon/sve-icon5.jpg" />
                </div>
                <div className="services-hover">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="second-services-content">
                    <h5>Cutters</h5>
                    <p>Designed for professional and industrial use, our cutters offer exceptional cutting power and precision. Built to last, they handle the toughest materials with ease, making them an essential tool for any job site or workshop.</p>
                  </div>
                </div>
              </div>
          </Link>
          </div>
        </div>
      </div>
    </section>

            <section data-aos="zoom-in-up" class="about-area about-p pt-120 pb-120 p-relative fix mb-5 ">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                         <div class="col-lg-6 col-md-12 col-sm-12">
                            <div  class="s-about-img p-relative  wow  " >
                                <img src="img/features/about_img3.jpg" alt="img"/>   
                               <div  class="about-text second-about">
                                    <span>30 <sub>+</sub></span>
                                    <p >Years of Experience</p>
                                </div>
                            </div>
                          
                        </div>
                        
					<div   class="col-lg-6 col-md-12 col-sm-12 mb-5">
                            <div  class="about-content s-about-content pl-30 wow "   >
                                <div class="about-title second-title pb-25">  
                                    <h2>Our Industrial Solution</h2>                                   
                                </div>
                                   <p style={{color:"black"}}>Mukund Machine Tools has grown from a small business into a leading supplier of industrial cutting tools. We specialise in trading high-quality knives, saws, and cutters for industries working with wood, rubber, paper, plastics, ferrous and other non-ferrous metals.
                                   </p>
                                 <div class="slider-btn mt-20">                                          
                                     <a style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}} href="/aboutus" class="btn ss-btn smoth-scroll">Read More</a>				
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>


            <section data-aos="zoom-in-up" id="services" class="services-area services-bg pt-120 pb-90 p-relative mb-5">
                <div class="container">
                <h1 className='text-center'>Our <span style={{color:'rgb(210, 33, 39)'}}>Products</span> are Here</h1>
                <br />

                <div className='row'>
                {getProduct && getProduct.length > 0 ? (
        getProduct.slice(0, 4).map((item) => (
          <div className='col-12 col-md-6 col-lg-3 mb-4' key={item.id}>
            <Link to={'/products'}>
            <Card style={{ width: '18rem', borderColor:'rgb(210, 33, 39)' 
 }}>
      <Card.Img style={{height:'200px'}} variant="top" src={`${BASE_URL}/uploads/${item.image}`} />
      <Card.Body>
        <Card.Title style={{width:'15rem',height:'4rem'}}>{item.productname}</Card.Title>
        <Card.Text style={{width:'15rem',height:'8rem'}} >
                              {item.description}   
                            </Card.Text>
      </Card.Body>
    </Card>
            </Link>
          </div>
        ))
      ) : null}
 {/* <div className='col-12 col-md-6 col-lg-3 mb-4'>
     <Card 
      data-aos="flip-left" 
      sx={{ 
        maxWidth: 345, 
         
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={'img/icon/sree.jpg'}
        title="mukund"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Product 1
        </Typography>
        <Typography style={{ width: '15rem', height: '6rem' }} variant="body2" color="text.dark">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae omnis accusantium, !
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  </div>

  <div className='col-12 col-md-6 col-lg-3 mb-4'>
     <Card 
      data-aos="flip-left" 
      sx={{ 
        maxWidth: 345, 
         
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={'img/icon/sree.jpg'}
        title="mukund"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Product 1
        </Typography>
        <Typography style={{ width: '15rem', height: '6rem' }} variant="body2" color="text.dark">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae omnis accusantium, !
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  </div>


  <div className='col-12 col-md-6 col-lg-3 mb-4'>
     <Card 
      data-aos="flip-left" 
      sx={{ 
        maxWidth: 345, 
         
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={'img/icon/sree.jpg'}
        title="mukund"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Product 1
        </Typography>
        <Typography style={{ width: '15rem', height: '6rem' }} variant="body2" color="text.dark">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae omnis accusantium, !
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  </div>

  <div className='col-12 col-md-6 col-lg-3 mb-4'>
     <Card 
      data-aos="flip-left" 
      sx={{ 
        maxWidth: 345, 
         
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={'img/icon/sree.jpg'}
        title="mukund"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Product 1
        </Typography>
        <Typography style={{ width: '15rem', height: '6rem' }} variant="body2" color="text.dark">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae omnis accusantium, !
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  </div> */}
  
  
 

  <div class="slider-btn mt-30 mb-160">     
<center>
                                                 <a style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}} href="/products" class="btn ss-btn mr-40" >See More</a>
    
</center>                                        </div>    
</div>



                  
                </div>
            </section>


            <section   data-aos="zoom-in-up"  id="services-08" class="services-08 pt-105 pb-100 p-relative " style={sliderStyle1} >
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
                                            <a>Superior Quality</a> 
                                                                              
                                        </h3>
<div className='me-5' style={{width:'20rem',height:'10rem'}}>
                                          <p style={{textAlign:'justify',color:'black'}}>We pride ourselves on delivering machine tools of the highest quality,ensuring durability and optimal performance for all your machining needs.</p>
  
</div>                                        <a  class="readmore"><i class="far fa-angle-right"></i></a>
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
                                            <a >Wide Product Range</a>
                                        </h3>
                                        <div className='me-5' style={{width:'20rem',height:'10rem'}}>
                                        <p style={{textAlign:'justify',color:'black'}}>Whether you need saws, cutters, or powertools, we have a comprehensive range of products to meet your requirements.</p> </div>
                                        <a  class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/project-management.png" alt="circle_left"/>
                                    </div>
                                    <div class="services-08-content">
                                        <h3><a >Innovative Technology</a></h3>
                                        <div className='me-5' style={{width:'20rem',height:'10rem'}}>
                                        <p style={{textAlign:'justify',color:'black'}}>Our commitment to innovation means you get access to the latest advancements in machine tool technology.</p> </div>
                                        <a  class="readmore"><i class="far fa-angle-right"></i></a>
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
                                        <h3><a >Competitive Pricing</a></h3>
                                        <div className='me-5' style={{width:'20rem',height:'10rem'}}>
                                        <p style={{textAlign:'justify',color:'black'}}>We offer premium machine tools at competitive prices. Our goal is to provide you with the best value for your investment.</p> </div>
                                        <a class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/trust.png" alt="circle_left"/>
                                    </div>
                                    <div class="services-08-content">
                                        <h3><a >Reliability and Trust</a></h3>
                                        <div className='me-5' style={{width:'20rem',height:'10rem'}}>
                                        <p style={{textAlign:'justify',color:'black'}}>Over the years, we have built a reputation for reliability and trustworthiness. Our clients know they can depend on us for consistent quality, timely deliveries, and exceptional service.</p> </div>
                                        <a  class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-md-4">
                                <div class="services-08-item">
                                    <div class="services-08-thumb">
                                      <img src="img/icon/target.png" alt="circle_left"/>
                                    </div>
                                    <div class="services-08-content">
                                        <h3><a >Customer-Focused</a></h3>
                                        <div className='me-5' style={{width:'20rem',height:'10rem'}}>
                                        <p style={{textAlign:'justify',color:'black'}}>Your satisfaction is our top priority. We offer personalized service, tailored solutions, and ongoing support to ensure you get the most out of our products.</p> </div>
                                        <a  class="readmore"><i class="far fa-angle-right"></i></a>
                                    </div>
                                </div>  
                            </div>

                       
                        </div>
					
                     
                    </div>
            </section>

<br />
       <div className='text-center mt-5'><h2>OUR <span style={{color:'rgb(210, 33, 39)'}}>BRANDS</span></h2></div>

       <div class="container">
    <div class="row mb-2">
        <div class="col-md-2 col-6 mt-4">
            <div data-aos="flip-left" class="brand-bx mt-4">
                <img src="img/icon/cmtorangetools.jpg" alt="circle_left"/>
            </div>
        </div>
        <div class="col-md-2 col-6 mt-5">
            <div data-aos="flip-left" class="brand-bx">
                <img src="img/icon/bosh.jpg" alt="circle_left"/>
            </div>
        </div>
        <div class="col-md-2 col-6 mt-5">
            <div data-aos="flip-left" class="brand-bx">
                <img src="img/icon/kanefusa.png" alt="circle_left"/>
            </div>
        </div>
        <div class="col-md-2 col-6 mt-5">
            <div data-aos="flip-left" class="brand-bx">
                <img src="img/icon/kaymo.jpg" alt="circle_left"/>
            </div>
        </div>
        <div class="col-md-2 col-6 mt-5">
            <div data-aos="flip-left" class="brand-bx">
                <img  src="img/icon/sharpex.png" alt="circle_left"/>
            </div>
        </div>
        <div class="col-md-2 col-6 mt-5">
            <div data-aos="flip-left" class="brand-bx">
                <img src="img/icon/abracut.jpg" alt="circle_left"/>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Home