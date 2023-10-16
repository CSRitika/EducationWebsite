import React from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/heroSection/HeroSection';
import AboutSection from '../components/aboutSection/About';
import Footer from '../components/footer/Footer';
import NewsLetter from '../components/newsletterSection/NewsLetter';
import Testimonial from '../components/testimonialSection/Testimonial';
import ContactForm from '../components/contactForm/ContactForm';
import OurCourses from '../components/ourCoursesSection/OurCourses';
import ApplyForAdmission from '../components/applyForAdmission/ApplyForAdmission';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'rgba(236, 237, 237, 1)'}}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ApplyForAdmission />
      <OurCourses />
      <Testimonial />
      <ContactForm />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;