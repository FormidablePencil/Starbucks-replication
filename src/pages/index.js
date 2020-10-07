import React from 'react';
import '../styles/mystyles.css'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LimitedTimeBanner from '../components/LimitedTimeBanner';
import ItemsTemplate from '../components/BavbarLinks/ItemsTemplate';
import {graphql} from "gatsby"
import '../fonts/CreteRound-italic.ttf'
import '../fonts/Lato-Bold.ttf'
import '../fonts/Lato-Regular.ttf'
import Footer from '../components/Footer';
import FormEmail from '../components/FormEmail';

const Index = ({data}) => {
  return (
    <div className="bg-gray-100">
      <LimitedTimeBanner />
      <Navbar />
      <Hero />
      <ItemsTemplate 
        image={data.cranberryBars.childImageSharp.fluid} 
        title={"Season's Teatings"}
        description={'Make your coffee even merrier with our classic Cranberry Bliss® Bar.'}
        action={"Details"}
        />
      <ItemsTemplate 
        image={data.rewardsCard.childImageSharp.fluid} 
        title={"Season's Teatings"}
        description={'Earn Stars in and out of Starbucks® stores with the Starbucks® Rewards Visa® Card and the Starbucks® Rewards Visa® Prepaid Card.'}
        action={"Learn More"}
        bgColor={"bg-starbucks-gray2"}
        />
      <ItemsTemplate 
        image={data.uberEats.childImageSharp.fluid} 
        title={"Season's Teatings"}
        description={'Make your coffee even merrier with our classic Cranberry Bliss® Bar.'}
          details={"Menu limited. Restricted delivery area. Fees subject to change. Prices for Starbucks® items delivered through Uber Eats may be higher than posted in stores or as marked. See the Uber Eats app for details. Small order fee of $2.00 applies to orders under $10."}
          placeIntoClassName={"text-xs italic font-normal pb-5 md:w-20rem"}
        action={"Order "}
        />
      <FormEmail />
      <Footer />
    </div>
  );
};

export const query = graphql`
  {
    cranberryBars: file(relativePath: {eq: "asset7.jpeg"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rewardsCard: file(relativePath: {eq: "asset8.jpeg"}) {
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    uberEats: file(relativePath: {eq: "asset9.jpeg"}) {
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export default Index;