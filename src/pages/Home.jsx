import React from 'react';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Product />
      <AboutUs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
