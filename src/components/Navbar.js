import React from 'react';
import Img from 'gatsby-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useStaticQuery, graphql } from 'gatsby';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import NavbarLinks from './BavbarLinks/NavbarLinks';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      starbucksLogo: file(relativePath: {eq: "starbucksLogo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
    <div className="container mx-auto bg-gray-100">
      <div className="relative text-sm">
        <div className="px-2 flex justify-between items-start">
          <div>
            <Img
              fluid={data.starbucksLogo.childImageSharp.fluid} 
              className="h-10 w-10 m-3"
              imgStyle={{
              objectFit: "contain"
              }}
            />
          </div>
          <div className="flex p-2 items-center text-gray-700 font-starbucksLato">
            <span className="mr-4 ">Sign In</span>
            <span className="mr-4 border-r border-gray-800 h-4 inline-block"></span>
            <span className="mr-8">Join Now</span>
            <div className=""></div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <FontAwesomeIcon icon={faMapMarkerAlt}
          className="md:hidden mx-2" />
          <FontAwesomeIcon icon={faBars}
          className="md:hidden mx-2" />
        </div>
      </div>
      <NavbarLinks />
    </div>
  );
};


export default Navbar;
