import React from 'react';
import Header from '../components/header/Header';
import AboutHeroPart from '../components/aboutPageSections/AboutHeroPart';
import AboutOnlineLearningExpertise from '../components/aboutPageSections/AboutOnlineExpertise';
import Footer from '../components/footer/Footer';

const About = () => {
  return (
    <>
      <Header />
      <AboutHeroPart />
      <AboutOnlineLearningExpertise />
      <Footer />
    </>
  );
};

export default About;