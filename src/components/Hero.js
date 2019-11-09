import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      merryCoffee: file(relativePath: {eq: "merryCoffee.jpeg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  
  return (
    <div>
      <BackgroundImage fluid={data.merryCoffee.childImageSharp.fluid}>
        <h1>Merry Coffee</h1>
        <p>This is the season for Peppermint Mocha, Caramel Brulee Latte and Taosted White Chocolate Mocha.</p>
        <button>Find a store</button>
      </BackgroundImage>
    </div>
  );
};

export default Hero;