import React from 'react';

const LimitedTimeBanner = () => {
  return (
    <div className="bg-starbucks-green ">
      <div className="flex flex-row-reverse px-full container mx-auto text-xs text-gray-200">
        <div className="bg-starbucks-greenDark py-2 px-4 underline">
          Exciting updates to Starbucks Rewards® >>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeBanner;