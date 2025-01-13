"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image';
import DiscountBar from '@/components/DiscountBar';
import Button from '@/components/Button';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { removeItem } from '@/redux/features/wishlist_slice';

const WishlistCard = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)
  console.log({wishlistItems: wishlistItems});
  const dispatch = useDispatch()
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
    console.log('remove the item by id', id);
    
  }
  
  return (
    <>
      <section>
        <div className="container mx-auto my-20">
          <div className="flex justify-between items-center">
            <h3 className='mx-10 text-2xl'>{`Wishlist (${wishlistItems.length})`}</h3>
            <Button btn_text={'Move to all Bag'} classname={'border border-[#000000] rounded-md p-3 px-11 font-semibold'}/>
          </div>
          {wishlistItems.length > 0 ? (
            <div className="flex flex-wrap -mx-4">
              {wishlistItems.map((item, index) => (
                <div key={item.id} className="p-4 w-fit">
                  <div className="container bg-[#F5F5F5] group">
                            <div className="flex justify-between items-center py-3 px-2">
                              {/* <DiscountBar classname={"mx-3"} discountedPrice={item.discountPercentage} /> */}
                              <RiDeleteBin6Line onClick={()=> handleRemoveItem(item.id)} className='bg-white rounded-[50%] text-4xl cursor-pointer p-2 border border-gray-300'/>
                            </div>
                            <div className="relative flex justify-center py-4">
                              <Image alt={item.imageAlt} className="object-cover object-center block px-6 group-hover:opacity-80" width={200} height={300} src={item.imageSrc} />
                              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100">
                                 <div className="bg-black text-white flex justify-center items-center w-full p-2 rounded-sm cursor-pointer">
                                    <FaCartShopping className='text-xl mx-2'/>
                                    <Button classname={'text-white font-semibold'} btn_text={'Add to Cart'} />
                                 </div>
                              </div>
                            </div>
                          </div>
                    <div className="pt-4 pb-2">
                      <h5 className="text-xl font-bold">{item.title}</h5>
                      <p className="text-gray-700">{item.description}</p>
                      <div className="container flex">
                          <p className="mt-1 text-red-600 font-semibold">{item.price}</p>
                          <p className="mt-1 px-3 line-through text-[#000000]">{item.discountedPrice}</p>
                      </div>
                    </div>
                </div>
              ))}
            </div>

            // more products to wishlist
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-500">Your wishlist is empty.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default WishlistCard