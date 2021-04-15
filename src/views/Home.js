import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Persona from '../components/sections/Persona';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import BackgroundInfo from '../components/sections/BackgroundInfo';
import Cta from '../components/sections/Cta';


const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <BackgroundInfo />
      <Persona />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;