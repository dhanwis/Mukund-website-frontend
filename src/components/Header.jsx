import React from 'react'



function Header() {
  return (
    <div>


<header class="header-area header">  
           <div class="header-top second-header d-none d-md-block">
                <div class="container">
                    <div class="row align-items-center">      
                        <div class="col-lg-8 col-md-8 d-none d-lg-block">
                             <div class="header-cta">
                               <ul>                                   
                                    <li>
                                        <i class="icon fal fa-envelope"></i>
                                        <span>kannurmukund@gmail.com</span>
                                    </li>
                                    <li>
                                        <i class="icon fal fa-phone"></i>
                                        <span>0091 497 2700966</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                      
                         
                        
                    </div>
                </div>
            </div>		
			  <div id="header-sticky">
                <div class="container">
                    <div class="second-menu">
                        <div class="row align-items-center">
                            <div class="col-xl-2 col-lg-2">
                                <div class="logo">
                                    <a href="index.html"><img  className='me-5' style={{width:'90px',marginLeft:'-40px'}} src="img/icon/Mukundiconog.png" alt="logo"/></a>
                                </div>
                            </div>
                           <div class="col-xl-8 col-lg-8">
                              
                                <div class="main-menu  t">
                                    <nav id="mobile-menu">
                                          <ul>
                                            <li class="has-sub">
                                                <a href="/">Home</a>
                                               
                                            </li>
                                            <li><a href="/aboutus">About Us</a></li>        
                                            
                                              <li class="has-sub">
                                                <a href="/products">Products</a>
                                               
                                            </li>  
                                              {/* <li class="has-sub"><a href="#">Pages</a>
												<ul>
                                                    <li><a href="projects.html">Gallery</a></li>
                                                    <li><a href="projects-detail.html">Gallery Details</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-single.html">Team Details</a></li>
                                                    <li><a href="shop.html">Shop</a></li>
													<li><a href="shop-details.html">Shop Details</a></li>
                                                  </ul>
											</li>
                                            <li class="has-sub"> 
                                                <a href="blog.html">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li> */}


                                            <li><a href="/contact">Contact</a></li>                                               
                                        </ul>
                                    </nav>
                                </div>
                            </div>   
                             <div class="col-xl-2 col-lg-2 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                             <div class="header-social">
                                <span>
                                    <a href="#" title="Facebook"><i style={{color:'rgb(0, 23, 60)'}} class="fab fa-facebook-f"></i></a>
                                    <a href="#" title="LinkedIn"><i style={{color:'rgb(0, 23, 60)'}} class="fab fa-instagram"></i></a>               
                                    <a href="#" title="Twitter"><i style={{color:'rgb(0, 23, 60)'}} class="fab fa-twitter"></i></a>
                                    <a href="#" title="Twitter"><i style={{color:'rgb(0, 23, 60)'}} class="fab fa-youtube"></i></a>
                                   </span>                    
                                {/* social media icon redux                               */}
                            </div>
                               
                            </div>
                            
                                <div class="col-12">
                                    <div class="mobile-menu"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>



    </div>
  )
}

export default Header