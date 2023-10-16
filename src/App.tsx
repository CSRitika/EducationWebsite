import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import AddToCart from './pages/AddToCart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/courses/buyCourses/*' element={<AddToCart />} />
      </Routes>
    </Router>
  );
};

export default App;