import React from 'react';
import Header from '../components/header/Header';
import Back from '../common/back/Back';
import BlogCard from '../components/blogsCard/BlogCard';
import Footer from '../components/footer/Footer';

const Blogs = () => {
  return (
    <>
      <Header />
      <Back title='Blog Posts' />
      <BlogCard />
      <h1>hello i m blog</h1>
      <Footer />
    </>
  );
};

export default Blogs;