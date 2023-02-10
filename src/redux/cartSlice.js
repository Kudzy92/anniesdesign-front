import { createSlice } from "@reduxjs/toolkit";
const savedCart= JSON.parse(localStorage.getItem("cart")) || [];
//intial state
const cartSlice= createSlice({
name:'cart',
initialState:{
    products: [],
    quantity:0,
    total:0,
    customPrice:[],
    cartItems: savedCart || [],
},
reducers:{
    addProduct:(state,action)=>{
        state.products.push(action.payload);
        //state.products.push(action.payload.products);
        state.quantity += 1;
        state.customPrice.push(action.payload.price);
        state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state)=>{
        state.products=[];
        state.quantity =0;
        state.customPrice =[];
        state.total =0;
    }
}
});
export const { addProduct , reset } =cartSlice.actions;
export default cartSlice.reducer;