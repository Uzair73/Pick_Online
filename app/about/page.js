"use client"
import SupprtMenu from '@/components/SupprtMenu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode ,  Pagination } from 'swiper/modules';
import MetaData from '@/components/MetaData';

const page = () => {
  return (
    <>
    <MetaData title="About Us - Pick Online - Discover Our Story and Values" description="Learn about the journey of Pick Online, our commitment to customer satisfaction, and how we're shaping the future of online shopping."/>
      <section>
        <div className='container flex w-screen h-screen my-10'>
          <div className="box flex flex-col w-fit my-28">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-left leading-relaxed">Our Story</h1>
            <div className="text-xl text-gray-700 text-justify leading-normal">
              Since our inception in 2010, Pick-Online has been dedicated to providing
              an exceptional online shopping experience. Our journey began with a small
              team of passionate innovators who wanted to bring a new level of convenience
              and variety to shoppers worldwide. Today, we are proud to have grown into
              a global platform that connects millions of customers with a vast selection
              of products, from the latest tech gadgets to timeless fashion pieces.
              <p className='my-9'>Our commitment to quality, customer service, and continuous improvement
                drives us forward as we look to the future of e-commerce.</p>
            </div>
            </div>
          <div className="box">
            <Image src="/about-img.svg" alt="img" width={900} height={800} objectFit='cover' className='mx-7' />
          </div>
        </div>

        <div className="maincontainer flex gap-10 justify-center my-10">
            <div className="box flex flex-col justify-center text-center items-center gap-2 border py-2 px-3 hover:bg-btn_color hover hover:text-white">
              <div className="container bg-[#C1C0C1] rounded-[50%] py-4 px-4 w-20">
                <img src="/icon_shop.svg" alt="delivery-img" className='h-12 mx-auto bg-black rounded-[50%] px-1'/>
              </div>
              <h2 className='text-xl font-bold uppercase'>10.22k</h2>
              <p>Sallers active our site</p>
            </div>
            <div className="box flex flex-col justify-center text-center items-center gap-2 border py-2 px-3 hover:bg-btn_color hover:text-white">
              <div className="container bg-[#C1C0C1] rounded-[50%] py-4 px-4 w-20">
                <img src="/icon-delivery.svg" alt="delivery-img" className='h-12 mx-auto bg-black rounded-[50%] px-1' />
              </div>
              <h2 className='text-xl font-bold uppercase'>10.22k</h2>
              <p>Monthly Product Sale</p>
            </div>
            <div className="box flex flex-col justify-center text-center items-center gap-2 border py-2 px-3 hover:bg-btn_color hover:text-white">
              <div className="container bg-[#C1C0C1] rounded-[50%] py-4 px-4 w-20">
                <img src="/icon-delivery.svg" alt="delivery-img" className='h-12 mx-auto bg-black rounded-[50%] px-1' />
              </div>
              <h2 className='text-xl font-bold uppercase'>45.30k</h2>
              <p>Customer active our site</p>
            </div>
            <div className="box flex flex-col justify-center text-center items-center gap-2 border py-2 px-3 hover:bg-btn_color hover:text-white">
              <div className="container bg-[#C1C0C1] rounded-[50%] py-4 px-4 w-20">
                <img src="/icon-delivery.svg" alt="delivery-img" className='h-12 mx-auto bg-black rounded-[50%] px-1' />
              </div>
              <h2 className='text-xl font-bold uppercase'>25k</h2>
              <p>Annual gross sale our site</p>
            </div>
          </div>

        {/* Team Section with Swiper */}
        <div className="container flex items-center justify-center py-10 ">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            freeMode={true}
            modules={[FreeMode, Pagination, Autoplay ]}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: false, // Enables dots to be clickable
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="team-slider"
          >
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 51.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-5 mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 46.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-10  mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 51.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-5 mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 51.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-5 mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 51.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-5 mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 51.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-5 mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 51.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-5 mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 51.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-5 mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-member mx-5 w-fit">
                <img src="/image 51.svg" alt="Team Member" className="h-[20rem] object-cover pt-4 px-5 mb-3 bg-[#F5F5F5]" />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <div className="social-links flex justify-start gap-2 mt-2">
                  <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link href="https://facebook.com/janedoe" target="_blank" rel="noopener noreferrer" className="mx-1">
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlide components for other team members */}
          </Swiper>
        </div>
        <SupprtMenu classname={'maincontainer flex justify-between mx-20 my-28'}/>
      </section>
    </>
  );
};

// export const metadata = {
//   title: "About Us - Pick Online - Discover Our Story and Values",
//   description: "Learn about the journey of Pick Online, our commitment to customer satisfaction, and how we're shaping the future of online shopping.",
// };

export default page;
