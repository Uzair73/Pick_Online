"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import StripePaymentForm from "@/components/StripePaymentForm"

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const cartItems = useSelector((state) => state.cart.product_cart);
  const totalAfterDiscount = useSelector((state) => state.cart.totalAfterDiscount);
  console.log("discount value>>", totalAfterDiscount);
  

  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace("$", "")) || 0;
    const quantity = item.quantity || 1;
    return total + itemPrice * quantity;
  }, 0);



  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <>
      <section>
        <div className="container flex justify-between my-10 px-10">
          {/* Billing Details Section */}
          <div className="box flex flex-col gap-3 w-[35vw] p-5">
            <h1 className="text-4xl font-bold mb-5">Billing Details</h1>
            <label htmlFor="firstName" className="text-xl text-[#aca8a8]">First Name*</label>
            <input
              type="text"
              id="firstName"
              className="p-3 rounded-md bg-[#F5F5F5]"
            />
            <label htmlFor="companyName" className="text-xl text-[#aca8a8]">Company Name*</label>
            <input
              type="text"
              id="companyName"
              className="p-3 rounded-md bg-[#F5F5F5]"
            />
            <label htmlFor="streetAddress" className="text-xl text-[#aca8a8]">Street Address*</label>
            <input
              type="text"
              id="streetAddress"
              className="p-3 rounded-md bg-[#F5F5F5]"
            />
            <label htmlFor="apartment" className="text-xl text-[#aca8a8]">Apartment, Floor, etc (optional)*</label>
            <input
              type="text"
              id="apartment"
              className="p-3 rounded-md bg-[#F5F5F5]"
            />
            <label htmlFor="townCity" className="text-xl text-[#aca8a8]">Town/City*</label>
            <input
              type="text"
              id="townCity"
              className="p-3 rounded-md bg-[#F5F5F5]"
            />
            <label htmlFor="phoneNumber" className="text-xl text-[#aca8a8]">Phone Number*</label>
            <input
              type="tel"
              id="phoneNumber"
              className="p-3 rounded-md bg-[#F5F5F5]"
            />
            <label htmlFor="emailAddress" className="text-xl text-[#aca8a8]">Email Address*</label>
            <input
              type="email"
              id="emailAddress"
              className="p-3 rounded-md bg-[#F5F5F5]"
            />
          </div>

          {/* Cart and Payment Section */}
          <div className="flex mt-24">
            <div className="p-4 h-fit w-[30vw]">
              <div className="divide-y divide-gray-300">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-4"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.imageSrc}
                        alt={"img"}
                        width={70}
                        height={70}
                        objectFit="cover"
                        className="p-2"
                      />
                      <span className="text-gray-800 font-medium">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-gray-800 font-semibold">
                      ${parseFloat(item.price.replace("$", "")) * (item.quantity || 1)}
                    </span>
                  </div>
                ))}
              </div>
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
                <span>${totalAfterDiscount ? totalAfterDiscount.toFixed() : 0}</span>
              </div>

              {/* Payment Method Selection */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mt-4">Payment Method</h3>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5"
                    name="paymentMethod"
                    value="bankAccount"
                    onChange={handlePaymentMethodChange}
                  />
                  <div className="flex gap-28">
                  <span className="ml-2 text-gray-700">Bank Account</span>
                  <div className="flex justify-between items-center gap-2">
                  <Image src={'/amex-svgrepo-com.svg'} width={30} height={30} alt="American_Express logo"/>
                  <Image src={'/mastercard-svgrepo-com.svg'} width={30} height={30} alt="American_Express logo"/>
                  <Image src={'/unionpay-svgrepo-com.svg'} width={30} height={30} alt="American_Express logo"/>
                  <Image src={'/visa-svgrepo-com.svg'} width={30} height={30} alt="American_Express logo"/>
                  </div>
                  </div>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    onChange={handlePaymentMethodChange}
                  />
                  <span className="ml-2 text-gray-700">Cash on Delivery</span>
                </label>
              </div>

              {/* Conditional Rendering of Payment Forms */}
              {selectedPaymentMethod === "bankAccount" && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Choose Payment Gateway</h4>
                  <StripePaymentForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
