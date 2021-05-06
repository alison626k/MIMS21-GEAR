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
import Equity from '../components/sections/Equity';
import City from '../components/sections/City';
import Future from '../components/sections/Future';
import StoryCity from '../components/sections/StoryCity';
import StoryIssue from '../components/sections/StoryIssue';
import StoryEquity from '../components/sections/StoryEquity';
import NLPIssue from '../components/sections/NLPIssue';
import StoryFuture from '../components/sections/StoryFuture';


const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <BackgroundInfo />
      <EVChargerType />
      <Persona />
      <StoryIssue/>
      <EvIssue/>
      <NLPIssue/>
      <StoryEquity/>
      <Equity/>
      <StoryCity/>
      <City/>
      <StoryFuture/>
      <Future />
    </>
  );
}

export default Home;