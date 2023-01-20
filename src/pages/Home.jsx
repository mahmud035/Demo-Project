import React from 'react';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Product from '../components/Product';

const Home = () => {
  return (
    <div>
      <Product />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
