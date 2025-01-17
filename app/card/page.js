"use client";
import Button from "@/components/Button";
import { apply_coupon, remove_cart, update_cart, update_quantity } from "@/redux/features/product_card";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const ProductCard = () => {
  const dispatch = useDispatch();

  // Retrieve cart items from Redux
  const cart_item = useSelector((state) => state.cart.product_cart);
  console.log({ items_to_cart: cart_item });


  const totalAfterDiscount = useSelector((state) => state.cart.totalAfterDiscount);
  const Valid_coupon_codes = useSelector((state) => state.cart.valid_coupon);
  
  const [couponCode, setCouponCode] = useState("");

  // Handle quantity change for a product
  const handleQuantityChange = (id, quantity) => {
    const updatedQuantity = parseInt(quantity, 10);
    console.log("The quantity is>>", updatedQuantity);
    if (!isNaN(updatedQuantity) && updatedQuantity > 0) {
      dispatch(update_quantity({ id, quantity: updatedQuantity })); // Dispatch the updateQuantity action
    }
  };

  // Calculate total cart subtotal
  const subtotal = cart_item.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace("$", "")) || 0; // Parse price
    const quantity = item.quantity || 1; // Default quantity
    return total + itemPrice * quantity;
  }, 0);

const [localcart, set_local_cart] = useState(cart_item)
    const update_Cart = ()=>{
    dispatch(update_cart(localcart));
    console.log("update the cart");
    
  }

  // remove the cart item
  const handle_remove_item = (id)=>{
    dispatch(remove_cart(id))
  }
  // Show empty cart message if no items
  if (cart_item.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center text-4xl">
        Cart is empty
      </div>
    );
  }

  // coupon code functionality
  const handleApplyCoupon = () => {
    if (couponCode.trim() === ""){
      return alert("Please enter a valid coupon code.");
    } else {
      dispatch(apply_coupon({ coupon_code: couponCode }));
    }
  };

  return (
    <>
      <section>
        <div className="container flex flex-col gap-10 my-20">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left text-gray-700 text-lg">Product</th>
                <th className="p-4 text-left text-gray-700 text-lg">Price</th>
                <th className="p-4 text-left text-gray-700 text-lg">
                  Quantity
                </th>
                <th className="p-4 text-left text-gray-700 text-lg">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cart_item.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50 shadow-md"
                >
                  <td className="p-4 flex items-center gap-4">
                    <div className="flex">
                    <ImCross onClick={() => handle_remove_item(item.id)} className="text-xl my-2 p-1 relative left-3 top-[-1.3rem] cursor-pointer text-white rounded-[50%] bg-red-500"/>
                    <Image
                      src={item.imageSrc}
                      alt={'img'}
                      width={100}
                      height={80}
                      objectFit="cover"
                      className="p-2"
                    />
                    </div>
                    <span className="text-gray-800 font-medium">
                      {item.title}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">${parseFloat(item.price.replace("$", ""))}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      min="0"
                      className="border border-gray-300 rounded px-3 py-1 w-16 text-center focus:ring focus:ring-blue-200"
                    />
                  </td>
                  <td className="p-4 text-gray-800 font-semibold">
                  ${parseFloat(item.price.replace("$", "")) * (item.quantity || 1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center">
          <Link href={'/'}>
            <Button
              btn_text={"Return To Shop"}
              classname={
                "p-11 py-3 border border-black rounded-sm font-semibold"
              }
            />
            </Link>
            <Button
              btn_text={"Update Cart"}
              onClick={update_Cart}
              classname={
                "p-11 py-3 border border-black rounded-sm font-semibold"
              }
            />
          </div>
          <div className="flex gap-4 items-center mt-10">
          <input
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border border-black px-3 py-3 rounded-md"
            />
            <Button
              btn_text={"Apply Coupon"}
              onClick={handleApplyCoupon}
              classname={"px-11 py-3 bg-btn_color text-white rounded-md"}
            />
          </div>
          <div className="flex justify-end mt-[-2rem]">
            <div className="w-full md:w-1/3 border-2 border-black rounded p-4">
              <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
              <div className="flex justify-between py-3 mb-2 border-b border-black">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between py-3 mb-2 border-b border-black">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg py-3">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-lg py-3">
                <span>Discount:</span>
                <span>${totalAfterDiscount ? totalAfterDiscount.toFixed() : 0}</span> {/* Use totalAfterDiscount from the state */}
              </div>
              <div className="flex justify-center items-center">
                <Link href={'/checkout'}>
                <Button
                  btn_text={"Proceed to checkout"}
                  classname="px-7 py-2 bg-btn_color text-white rounded hover:bg-red-600"
                />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
