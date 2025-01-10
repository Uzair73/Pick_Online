import Button from '@/components/Button';
import Image from 'next/image'
import React from 'react'
import { IoCallOutline} from "react-icons/io5";
import {TfiEmail} from "react-icons/tfi";

const Contract = () => {
  return (
    <>
    <section>
        <div className="container flex justify-between w-screen my-10">
            <div className="flex flex-col px-10 border shadow-md">
            <div className="box h-fit py-7 flex-col border-b leading-9 border-gray-300">
                <div className="flex items-center gap-3 my-4">
               <IoCallOutline className='text-4xl px-2 rounded-[50%] bg-[#DB4444] text-white'/> 
               <h3 className='font-bold'>Call To US</h3>
               </div>
               {/* <div className='leading-9'> */}
               <p>We are available 24/7, 7 days a week</p>
               <p>Phone: +1 123 456 7890</p>
               {/* </div> */}
            </div>
            <div className="box h-fit py-10 flex-col leading-9">
                <div className="flex items-center gap-3">
               <TfiEmail className='text-4xl px-2 rounded-[50%] bg-[#DB4444] text-white'/> 
               <h3 className='font-bold'>Write To US</h3>
               </div>
               <p className='my-1'>Fill out our form and we will contract you within 24 hours.</p>
               <p>Support Email: support@PickOnline.com</p>
            </div>
            </div>
            <div className="box py-10 px-4 border shadow-md">
                <form className="flex flex-col gap-4">
                    <div className="box flex gap-3">
                        <input type="text" name="name" placeholder="Your Name" required className="p-2 rounded-md bg-[#F5F5F5]"/>
                        <input type="email" name="email" placeholder="Your Email" required className="p-2 rounded-md bg-[#F5F5F5]"/>
                        <input type="tel" name="phone" placeholder="Your Phone Number" required className="p-2 rounded-md bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex py-5">
                        <textarea name="message" placeholder="Your Message" required className="p-4 rounded-md bg-[#F5F5F5] flex-grow" rows="7.5"></textarea>
                    </div>
                        <Button type='submit' btn_text={'Send Message'} classname={"ml-4 px-11 py-2 bg-[#DB4444] text-white rounded-md w-fit self-end"}/>
                </form>
            </div>

        </div>
    </section>
    </>
  )
}

export default Contract