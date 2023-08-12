// import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/hero'
import Footer from './components/footer/footer';
import Video from './components/video/video';
import Collab from './components/collab/collab';
import Product from './components/product/product.jsx';
import ClassicCarConversion from './components/classiccar/classiccar.jsx';
import AboutUS from './components/AboutUs/aboutus';
import ProductDetail from './components/product-detail/Product-Detail';
import ProdandServ from './components/Products-Service/ProdandServ';
import Contactus from './components/ContactUs/Contactus';
import FindRetailer from './components/Find_Retailer/FindRetailer';

const Home = () => {
  
  return (
    <>
      {/* Navbar */}
      <NavBar />

      <Hero/>

      {/* <Video/>

      <Product/>

      <Collab/>

      <ClassicCarConversion/> */}
      
      <FindRetailer/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;