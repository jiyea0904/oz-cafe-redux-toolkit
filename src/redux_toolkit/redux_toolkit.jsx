/*
import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";


const menuSlice = createSlice({
    name: 'menu',
    initialState: data.menu,
    reducers: {

    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            return [...state, action.payload];            
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

export const store = configureStore({
    reducer: {
        menuReducer: menuSlice.reducer,
        cartReducer: cartSlice.reducer
    }
})


dispatch 하는법
dispatch(cartSlice.actions.addToCart({options, quantity, id:modalMenu.id}));
*/