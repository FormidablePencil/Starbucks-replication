import React from 'react';
import Footlvl1 from './FooterLevels/Footlvl1'
import Footlvl2 from './FooterLevels/Footlvl2';
import Footlvl3 from './FooterLevels/Footlvl3';

const Footer = () => {
  return (
    <div>
      <div className="bg-starbucks-grayLight">
        <Footlvl1 />
        <Footlvl2 />
        <Footlvl3 />
      </div>
    </div>
  );
};

export default Footer;