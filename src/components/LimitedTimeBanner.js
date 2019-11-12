import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const LimitedTimeBanner = () => {
  return (
    <div className="bg-starbucks-green">
      <div className="flex flex-row-reverse px-full container mx-auto text-xs text-gray-200">
        <div className="bg-starbucks-greenDark py-2 px-4 underline">
          Exciting updates to Starbucks Rewards®
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeBanner;