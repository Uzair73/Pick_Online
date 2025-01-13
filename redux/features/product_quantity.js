const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    quantity: 0
}

const product_quantity = createSlice({
    name: 'product_quantity',
    initialState,
    reducers: {
        increment: (state) =>{
            state.quantity += 1
            console.log(`The product is increase for the ${state.quantity}`);
            
        },
        decrement: (state) =>{
            if(state.quantity > 0){
                state.quantity -= 1
            }
        }
    }
})


export const { increment, decrement } = product_quantity.actions
export default product_quantity.reducer