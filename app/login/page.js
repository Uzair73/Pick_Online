"use client"
import Button from '@/components/Button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { login_handler } from '@/api_handler';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setAuth_Token } from '@/redux/features/auth';
import { useForm } from "react-hook-form"

const Login = () => {
  const navigate = useRouter()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission logic
  const onSubmit = async (data) => {
    try {
      const res_data = await login_handler(data);
      if(res_data.access_token && res_data.refresh_token){
        dispatch(setAuth_Token(res_data.access_token, res_data.refresh_token))
      }
      navigate.push('/')
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
    <section>
      <div className="container w-screen h-screen flex gap-[7vw] my-10">
        <div className="box bg-[#CBE4E9] h-[90vh] flex justify-start relative py-10 right-[4rem]">
        <Image src="/login_img.svg" width={600} height={200} objectFit='cover' alt="Login" className='px-10'/>
        </div>
        <div className="box my-20">
          <div className="flex flex-col">
            <h3 className='text-3xl font-semibold'>Log in to Pick-Online website</h3>
            <span className='text-md py-3'>Enter your details below</span>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input type="email" id="email" {...register("email", { required: true})} className="mt-1 p-2 block w-full border-b-2 border-gray-300 focus:border-none focus:ring-0 sm:text-sm" placeholder="Enter your Email" />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="mb-6">
                <input type="password" id="password" {...register("password", { required: "Password is required", minLength: { value: 3, message: "Password must be at least 3 characters" }, maxLength: { value: 8, message: "Password must be no more than 8 characters" }})} className="mt-1 p-2 block w-full sm:text-sm border-b-2 border-gray-300 focus:border-none focus:ring-0" placeholder="Password" />
                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
              </div>
              <div className="flex items-center justify-between">
                <Button type="submit" btn_text={"Login"} classname={`bg-btn_color text-white rounded-md px-11 py-3`}/>
                <div className="text-sm mx-12">
                  <a href="#" className="font-medium text-red-600"> Forgot your password? </a>
                </div>
              </div>
              <div className="uppercase flex justify-center items-center my-3">Or</div>
              <div className="mt-4 flex justify-center px-11 py-2 items-center border bg-white rounded-sm border-gray-300">
                <FcGoogle className='text-2xl mx-4'/>
                <Button btn_text={'Sign in with Google'} classname="flex items-center justify-center shadow-sm">
                </Button>
              </div>
              <div className="mt-4 flex justify-center">
                <span className="text-sm">
                  Don't have an account? 
                  <Link href="/signup" className="font-medium text-black border-b py-1 mx-2"> Sign up</Link>
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

export default Login