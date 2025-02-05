"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import Account_menu from './Account_menu';
import Badge from '@mui/material/Badge';
import { get_user_profile } from '@/api_handler';
import Image from 'next/image';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const access_token = useSelector((state) => state.auth_token.access_token);
  const wishlist_len = useSelector((state) => state.wishlist.items);
  const cart_item = useSelector((state) => state.cart.product_cart);

  useEffect(() => {
    if (access_token) {
      get_user_profile(access_token).then((response) => {
        if (response && response.avatar) {
          setProfileImage(response.avatar);
        }
      });
    }
  }, [access_token]);

  const toggle_account_menu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className='container-fluid border-b border-black sticky top-0 z-50 bg-[#f4f4f4]'>
      <div className="flex justify-center w-full h-14 bg-black py-4 text-white">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <button className='font-bold mx-3'>Shop Now</button>
      </div>
      <div className='flex justify-between mx-10 my-5 items-center'>
        <span className='font-bold text-2xl'>Pick Online</span>
        <ul className='flex gap-4 mx-20'>
          <Link href={"/"}><li className='cursor-pointer'>Home</li></Link>
          <Link href={"/contact"}><li className='cursor-pointer'>Contact</li></Link>
          <Link href={"/about"}><li className='cursor-pointer'>About</li></Link>
          <Link href={"/signup"}><li className='cursor-pointer'>Signup</li></Link>
        </ul>
        <div className='flex items-center'>
          <input className='px-4 py-2 rounded-lg' type="search" placeholder='What are you looking for?' />
          {access_token ? (
            <>
              <div className="relative flex items-center">
                <Link href={'/wishlist'}>
                  <Badge badgeContent={wishlist_len.length} color="error">
                    <FaRegHeart className='mx-3 cursor-pointer text-2xl' />
                  </Badge>
                </Link>
              </div>
              <div className="relative flex item-center">
                <Link href={'/cart'}>
                  <Badge badgeContent={cart_item.length} color="error" max={99}>
                    <MdOutlineShoppingCart className='mx-3 cursor-pointer text-2xl' />
                  </Badge>
                </Link>
              </div>
              <div onClick={toggle_account_menu} className='mx-3 p-2 cursor-pointer hover:bg-btn_color hover:text-white rounded-[50%]'>
                {profileImage ? (
                  <Image src={profileImage} alt="Profile Image" className='rounded-[50%]' width={40} height={40} />
                ) : (
                  <RiAccountCircleLine className='text-5xl' />
                )}
              </div>
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>
      {toggle && <Account_menu />}
    </nav>
  );
};

export default Navbar;
