import React from 'react'

function Footer() {
  return (
    <div>

{/* style="background: #00173c;" */}

<footer class="footer-bg footer-p pt-90"  style={{background:'#00173c'}}>
         
  
            <div class="footer-top pb-70">
                <div class="container">
                    <div class="row justify-content-between">
                        
                        <div class="col-xl-4 col-lg-4 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>About Us</h2>
                                </div>
                                <div class="footer-link">
                                    <p>Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.Quisque vitae metus.</p>
                                    <div class="f-contact">
                                    <ul>
                                    <li>
                                        <span class="icon"><img src="img/icon/fot-icon1.png" alt="img"/></span>
                                        <span>Tel :0091 497 2760645<br/> Fax: 0091 497 2702177 </span>
                                    </li>
                                    
                                    <li>
                                      <span class="icon"><img src="img/icon/fot-icon2.png" alt="img"/></span>
                                         <span >147, Stadium Complex, Kannur<br/>670 001, Kerala,India</span>
                                         <span className='ms-5'>kannurmukund@gmail.com</span>

                                    </li>
                        
                                </ul>
                                    
                                    </div>
                                   
                                    
                                </div>
                            </div>
                        </div>
						
                        <div class="col-xl-2 col-lg-2 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Other Links</h2>
                                </div>
                                <div class="footer-link">
                                    <ul>
                                        <li><a href="/"> Home</a></li>
                                        <li><a href="/aboutus">About Us</a></li>
                                        <li><a href="/products">Products</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                      
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div class="col-xl-2 col-lg-2 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Products</h2>
                                </div>
                                <div class="footer-link">
                                    <ul>                                        
                                        <li><a href="#">Industrial Knives</a></li>
										<li><a href="#">Saws</a></li>
                                        <li><a href="#"> Cutters</a></li>
                                        <li><a href="#">Power Tools</a></li>
                                        <li><a href="#"> Stapler</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-xl-4 col-lg-4 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Work Gallery</h2>
                                </div>
                                <div class="f-insta">
                                    <ul>
                                        <li><a class="popup-image" href="img/instagram/f-galler-01.png"><img src="img/instagram/f-galler-01.png" alt="img"/></a></li>
                                        <li><a class="popup-image" href="img/instagram/f-galler-02.png"><img src="img/instagram/f-galler-02.png" alt="img"/></a></li>
                                        <li><a class="popup-image" href="img/instagram/f-galler-03.png"><img src="img/instagram/f-galler-03.png" alt="img"/></a></li>
                                        <li><a class="popup-image" href="img/instagram/f-galler-04.png"><img src="img/instagram/f-galler-04.png" alt="img"/></a></li>
                                        <li><a class="popup-image" href="img/instagram/f-galler-05.png"><img src="img/instagram/f-galler-05.png" alt="img"/></a></li>
                                        <li><a class="popup-image" href="img/instagram/f-galler-06.png"><img src="img/instagram/f-galler-06.png" alt="img"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
            <div class="copyright-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                        <img  className='me-5' style={{width:'70px',marginLeft:'-40px'}} src="img/icon/Mukundiconog.png" alt="logo"/>
                          
                        </div>
                        <div class="col-lg-4">          
                            <div class="copy-text text-center">
                                 Copyright &copy; 2024 Mukund Machine Tools. All rights reserved.       
                            </div>
                                
                        </div>
                        <div class="col-lg-4">
                            <div class="footer-social">                                    
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </div>    
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    </div>
  )
}

export default Footer