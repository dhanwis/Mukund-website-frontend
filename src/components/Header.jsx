import { blue } from '@mui/material/colors'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>


{/* <header class="header-area header">   */}
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
		

         
     
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <div class="logo">
                                    <a href="index.html"><img  className='me-5' style={{width:'70px',marginLeft:'-40px'}} src="img/icon/Mukundiconog.png" alt="logo"/></a>
                                </div>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About US </Nav.Link>
            <Nav.Link href="/products">Product</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

                             {/* <div style={{float:'left'}} class="header-social">
                                <span>
                                    <a href="#" title="Facebook"><i style={{color:'rgb(0, 23, 60)'}} class="fab fa-facebook-f"></i></a>
                                    <a href="#" title="LinkedIn"><i style={{color:'rgb(0, 23, 60)'}} class="fab fa-instagram"></i></a>               
                                    <a href="#" title="Twitter"><i style={{color:'rgb(0, 23, 60)'}} class="fab fa-twitter"></i></a>
                                    <a href="#" title="Twitter"><i style={{color:'rgb(0, 23, 60)'}} class="fab fa-youtube"></i></a>
                                   </span>                    
                            </div> */}

                               
                            

          </Nav>
        </Container>
      </Navbar>
        {/* </header> */}



    </div>
  )
}

export default Header