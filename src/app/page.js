// import React from 'react';
import Hero from './components/Hero/hero'
import Footer from './components/footer/footer';
import Video from './components/video/video';
import Collab from './components/collab/collab';
import Product from './components/product/product.jsx';
import ClassicCarConversion from './components/classiccar/classiccar.jsx';
import AboutUS from './about-us/page';
import ProdandServ from './components/Products-Service/ProdandServ';
import FindRetailer from './components/FindRetailer';

const Home = () => {
  
  return (
    
    <>
      <Hero/>

      <Product/>

      <Collab/>

      <ClassicCarConversion/>
      
      {/* <FindRetailer/> */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;