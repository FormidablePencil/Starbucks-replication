import React from 'react';
import Img from "gatsby-image"

const ItemsTemplate = ({image, title, description, action, bgColor, details, placeIntoClassName}) => {
  return (
    <div className={bgColor}>
      <div className="container flex mx-auto lg:py-12
      ">
        <div className="flex flex-col justify-around items-center mx-auto md:flex-row h-full mx-2 my-2 justify-center lg:justify-between">
          <div className="bg-blue-500 w-20rem sm:w-25rem">         {/* this div that holds the imagee and only allows it to display through this divv  */}
            <Img fluid={image} />
          </div>
          <div className="md:ml-10 lg:ml-20 mt-5">
            <div className="text-center md:text-left text-gray-900 font-semibold">
              <div className="uppercase text-2xl pb-5 font-starbucksLatoBold">{title}</div>
              <div className=" text-md pb-5 md:w-20rem font-starbucks font-thin">{description}</div>
              <div className={placeIntoClassName} style={{fontSize: ".5rem" }}>{details}</div>
              <div className='mb-2'>{action} >></div>
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default ItemsTemplate;