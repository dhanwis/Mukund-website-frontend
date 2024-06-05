import React, { useEffect } from 'react'
// import '../product.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';
import Aos from 'aos';


function Products() {

  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

    const sliderStyle1 = {
        
        
        // height: '100vh', // adjust this to your desired height
        // display: 'flex',
        // alignItems: 'center',
      };

    //   style="background-image: url(img/bg/testimonal-bg.png);background-color: #fff;background-position: center center;background-repeat: no-repeat;"

    // style={{background:'#00173c'}}
  return (
    <div  >
        <div data-aos="zoom-out-down" className='container'>
            <br />
            <br />
            <br /><br />
            <h1 style={{color:'rgb(0, 23, 60)'}} className='text-center '>Product Gallery</h1>
            <br />
            <br />






<div className='row'>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src="img/icon/sawsss.jpg" />
      <Card.Body>
        <Card.Title>product</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>See more</Button>
      </Card.Body>
    </Card>
  </div>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src="img/icon/tools.jpg" />
      <Card.Body>
        <Card.Title>product</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>See more</Button>
      </Card.Body>
    </Card>
  </div>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src="img/icon/tape.jpg" />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>See more</Button>
      </Card.Body>
    </Card>
  </div>
</div>

    <br />
    <br />
<br />
<br />



        </div>


    </div>
  )
}

export default Products