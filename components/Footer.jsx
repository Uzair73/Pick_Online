import Link from 'next/link';
import React from 'react'
import { MdSend } from 'react-icons/md';
const Footer = () => {
  return (
    <>
    <div className='bg-black'>
    <div className="container-fluid flex h-full w-full gap-40 px-8">
      <div className="box flex flex-col justify-start p-4 text-white gap-3">
        <h2 className="font-bold text-3xl self-start">Exclusive</h2>
        <p>Subscribe</p>
        <p>Get 10% Off your first order</p>
        <div className="flex mt-2 items-center bg-black">
          <input type="text" placeholder='Enter your email' className="flex-1 p-2 bg-black text-white placeholder-gray-500" />
          <button className="-mx-8">
            <MdSend className="text-white text-3xl"/>
          </button>
        </div>
      </div>

      <div className="box flex flex-col justify-start p-4 text-white gap-3">
        <p className="font-bold text-xl self-start">Support</p>
        <p>1234 North Street, Suite 100</p>
        <p>City, State, 56789</p>
        <p>exclusive@gmail.com</p>
        <p>(123) 456-7890</p>
      </div>

      <div className="box flex flex-col justify-start p-4 text-white gap-3">
        <p className="font-bold text-xl self-start">Account</p>
        <Link href={'#'}>My Account</Link>
        <Link href={'/login'}>Login/Signup</Link>
        <Link href={'/cart'}>Cart</Link>
        <Link href={'/wishlist'}>Wishlist</Link>
        <Link href={'/shop'}>Shop</Link>
      </div>

      <div className="box flex flex-col justify-start p-4 text-white gap-3">
        <p className="font-bold text-xl self-start">Quick Link</p>
        <Link href={'/privacy-policy'}>Privacy Policy</Link>
        <Link href={'/terms-of-use'}>Terms of Use</Link>
        <Link href={'/faq'}>FAQ</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>
    </div>
    <div className="box p-4 text-gray-500 w-full flex justify-center">
      <p>&copy; {new Date().getFullYear()} Exclusive. All rights reserved.</p>
    </div>
    </div>
    </>
  )
}

export default Footer