import React from 'react';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
