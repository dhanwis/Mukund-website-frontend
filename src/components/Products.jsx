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
            <h1 style={{color:'rgb(0, 23, 60)'}} className='text-center '>Product Gallery</h1>
            <br />
            <br />






<div className='row'>

  
 {
  getProduct && getProduct.length> 0 ?
  getProduct.map((item)=>(
    // slice(0,3)

 
 <div className='col-12 col-md-6 col-lg-4 mb-4'>
  <Card style={{ width: '18rem' }}>
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
 :null
  
}
 
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