import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      merryCoffee: file(relativePath: {eq: "merryCoffee.jpeg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  
  return (
    <> 
      <div className=" ">

      <BackgroundImage fluid={data.merryCoffee.childImageSharp.fluid}
        className="bg-perfectlyCentered">  
          {/* I'm going to have to use css in making the screen responsive with media queries for images. Tailwind should work, check gatsby documentation.*/}
        <div className="lg:flex justify-center md:bg-transparent text-gray-100 text-sm mb-3">

          <div className="flex lg:w-hero h-20rem"></div>
          <div className="flex flex-col justify-center lg:bg-starbucks-red lg:absolute px-3 lg:relative lg:ml-20 w-full lg:my lg:w-1/3 ">
            <div className="flex justify-center lg:justify-start text-left">
              <p className="flex-shrink  text-4xl pb-1 px-2 max-w-sm text-gray-200 font-starbucks " style={{
                textShadow: "3px 3px 15px #3F3F2C",
              }}>Merry Coffee</p>
            </div>
            <div className="flex justify-center lg:justify-start text-center lg:text-left">
              <p className="flex-shrink pb-4 max-w-sm font-starbucksP ">This is the season for Peppermint Mocha, Caramel Brulee Latte and Taosted White Chocolate Mocha.</p>
            </div>
            <div className="flex justify-center lg:justify-start pb-4">
              <button className="uppercase border border-gray-100 w-auto py-1 px-5 rounded">Find a store</button>
            </div>
          </div>
        </div>
      </BackgroundImage>

      </div>
    </>
  );
};

export default Hero;