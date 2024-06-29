import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Copy from './components/Copyrightt';
import WhatsApp from './components/Whatsappbutton';
import { isauthtokencontext } from './components/context/Contextshare';
import { useContext } from 'react';
import ErrorPage from './components/Errorss';

function App() {

  const {authtoken,setauthtoken}=useContext(isauthtokencontext)

  return (
    <div className="App">
<Header/>

    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/aboutus' element={<Aboutus/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path="*" element={<ErrorPage />} />



  
    </Routes>
    <WhatsApp/>
  <br/>
     <Copy/>



    
    </div>
  );
}

export default App;
