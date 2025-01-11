import { configureStore } from '@reduxjs/toolkit'
import wishlist_slice from './features/wishlist_slice'

export const Store = configureStore({
  reducer:{
    wishlist: wishlist_slice
  }
})