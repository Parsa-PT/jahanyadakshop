'use client'
import { createContext , useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext()

const initialState = {
  cart: Cookies.get('cart') ? JSON.parse( Cookies.get('cart')) : { cartItems : []}
}


function reducer (state , action) {
    switch (action.type) {
      case 'ADD_TO_CART' : {
        const newItem = action.payload

        const existingItem = state.cart.cartItems.find(item => item.productid === newItem.productid)

        const cartItems = existingItem ? state.cart.cartItems.map((item) =>
        item.title === existingItem.title ? newItem : item
      )
    : [...state.cart.cartItems, newItem];

    Cookies.set('cart' , JSON.stringify({...state.cart, cartItems }))

    return { ...state, cart: { ...state.cart, cartItems } };

    }

        case "REMOVE_ITEM": {
            const cartItems = state.cart.cartItems.filter(
              (item) => item.productid !== action.payload.productid
            );
      
            Cookies.set('cart' , JSON.stringify({...state.cart, cartItems }))
      
            return { ...state, cart: { ...state.cart, cartItems } };
          }

        default : return state
    }
}

export function StoreProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = { state, dispatch };
  
    return <Store.Provider value={value}>{children}</Store.Provider>
}