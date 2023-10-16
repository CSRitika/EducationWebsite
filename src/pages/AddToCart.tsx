import React from 'react';
import AddToCartHeader from '../components/addToCart/AddToCartHeader';
import { Route, Routes } from 'react-router-dom';
import CartDetails from '../components/addToCart/CartDetails';
import BuyCourse from '../components/addToCart/BuyCourse';

const AddToCart = () => {
  return (
    <>
      <AddToCartHeader />
      <Routes>
        <Route path='/' element={<BuyCourse />} />
        <Route path='/cartDetails/:id' element={<CartDetails />} />
      </Routes>
    </>
  );
};

export default AddToCart;