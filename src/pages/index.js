import React from 'react';
import '../styles/mystyles.css'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const index = () => {
  return (
    <div className="container mx-auto text-sm bg-gray-100">
      <Navbar />
      <Hero />
    </div>
  );
};



export default index;