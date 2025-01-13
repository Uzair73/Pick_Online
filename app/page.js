"use client";
import Image from "next/image";
// import productIcon from "/Frame 611.svg";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Sidebar from "@/components/Sidebar";
import DiscountBar from "@/components/DiscountBar";
import { flash_card, categoryData } from "@/api/dummy.js";
import { useState } from "react";
import { FaHeart, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from "@/components/Button";
import CountDown from "@/components/CountDown";
import SupprtMenu from "@/components/SupprtMenu";

// redux hooks
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/features/wishlist_slice";
import Link from "next/link";


export default function Home() {
  console.log({ dummy_data: flash_card, category_data: categoryData });
  const [products, setProducts] = useState(flash_card);
  const [category, setcategory] = useState(categoryData);
  const dispatch = useDispatch()

  // contdown time
  const dealEndTime = new Date('2025-01-15T13:59:59').getTime();

  return (
    <>
      <div className="flex">
        <div className="container">
          <div className="box h-screen">
            <Sidebar />
            {/* Hero section with image slider */}
            <div className="relative left-[20rem] top-[-12rem] w-[67vw] h-[80vh]">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                className="w-full h-full"
              >
                {/* Slides */}
                <SwiperSlide>
                  <Image
                    src="/images/Frame 560.png"
                    layout="fill"
                    alt="Product 1"
                    className="object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://i.imgur.com/ZANVnHE.jpeg"
                    layout="fill"
                    alt="Product 2"
                    className="object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://i.imgur.com/qNOjJje.jpeg"
                    layout="fill"
                    alt="Product 3"
                    className="object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* main page contenct */}
          <section className="container-fluid border-b border-b-[#ccc9c9] my-3 px-4">
            <div className="container my-10">
              <h3 className="text-red-600 text-semibold text-lg font-bold border-l-[12px] border-red-600 px-4">Today's</h3>
              <div className="flex py-10 gap-20 items-start">
                <h2 className="text-3xl font-bold">Flash Sales</h2>
                {/* add the counter */}
                <h2><CountDown dealEndTime={dealEndTime} /></h2>
                {/* end the counter */}
                {/* Add the pagination to the flash sales product card */}
                <div className="relative flex -right-[18vw] gap-5">
                  <Button
                    classname={`left text-xl rounded-[50%] px-3 py-3 ${products.length <= 0 ? '' : 'bg-[#F5F5F5]'}`}
                    btn_text={<FaArrowLeft />}
                    onClick={() => setProducts(prevProducts => {
                      const firstProduct = prevProducts.shift();
                      return [...prevProducts, firstProduct];
                    })}
                    disabled={products.length === true}
                  />
                  <Button
                    classname="right text-xl bg-[#F5F5F5] rounded-[50%] px-3 py-3"
                    btn_text={<FaArrowRight />}
                    onClick={() => {
                      setProducts(prevProducts => {
                        const lastProduct = prevProducts.pop();
                        return [lastProduct, ...prevProducts];
                      });
                      setCurrentIndex(prevIndex => prevIndex + 1);
                    }}
                    disabled={products >= products.length - 1}
                  />
                </div>
              </div>
              {/* add the sales products cards*/}
              <section className="text-gray-600">
                <div className="container -mx-10">
                  <div className="flex my-3 w-[93vw] overflow-hidden">
                    {products.slice(0, 4).map((product, index) => {
                      return (
                        <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full mx-4 my-5">
                          <Link href={`/product/${product.id}`}>
                          <div className="container bg-[#F5F5F5] group">
                            <div className="flex justify-between items-center py-3">
                              <DiscountBar classname={"mx-3"} discountedPrice={product.discountPercentage} />
                              <FaHeart onClick={()=>dispatch(addItem(product))} className='mx-3 cursor-pointer text-black bg-white rounded-lg' />
                            </div>
                            <div className="relative flex justify-center py-4">
                              <Image alt={product.imageAlt} className="object-cover object-center block px-6 group-hover:opacity-80" width={300} height={300} src={product.imageSrc} />
                              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100">
                                <Button classname={'bg-black py-2 w-full text-white font-bold'} btn_text={'Add to Card'} />
                              </div>
                            </div>
                          </div>
                          </Link>
                          <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                            <div className="container flex">
                              <p className="mt-1 text-red-600 font-semibold">{product.price}</p>
                              <p className="mt-1 px-3 line-through text-[#000000]">{product.discountedPrice}</p>
                            </div>
                            {/* Review stars logic */}
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  fill={i < product.rating ? "#ffc107" : "#e4e5e9"}
                                  stroke="#ffc107"
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                ><path d="M12 .587l3.515 7.125 7.485.688-5.5 5.05 1.5 7.55L12 18.9l-6.5 3.1 1.5-7.55-5.5-5.05 7.485-.688z" />
                                </svg>
                              ))}
                              77
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
              {/* end the sales products cards*/}
            </div>
            <Button classname={'relative left-[36vw] flex justify-cente my-4 px-11 py-3 bg-[#DB4444] text-white rounded-md'} btn_text={'View All Products'} />
          </section>


          {/* Category side */}
          <section className="container-fluid border-b border-b-[#ccc9c9] my-3 px-4">
            <div className="container my-10">
              <h3 className="text-red-600 text-semibold text-lg border-l-[12px]  border-red-600 px-4">Categories</h3>
              <div className="flex py-10 gap-5 items-start">
                <h2 className="text-3xl font-bold">Browse By Category</h2>
                {/* Add the pagination to the flash sales product card */}
                <div className="relative flex -right-[49vw] gap-5">
                  <Button
                    classname={`left text-xl rounded-[50%] px-3 py-3 ${products.length <= 0 ? '' : 'bg-[#F5F5F5]'}`}
                    btn_text={<FaArrowLeft />}
                    onClick={() => setcategory(prevProducts => {
                      const firstProduct = prevProducts.shift();
                      return [...prevProducts, firstProduct];
                    })}
                  // disabled={products.length === true}
                  />
                  <Button
                    classname="right text-xl bg-[#F5F5F5] rounded-[50%] px-3 py-3"
                    btn_text={<FaArrowRight />}
                    onClick={() => {
                      setcategory(prevProducts => {
                        const lastProduct = prevProducts.pop();
                        return [lastProduct, ...prevProducts];
                      });
                      setCurrentIndex(prevIndex => prevIndex + 1);
                    }}
                  // disabled={products >= products.length - 1}
                  />
                </div>
              </div>
              {/* add the category cards*/}
              <section className="text-gray-600">
                <div className="container -mx-10">
                  <div className="flex my-3 w-[93vw] overflow-hidden">
                    {category.slice(0, 4).map((product, index) => {
                      return (
                        <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full mx-4 my-5">
                          <div className="container border-2 border-[#c2c0c0] text-black hover:bg-[#DB4444] hover:text-white cursor-pointer w-[70%] h-32 rounded-lg group">
                            <div className="relative flex justify-center py-4">
                              <Image alt={product.imageAlt} className="object-cover object-center block px-6 group-hover:opacity-80" width={100} height={100} src={product.imageSrc} />
                            </div>
                            <h2 className="flex justify-center title-font text-lg font-medium">{product.name}</h2>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
              {/* end the category cards*/}
            </div>
          </section>

          {/* Selling products area */}
          <section className="container-fluid my-3 px-4">
            <div className="container my-10">
              <h3 className="text-red-600 text-semibold text-lg border-l-[12px]  border-red-600 px-4">This Month</h3>
              <div className="flex py-10 gap-5 items-start">
                <h2 className="text-3xl font-bold">Best Selling Products</h2>
                {/* Add the pagination to the flash sales product card */}
                <div className="relative flex -right-[35vw] gap-5">
                  <Button classname={'relative right-[-11vw] flex justify-cente px-11 py-3 bg-[#DB4444] text-white rounded-sm'} btn_text={'View All'} />
                </div>
              </div>
              {/* add the sales products cards*/}
              <section className="text-gray-600">
                <div className="container -mx-10">
                  <div className="flex my-3 w-[93vw] overflow-hidden">
                    {products.slice(0, 4).map((product, index) => {
                      return (
                        <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full mx-4 my-5">
                          <div className="container bg-[#F5F5F5] group">
                            <div className="flex justify-between items-center py-3">
                              <DiscountBar classname={"mx-3"} discountedPrice={product.discountPercentage} />
                              <FaHeart className='mx-3 cursor-pointer text-black bg-white rounded-lg' />
                            </div>
                            <div className="relative flex justify-center py-4">
                              <Image alt={product.imageAlt} className="object-cover object-center block px-6 group-hover:opacity-80" width={300} height={300} src={product.imageSrc} />
                              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100">
                                <Button classname={'bg-black py-2 w-full text-white font-bold'} btn_text={'Add to Card'} />
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                            <div className="container flex">
                              <p className="mt-1 text-red-600 font-semibold">{product.price}</p>
                              <p className="mt-1 px-3 line-through text-[#000000]">{product.discountedPrice}</p>
                            </div>
                            {/* Review stars logic */}
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  fill={i < product.rating ? "#ffc107" : "#e4e5e9"}
                                  stroke="#ffc107"
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                ><path d="M12 .587l3.515 7.125 7.485.688-5.5 5.05 1.5 7.55L12 18.9l-6.5 3.1 1.5-7.55-5.5-5.05 7.485-.688z" />
                                </svg>
                              ))}
                              77
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
              {/* end the sales products cards*/}
            </div>
          </section>

          {/* Deals proucts cover */}
          <section className="w-[90vw] my-3 px-4">
            <div className="container flex justify-around bg-[#000000] text-white">
              <div className="box flex flex-col py-8">
                <p className="text-lg my-3 mx-8 text-[#00FF66]">Categories</p>
                <h2 className="mx-8 my-3 text-5xl leading-normal">Enhance Your<br /> Music Experience</h2>
                <h2><CountDown dealEndTime={dealEndTime} /></h2>
                <Button btn_text={"Buy Now!"} classname={'my-3 mx-8 py-3 px-11 w-fit bg-[#00FF66] text-bold'} />
              </div>
              <div className="flex justify-center items-center" >
                <div className="animate-bounce-up-down">
                  <img src="/Frame 694.svg" alt="music" className="pic-ani drop-shadow-[35px_35px_35px_rgba(255,255,255,0.3)]" />
                </div>
              </div>
            </div>
          </section>

          {/* Our Products sections */}
          <section className="container-fluid my-3 px-4">
            <div className="container my-10">
              <h3 className="text-red-600 text-semibold text-lg border-l-[12px]  border-red-600 px-4">Our Products</h3>
              <div className="flex py-10 gap-5 items-start">
                <h2 className="text-3xl font-bold">Explore Our Products</h2>
                {/* Add the pagination to the flash sales product card */}
                <div className="relative flex -right-[50vw] gap-5">
                  <Button
                    classname={`left text-xl rounded-[50%] px-3 py-3 ${products.length <= 0 ? '' : 'bg-[#F5F5F5]'}`}
                    btn_text={<FaArrowLeft />}
                    onClick={() => setProducts(prevProducts => {
                      const firstProduct = prevProducts.shift();
                      return [...prevProducts, firstProduct];
                    })}
                    disabled={products.length === true}
                  />
                  <Button
                    classname="right text-xl bg-[#F5F5F5] rounded-[50%] px-3 py-3"
                    btn_text={<FaArrowRight />}
                    onClick={() => {
                      setProducts(prevProducts => {
                        const lastProduct = prevProducts.pop();
                        return [lastProduct, ...prevProducts];
                      });
                      setCurrentIndex(prevIndex => prevIndex + 1);
                    }}
                    disabled={products >= products.length - 1}
                  />
                </div>
              </div>
              {/* add the sales products cards*/}
              <section className="text-gray-600">
                <div className="container -mx-10">
                  <div className="flex my-3 w-[93vw] overflow-hidden">
                    {products.slice(0, 4).map((product, index) => {
                      return (
                        <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full mx-4 my-5">
                          <div className="container bg-[#F5F5F5] group">
                            <div className="flex justify-between items-center py-3">
                              <DiscountBar classname={"mx-3"} discountedPrice={product.discountPercentage} />
                              <FaHeart className='mx-3 cursor-pointer text-black bg-white rounded-lg' />
                            </div>
                            <div className="relative flex justify-center py-4">
                              <Image alt={product.imageAlt} className="object-cover object-center block px-6 group-hover:opacity-80" width={300} height={300} src={product.imageSrc} />
                              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100">
                                <Button classname={'bg-black py-2 w-full text-white font-bold'} btn_text={'Add to Card'} />
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                            <div className="container flex">
                              <p className="mt-1 text-red-600 font-semibold">{product.price}</p>
                              <p className="mt-1 px-3 line-through text-[#000000]">{product.discountedPrice}</p>
                            </div>
                            {/* Review stars logic */}
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  fill={i < product.rating ? "#ffc107" : "#e4e5e9"}
                                  stroke="#ffc107"
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                ><path d="M12 .587l3.515 7.125 7.485.688-5.5 5.05 1.5 7.55L12 18.9l-6.5 3.1 1.5-7.55-5.5-5.05 7.485-.688z" />
                                </svg>
                              ))}
                              77
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
              {/* end the sales products cards*/}
            </div>
            <Button classname={'relative left-[36vw] flex justify-cente my-4 px-11 py-3 bg-[#DB4444] text-white rounded-md'} btn_text={'View All Products'} />
          </section>

          {/* new arrival products */}
          <section className="container-fluid my-3 px-4">
            {/* Section Header */}
            <h3 className="text-red-600 font-semibold text-lg border-l-[12px] border-red-600 px-4 my-8">
              Featured
            </h3>
            <h2 className="text-3xl font-bold">New Arrival</h2>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-4 my-16 text-white w-[80vw]">
              {/* PlayStation Card */}
              <div className="box bg-black p-6 flex flex-col justify-center relative">
                <img
                  src="/ps4.svg"
                  alt="PlayStation 5"
                  className="object-contain mb-4 max-h-[35.4rem] absolute top-[10.55rem]"
                />
                <div className="absolute bottom-8 left-6 flex flex-col items-start">
                  <h2 className="font-semibold text-2xl leading-[3rem] text-white">PlayStation 5</h2>
                  <p className="text-[#FAFAFA]">
                    Black and white version of the PS5 <br />coming out and sales.
                  </p>
                  <button className="border-b border-white py-2 px-4 hover:bg-gray-800 transition">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Additional Cards */}
              <div className="grid grid-rows-2 gap-4">
                {/* Women's Collection Card */}
                <div className="box bg-black p-6 flex items-center justify-center text-center">
                  <div className="flex text-start">
                    <div className="relative top-[6rem]">
                      <h1 className="font-semibold mb-4 text-xl">Women's Collections</h1>
                      <p className="mb-4 text-sm">
                        Featured women collections that give you another vibe.
                      </p>
                      <button className="border-b border-white py-2 px-4 hover:bg-gray-800 transition">
                        Shop Now
                      </button>
                    </div>
                    <img
                      src="/women-hat-2.svg"
                      alt="Women's Collection"
                      className="relative left-5 top-[1.50rem]"
                    />
                  </div>
                </div>

                {/* Speaker Card */}
                <div className="flex flex-row justify-between">
                  <div className="box bg-black p-6 flex flex-col items-center justify-center text-start relative">
                    <img
                      src="/speaker.svg"
                      alt="Speakers"
                      className="h-[14rem] mx-auto mb-4 absolute inset-0 m-auto drop-shadow-[0_35px_35px_rgba(255,255,255,0.3)] drop-shadow-[0_-35px_35px_rgba(255,255,255,0.3)]"
                    />
                    <div className="z-10 mb-[-12rem]">
                      <h2 className="mb-2 font-semibold text-2xl">Speakers</h2>
                      <p className="mb-1">Amazon wireless speakers</p>
                      <button className="border-b border-white py-2 px-4 hover:bg-gray-800 transition">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="box bg-black p-6 flex flex-col items-center justify-center text-start relative">
                    <img
                      src="/fragnance.svg"
                      alt="Perfume"
                      className="h-[14rem] mx-auto mb-4 absolute inset-0 m-auto drop-shadow-[0_35px_35px_rgba(255,255,255,0.3)] drop-shadow-[0_-35px_35px_rgba(255,255,255,0.3)]"
                    />
                    <div className="z-10 mb-[-12rem]">
                      <h2 className="mb-2 font-semibold text-2xl">Perfume</h2>
                      <p className="mb-4 uppercase">Gucci Intense our edp</p>
                      <button className="border-b border-white py-2 px-4 hover:bg-gray-800 transition">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* support menu */}
          <SupprtMenu classname={'maincontainer flex justify-between mx-20 my-10'}/>
        </div>
      </div>
    </>
  );
}
