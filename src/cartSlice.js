import { createSlice } from "@reduxjs/toolkit";


// interface IState {
//     cartItems: ICard[],
//     amount: number,
//     total: number,
//   }


const initialState  = {
    cartItems: [],
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // clearCart: (state) => {
        //     state.cartItems = [];
        // },
        // removeItem: (state, action) => {
        //     const itemId = action.payload;
        //     state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        //     cartSlice.caseReducers.calculateTotals(state);
        // },
        updateCartAmount: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);
            cartItem.amount = Number(action.payload.amount);
            cartSlice.caseReducers.calculateTotals(state);
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
        addToCart: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);
            if(!cartItem){
                state.cartItems.push(action.payload);
            }else{
                cartItem.amount += action.payload.amount;
            }
            cartSlice.caseReducers.calculateTotals(state);

        }
    }
})

// console.log(cartSlice);
export const { clearCart, removeItem, updateCartAmount, decrease, calculateTotals, addToCart } = cartSlice.actions;

export default cartSlice.reducer;