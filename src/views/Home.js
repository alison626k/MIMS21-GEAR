import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import EvIssue from '../components/sections/EvIssue';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import BackgroundInfo from '../components/sections/BackgroundInfo';
import Cta from '../components/sections/Cta';
import Persona from '../components/sections/Persona';
import EVChargerType from '../components/sections/EVChargerType';


const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <BackgroundInfo />
      <EVChargerType />
      <Persona />
      <EvIssue/>
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;