import Button from '@/components/Button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <>
    <section>
      <div className="container w-screen h-screen flex gap-[7vw] my-10">
        <div className="box bg-[#CBE4E9] h-[90vh] flex justify-start relative py-10 right-[4rem]">
        <Image src="/login_img.svg" width={600} height={200} objectFit='cover' alt="Login" className='px-10'/>
        </div>
        <div className="box my-20">
          <div className="flex flex-col">
            <h3 className='text-3xl font-semibold'>Create an Account</h3>
            <span className='text-md py-3'>Enter your details below</span>
          <form className="mt-4">
            <div className="mb-4">
              <input type="text" id="text" name="text" required className="mt-1 p-2 block w-full border-b-2 border-gray-300  focus:border-none focus:ring-0 sm:text-sm" placeholder="Name" />
            </div>
            <div className="mb-4">
              <input type="email" id="email" name="email" required className="mt-1 p-2 block w-full border-b-2 border-gray-300  focus:border-none focus:ring-0 sm:text-sm" placeholder="Email" />
            </div>
            <div className="mb-6">
              <input type="password" id="password" name="password" required className="mt-1 p-2 block w-full sm:text-sm border-b-2 border-gray-300 focus:border-none focus:ring-0" placeholder="Password" />
            </div>
            <div className="flex items-center ">
              <Button btn_text={"Create Account"} classname={`bg-btn_color text-white rounded-sm px-40 py-2`}/>
            </div>
            <div className="uppercase flex justify-center items-center my-3">Or</div>
          <div className="mt-4 flex justify-center px-11 py-2 items-center border bg-white rounded-sm border-gray-300">
            <FcGoogle className='text-2xl mx-4'/>
            <Button btn_text={'Sign up with Google'} classname="flex items-center justify-center shadow-sm">
            </Button>
          </div>
          <div className="mt-4 flex justify-center">
            <span className="text-sm">
              Already have an account? 
              <Link href="/login" className="font-medium text-black border-b py-1 mx-2"> Log in</Link>
            </span>
          </div>
          </form>
          </div>
        </div>
      </div>
    </section>
    </> 
  )
}

export const metadata = {
  title: "Signup - Pick Online - Create Your Account",
  description: "Sign up for a Pick Online account to enjoy personalized shopping experiences and exclusive deals on electronics, fashion, and more.",
};

export default Signup