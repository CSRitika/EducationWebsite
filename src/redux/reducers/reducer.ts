/* eslint no-case-declarations: 0 */
// we will check type here Eg:if type ADD TO CART matches then we will add it to store.

import { BuyCourseDataProps } from '../../types';

// defining its initial state
interface CartState {
  carts: BuyCourseDataProps[];
}

const INIT_STATE: CartState = {
  carts: []  //data we will store into carts
};

// Define action types
enum ActionType {
  ADD_CART = 'ADD_CART',
  DELETE_CART = 'DELETE_CART',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
}

// Define action interfaces
interface AddToCartAction {
  type: ActionType.ADD_CART;
  payload: BuyCourseDataProps;
}
interface DeleteFromCartAction {
  type: ActionType.DELETE_CART;
  payload: number; // Assuming it's the item id to delete
}
interface RemoveFromCartAction {
  type: ActionType.REMOVE_CART_ITEM;
  payload: BuyCourseDataProps;
}
type CartAction = AddToCartAction | DeleteFromCartAction | RemoveFromCartAction;


// Reducer Function it takes two parameters and check type inside switch case
// ... Other code ...

// Reducer Function
export const cartReducer = (state: CartState = INIT_STATE, action: CartAction): CartState => {
  switch (action.type) {
  // adding and incrementing items in cart
  case ActionType.ADD_CART:
    const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
    if (itemIndex >= 0) {
      const updatedCarts = [...state.carts];
      const updatedItem = { ...updatedCarts[itemIndex] };
      updatedItem.duration += 1;
      updatedCarts[itemIndex] = updatedItem;

      return {
        ...state,
        carts: updatedCarts,
      };
    } else {
      const temp = { ...action.payload, duration: 1 };
      return {
        ...state,
        carts: [...state.carts, temp],
      };
    }
  //Deleting single item 
  case ActionType.DELETE_CART:
    const data = state.carts.filter((item) => item.id !== action.payload);
    return {
      ...state,
      carts: data,
    };

  case ActionType.REMOVE_CART_ITEM:
    const itemIndex_decrement = state.carts.findIndex((item) => item.id === action.payload.id);
    if (itemIndex_decrement >= 0 && state.carts[itemIndex_decrement].duration > 1) {
      const updatedCarts = [...state.carts];
      const updatedItem = { ...updatedCarts[itemIndex_decrement] };
      updatedItem.duration -= 1;
      updatedCarts[itemIndex_decrement] = updatedItem;
    
      return {
        ...state,
        carts: updatedCarts,
      };
    } else {
      // Item not found or duration is already 1, return the current state
      return state;
    }
  
  default:
    return state;
  }
};