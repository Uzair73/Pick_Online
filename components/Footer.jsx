import Link from "next/link";
import React from "react";
import { MdSend } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% Off your first order</p>
          <div className="flex items-center border border-gray-500 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 p-2 bg-black text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="p-2 bg-gray-700 hover:bg-gray-600">
              <MdSend className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Support</p>
          <p>1234 North Street, Suite 100</p>
          <p>City, State, 56789</p>
          <p>exclusive@gmail.com</p>
          <p>(123) 456-7890</p>
        </div>

        {/* Account Links Section */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Account</p>
          <Link href="#" className="hover:text-gray-400">
            My Account
          </Link>
          <Link href="/login" className="hover:text-gray-400">
            Login/Signup
          </Link>
          <Link href="/card" className="hover:text-gray-400">
            Cart
          </Link>
          <Link href="/wishlist" className="hover:text-gray-400">
            Wishlist
          </Link>
          <Link href="/shop" className="hover:text-gray-400">
            Shop
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Quick Link</p>
          <Link href="/privacy-policy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="hover:text-gray-400">
            Terms of Use
          </Link>
          <Link href="/faq" className="hover:text-gray-400">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Exclusive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
