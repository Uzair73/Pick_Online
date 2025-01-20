"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const access_token = useSelector((state)=>state.auth_token.access_token)
  // if(!access_token){
  //   return <div>Not logged in</div>;
  // }

  return (
    <nav className='container-fluid border-b border-black'>
      <div className="flex justify-center w-full h-14 bg-black py-4 text-white">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <button className='font-bold mx-3'>Shop Now</button>
      </div>
      <div className='flex justify-between mx-10 my-5 items-center'>
        <span className='font-bold text-2xl'>Exclusive</span>
        <ul className='flex gap-4 mx-20'>
          <Link href={"/"}><li className='cursor-pointer'>Home</li></Link>
          <Link href={"/contact"}><li className='cursor-pointer'>Contact</li></Link>
          <Link href={"/about"}><li className='cursor-pointer'>About</li></Link>
          <Link href={"/signup"}><li className='cursor-pointer'>Signup</li></Link>
        </ul>
        <div className='flex items-center'>
          <input className='px-4 py-2 rounded-lg' type="search" placeholder='What are you looking for?'/>
          {access_token ? (
            <>
              <FaHeart className='mx-3 cursor-pointer' />
              <FaShoppingCart className='cursor-pointer' />
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar