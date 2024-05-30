import React from 'react'
// import '../product.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {

    const sliderStyle1 = {
        
        
        // height: '100vh', // adjust this to your desired height
        // display: 'flex',
        // alignItems: 'center',
      };

    //   style="background-image: url(img/bg/testimonal-bg.png);background-color: #fff;background-position: center center;background-repeat: no-repeat;"

    // style={{background:'#00173c'}}
  return (
    <div  >
        <div className='container'>
            <br />
            <h1 style={{color:'rgb(0, 23, 60)'}} className='text-center '>Product Gallery</h1>

<br />
<br />
<br />

<div className='row'>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src="img/icon/sawsss.jpg" />
      <Card.Body>
        <Card.Title>Saws</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  </div>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src="img/icon/tools.jpg" />
      <Card.Body>
        <Card.Title>powertools</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  </div>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src="img/icon/tape.jpg" />
      <Card.Body>
        <Card.Title>Papergum Tape</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See more</Button>
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