import { blue } from '@mui/material/colors'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



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
                                        <i style={{color:'rgb(210, 33, 39)'}} class="icon fal fa-envelope"></i>
                                        <span>kannurmukund@gmail.com</span>
                                    </li>
                                    <li>
                                        <i style={{color:'rgb(210, 33, 39)'}} class="icon fal fa-phone"></i>
                                        <span>0091 497 2700966</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                         

                      
                         
                        
                    </div>
                </div>
            </div>		
		

         
     
    
  
        {/* </header> */}

        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <div class="logo">
                                        <a href="index.html"><img  className='ms-2' style={{width:'70px',marginLeft:'-40px'}} src="img/icon/Mukundiconog.png" alt="logo"/></a>
                                    </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='me-5' style={{fontSize:'20px'}} href="/">Home</Nav.Link>
            <Nav.Link  className='me-5'  style={{fontSize:'20px'}} href="/aboutus">Aboutus</Nav.Link>
            <Nav.Link  className='me-5'  style={{fontSize:'20px'}} href="/products">Products</Nav.Link>
            <Nav.Link  className='me-5' style={{fontSize:'20px'}} href="/contact">Contact</Nav.Link>

           
          </Nav>
          <Nav>
          
<Nav.Link href="#deets"><i  style={{color:'rgb(0, 23, 60)',fontSize:'21px'}} class="fa-brands fa-whatsapp fa-2x"></i></Nav.Link>

            <Nav.Link href="#deets"><i style={{color:'rgb(0, 23, 60)',fontSize:'20px'}} class="fa-brands fa-instagram "></i></Nav.Link>
            <Nav.Link href="#deets"><i   style={{color:'rgb(0, 23, 60)',fontSize:'20px'}} class="fa-brands fa-facebook "></i></Nav.Link>



{/* fghfghfghfghfgfhfghfgfhfghghgfghfgh */}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  

    </div>
  )
}

export default Header