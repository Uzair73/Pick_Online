"use client";
import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripePaymentForm() {
  const cartItems = useSelector(state => state.cart.product_cart);
  const totalAfterDiscount = useSelector((state) => state.cart.totalAfterDiscount);
  console.log("this is cart items in stripe payment form", cartItems);
  

  const handleCheckout = useCallback(async () => {
    try {
      const res = await axios.post("/api/checkout_session", {
        cartItems,
        totalAfterDiscount,
      });
      const { sessionId } = res.data;
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error("Stripe checkout error:", error.message);
      }
    } catch (err) {
      console.error("Error during checkout:", err);
    }
  }, [cartItems, totalAfterDiscount]);
  

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Pay to Stripe
    </button>
  );
}
