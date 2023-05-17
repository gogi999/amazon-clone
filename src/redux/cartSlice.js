import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    productsNumber: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if the product is already in the products array
            const addProductExists = state.products.find(
                (product) => product.id === action.payload.id
            );

            if (addProductExists) {
                addProductExists.quantity += parseInt(action.payload.quantity);
            } else {
                state.products.push({ 
                    ...action.payload, 
                    quantity: parseInt(action.payload.quantity) 
                });
            }

            state.productsNumber += parseInt(action.payload.quantity);
        },
        removeFromCart: (state, action) => {
            // Find the product that we are removing from array
            const productToRemove = state.products.find(
                (product) => product.id === action.payload
            );

            // Remove the quantity from product number
            state.productsNumber = state.productsNumber - productToRemove.quantity;

            // Find index of the product removing 
            const index = state.products.findIndex(
                (product) => product.id === action.payload
            );

            // Remove from the array
            state.products.splice(index, 1);
        },
        incrementInCart: (state, action) => {
            const itemInc = state.products.find((item) => item.id === action.payload);
            if (itemInc.quantity >= 1) {
                itemInc.quantity = itemInc.quantity + 1;
            }
            state.productsNumber = state.productsNumber + 1;
        },
        decrementInCart: (state, action) => {
            const itemDec = state.products.find((item) => item.id === action.payload);
            if (itemDec.quantity === 1) {
                const index = state.products.findIndex(
                    (item) => item.id === action.payload
                );
                state.products.splice(index, 1);
            } else {
                itemDec.quantity--;
            }
            state.productsNumber = state.productsNumber - 1;
        },
    }
});

export const { 
    addToCart, 
    removeFromCart, 
    incrementInCart, 
    decrementInCart 
} = cartSlice.actions;

export default cartSlice.reducer;
