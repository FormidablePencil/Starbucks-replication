import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const Footlvl2 = () => {
  return (
    <div className="container mx-auto hidden md:block pt-5">
      <div className="flex inline-block h-5 text-sm">
        <span className="px-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        <span>Find a Store</span>
        <span className="mx-4 mt-2 hidden md:block border-r border-gray-800 "></span>
        <span>English</span>
      </div>
    </div>
  );
};

export default Footlvl2;