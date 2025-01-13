import { configureStore } from '@reduxjs/toolkit'
import wishlist_slice from './features/wishlist_slice'
import product_quantity from './features/product_quantity'

export const Store = configureStore({
  reducer:{
    wishlist: wishlist_slice,
    product_quantity: product_quantity
  }
})