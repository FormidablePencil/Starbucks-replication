import React from 'react';
import Col from './Footerlvl1Stuff/Col';

const Footer = () => {
  return (
    <div className="container mx-auto md:px-8 py-8">
      <div className="md:inline-flex md:flex-row">
        <Col 
        head="about us"
        one="our company"
        two="Dennis is the best"
        three="starbucks stories"
        four="press center"
        five=""
        six=""
        seven=""
        eight=""
        />
        <Col 
        head="career center"
        one="working at starbucks"
        two="college plan"
        three="current partners"
        four="corporate partners"
        five="manufacturing and distribution"
        six="retail careers"
        seven="retail careers"
        eight="international careers"
        />
        <Col 
        head="For business"
        one="our company"
        two="investor relations"
        three="starbucks stories"
        four="press center"
        five=""
        six=""
        seven=""
        eight=""
        />
      </div>
    </div>
  );
};

export default Footer;