/* when we click on any button of add to cart of any item we are basically sending the 
  data as  item & set value inside payload */
// This function will call under reducer.ts

import { BuyCourseDataProps } from '../../types';


// Function to add data in cart that return an object
export const AddToCart = (item: BuyCourseDataProps) => {
  return {
    type: 'ADD_CART',
    payload: item 
  };
};

// Function to delete data in cart that return an object
export const DeleteFromCart = (id: number) => {
  return {
    type: 'DELETE_CART',
    payload: id 
  };
};

//Removing items while decrementing
export const RemoveFromCart = (item: BuyCourseDataProps) => {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: item 
  };
};