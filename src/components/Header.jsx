import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function Header() {





  return (
    <div>
      {/* </header> */}

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand >
            <div class="logo">
              <a >
                <img className='c1 ms-2' style={{ width: '70px', marginLeft: '-40px' }} src="img/icon/Mukundiconog.png" alt="logo" />
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-2">
  <Nav.Link className='me-4' style={{ fontSize: '20px', fontWeight: '400', color: 'black', whiteSpace: 'nowrap' }} href="/">Home</Nav.Link>
  <Nav.Link className='me-4' style={{ fontSize: '20px', fontWeight: '400', color: 'black', whiteSpace: 'nowrap' }} href="/products">Products</Nav.Link>
  <Nav.Link className='me-4' style={{ fontSize: '20px', fontWeight: '400', color: 'black', whiteSpace: 'nowrap' }} href="/contact">Contact</Nav.Link>
  <Nav.Link className='me-4' style={{ fontSize: '20px', fontWeight: '400', color: 'black', whiteSpace: 'nowrap' }} href="/aboutus">About Us</Nav.Link>

</Nav>

            <Nav>
              <div class="header-cta">
              <ul className="contact-info1 mt-2" style={{ display: 'flex', alignItems: 'center' }}>
  <li style={{ display: 'flex', alignItems: 'center'}}>
    <i style={{ color: 'rgb(210, 33, 39)' }} className="icon fal fa-envelope"></i>
    <a href="mailto:info@mukundmachine.com" style={{ textDecoration: 'none', color: 'inherit' }}>
      <span style={{ color: '#0d0d0e' }}>info@mukundmachine.com</span>
    </a>
  </li>
  <li style={{ display: 'flex', alignItems: 'center' }}>
    <i style={{ color: 'rgb(210, 33, 39)' }} className="icon fal fa-phone"></i>
    <span style={{ fontWeight: '400', color: 'black' }}>00914972700966</span>
  </li>
</ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>





    </div>
  )
}

export default Header