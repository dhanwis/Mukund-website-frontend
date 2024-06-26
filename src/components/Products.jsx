import React, { useContext, useEffect, useState } from 'react'
// import '../product.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { allproductAPI } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';
import { addprojectresponsecontext } from './context/Contextshare';


function Products() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: false, 
      mirror: false, 
    });
  }, []);



  


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
    <div  >
        <div data-aos="zoom-out-down" className='container'>
            <br />
            <br />
            <br /><br />
            <h1 style={{color:'rgb(0, 23, 60)'}} className='g1 text-center '>Product Gallery</h1>
            <br />
            <br />






<div className='row'>

  
 {/* {
  getProduct && getProduct.length> 0 ?
  getProduct.map((item)=>(
   

 
 <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem'  
 }}>
      <Card.Img style={{height:'200px'}} variant="top" src={`${BASE_URL}/uploads/${item.image}`} />
      <Card.Body>
        <Card.Title>{item.productname}</Card.Title>
        <Card.Text style={{width:'15rem',height:'6rem'}} >
                              {item.description}   
                            </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>Get a Quote <i class="fa-solid fa-arrow-right"></i></Button>
      </Card.Body>
    </Card>
  </div>
   ))
 : <center>  <img  className='mb-5 ' style={{width:'45%'}} src="img/icon/no-data2.1.gif" alt="Description of the image" /><h4 className='mb-5' style={{color:'#d22127'}}>No products found!</h4></center>
  
} */}

<div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem'  
 }}>
      <Card.Img style={{height:'200px'}} variant="top" src={'img/icon/sree.jpg'} />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text style={{width:'15rem',height:'6rem'}} >
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nostrum id magni nesciunt.
                            </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>Get a Quote <i class="fa-solid fa-arrow-right"></i></Button>
      </Card.Body>
    </Card>
  </div>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem'  
 }}>
      <Card.Img style={{height:'200px'}} variant="top" src={'img/icon/sree.jpg'} />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text style={{width:'15rem',height:'6rem'}} >
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nostrum id magni nesciunt.
                            </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>Get a Quote <i class="fa-solid fa-arrow-right"></i></Button>
      </Card.Body>
    </Card>
  </div>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem'  
 }}>
      <Card.Img style={{height:'200px'}} variant="top" src={'img/icon/sree.jpg'} />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text style={{width:'15rem',height:'6rem'}} >
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nostrum id magni nesciunt.
                            </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>Get a Quote <i class="fa-solid fa-arrow-right"></i></Button>
      </Card.Body>
    </Card>
  </div>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem'  
 }}>
      <Card.Img style={{height:'200px'}} variant="top" src={'img/icon/sree.jpg'} />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text style={{width:'15rem',height:'6rem'}} >
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nostrum id magni nesciunt.
                            </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>Get a Quote <i class="fa-solid fa-arrow-right"></i></Button>
      </Card.Body>
    </Card>
  </div>
  <div className='col-12 col-md-6 col-lg-4 mb-4'>     
  <Card style={{ width: '18rem'  
 }}>
      <Card.Img style={{height:'200px'}} variant="top" src={'img/icon/sree.jpg'} />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text style={{width:'15rem',height:'6rem'}} >
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nostrum id magni nesciunt.
                            </Card.Text>
        <Button style={{backgroundColor:'rgb(210, 33, 39)',borderColor:'rgb(210, 33, 39)'}}>Get a Quote <i class="fa-solid fa-arrow-right"></i></Button>
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