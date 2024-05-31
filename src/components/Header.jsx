import { blue } from '@mui/material/colors'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';



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
		

         
     
    
   <div className='container'>
          <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
          <div class="logo">
                                        <a href="index.html"><img  className='me-5' style={{width:'70px',marginLeft:'-40px'}} src="img/icon/Mukundiconog.png" alt="logo"/></a>
                                    </div>
            {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
    
            
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/products">Product</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>


                
                
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   </div>
        {/* </header> */}



    </div>
  )
}

export default Header