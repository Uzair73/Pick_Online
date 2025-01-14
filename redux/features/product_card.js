const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  product_cart: [],
};

const cart_slice = createSlice({
  name: "cart",
  initialState,
  discount: 0,
  coupon: null,
  totalAfterDiscount: 0,
  reducers: {
    // add product items to the cart
    add_to_cart(state, action) {
      const new_product = action.payload;
      const which_product = state.product_cart.find(
        (item) => item.id === new_product.id
      );
      if (which_product) {
        which_product.quantity += new_product.quantity;
      } else {
        state.product_cart.push({
          ...new_product,
          quantity: new_product.quantity || 1,
        });
      }
    },
    // update the quantity of a product in the cart
    update_quantity(state, action) {
      const { id, quantity } = action.payload;
      const which_product = state.product_cart.find((item) => item.id === id);
      if (which_product) {
        which_product.quantity = quantity;
      }
    },
    // reset the product quantity
    update_cart:(state,action)=>{
      state.product_cart = action.payload;
    },
    // coupon code logic
    apply_coupon: (state, action) => {
      const { coupon_code } = action.payload;
      const valid_coupon = {
        SAVE10: 0.1,
        SAVE20: 0.2
      };
      if (valid_coupon[coupon_code]) {
        state.coupon = coupon_code;
        const discountRate = valid_coupon[coupon_code];
        console.log("discount val>>", discountRate);

        const subtotal = state.product_cart.reduce((total, item) => {
          const itemPrice = parseFloat(item.price.replace("$", "")) || 0;
          return total + itemPrice * item.quantity;
        }, 0);
        console.log("subtotal>>", subtotal);
        // formula for the discount
        const discountAmount = subtotal * discountRate;
        console.log("discountAmount>>", discountAmount);
        state.discount = discountAmount;
        state.totalAfterDiscount = subtotal - discountAmount;
      } else {
        state.coupon = null;
        state.discount = 0;
        state.totalAfterDiscount = state.product_cart.reduce((total, item) => {
        const itemPrice = parseFloat(item.price.replace("$", "")) || 0;
        return total + itemPrice * item.quantity;
        }, 0)
      }
    },
    remove_cart:(state,action)=>{
      const id = action.payload
      state.product_cart = state.product_cart.filter((item) => item.id !== id)
    }
  },
});

export const { add_to_cart, update_quantity, update_cart, remove_cart, apply_coupon} = cart_slice.actions;
export default cart_slice.reducer;
