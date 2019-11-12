import React from 'react';

const Col = ({head, one, two, three, four, five, six, seven, eight}) => {
  return (
    <div className="capitalize text-gray-800 md:mr-2">
      <h2 className="hover:text-gray-700 uppercase font-starbucksLatoBold text-sm p-4 md:p-0 border-gray-500 border-t md:border-none">{head}</h2>
      <ol className="font-starbucksLato text-sm hidden md:block md:w-40 ml-4">
        <li className=""><a href="/">{one}</a></li>
        <li className=""><a href="/">{two}</a></li>
        <li className=""><a href="/">{three}</a></li>
        <li className=""><a href="/">{four}</a></li>
        <li className=""><a href="/">{five}</a></li>
        <li className=""><a href="/">{six}</a></li>
        <li className=""><a href="/">{seven}</a></li>
        <li className=""><a href="/">{eight}</a></li>
      </ol>
    </div>
  );
};

export default Col;