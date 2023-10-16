import React from 'react';
import Header from '../components/header/Header';
import CoursesHeroPart from '../components/coursesPageSections/CoursesHeroPart';
import Footer from '../components/footer/Footer';
import ViewAllCourses from '../components/coursesPageSections/ViewAllCourses';

const Courses = () => {
  return (
    <>
      <Header />
      <CoursesHeroPart />
      <ViewAllCourses />
      <Footer />
    </>
  );
};

export default Courses;