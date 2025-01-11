import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';

const initialState = {
    items: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItem: {
            reducer: (state, action) => {
                const existingItem = state.items.find(item => item.id === action.payload.id);
                if (!existingItem) {
                    state.items.push(action.payload);
                }
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
})

export const { addItem, removeItem } = wishlistSlice.actions
export default wishlistSlice.reducer