import React, { useState, useEffect, useContext } from 'react';
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
import ErrorPage from './components/Errorss';
import Loading from './components/Loading';
import ProductDetail from './components/ProductDetail';

function App() {
  const { authtoken, setauthtoken } = useContext(isauthtokencontext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 1100); // Adjust the time as per your needs
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
     
      <main className="content">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </main>
      <WhatsApp />
      <br />
      <Copy />
    </div>
  );
}

export default App;
