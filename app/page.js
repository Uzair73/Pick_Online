"use client";
import Image from "next/image";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen py-10">
        <Sidebar />
        {/* Hero section with image slider */}
        <div className="w-[67vw] h-[55vh]">
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
    </>
  );
}
