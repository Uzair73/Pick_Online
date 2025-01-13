"use client";
import Image from "next/image";
import React, { useState } from "react";
import { flash_card } from "@/api/dummy.js";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/redux/features/product_quantity";
import Button from "@/components/Button";
import { CiHeart } from "react-icons/ci";
import { addItem } from "@/redux/features/wishlist_slice";

const ProductDetails = ({params}) => {
  const { id } = React.use(params);
  // State to track the main image
  const [mainImage, setMainImage] = useState("/Frame 611.svg");
  const [product, setProduct] = useState(flash_card);
  const [fill, setFill] = useState(false);
  const dispatch = useDispatch();
  const product_quantity = useSelector((state) => state.product_quantity.quantity);

  const product_id = product[id]

  if(!product_id){
    return <div className="h-screen flex justify-center items-center text-3xl">Product Not Found</div>
  }

  const handleFill = () => {
    setFill(!fill); // Toggle the fill state
    dispatch(addItem(product))
  }

  // List of thumbnail images
  const thumbnails = [
    "/Frame 611.svg",
    "/Frame 694.svg",
    "/Frame663.svg",
  ];

  return (
    <>
      <section className="container mx-auto my-10 px-4">
        {/* Main Product Section */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10">
          {/* Left - Thumbnail Images */}
          <div className="flex flex-col gap-3">
            {product.map((product, index) => (
              <button
                key={index}
                onClick={() => setMainImage(product.imageSrc)}
                className={`p-2 bg-[#F4F4F4] rounded-md border ${
                  mainImage === product.imageSrc ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <Image
                  src={product.imageSrc}
                  width={100}
                  height={100}
                  objectFit="cover"
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded-md"
                />
              </button>
            ))}
          </div>

          {/* Center - Main Image */}
          <div className="flex justify-center items-center bg-[#F4F4F4] rounded-md p-4">
            <Image
              src={mainImage}
              width={400}
              height={400}
              objectFit="contain"
              alt="Main Product"
              className="rounded-md"
            />
          </div>

          {/* Right - Product Details */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold">Havic HV G-92 Gamepad</h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
              <p className="text-sm text-gray-500">(96 reviews)</p>
            </div>
            <p className="text-xl font-bold text-gray-800">$192.00</p>
            <p className="text-gray-600">
              PlayStation 5 Controller Skin. High-quality vinyl with air channel
              adhesive for easy bubble-free install & mess-free removal.
            </p>

            {/* Color Options */}
            <div>
              <h3 className="text-sm font-medium text-gray-700">Colours:</h3>
              <div className="flex gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-400"></div>
                <div className="w-8 h-8 rounded-full bg-black border border-gray-400"></div>
                <div className="w-8 h-8 rounded-full bg-red-500 border border-gray-400"></div>
              </div>
            </div>

            {/* Size Options */}
            <div>
              <h3 className="text-sm font-medium text-gray-700">Size:</h3>
              <div className="flex gap-4 mt-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">
                  S
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">
                  M
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">
                  L
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">
                  XL
                </button>
              </div>
            </div>

            {/* Buttons */}
            {/* Quantity Controls */}
            <div className="flex items-center gap-10 mt-4">
              <div className="flex justify-center item-center">
              <Button
                onClick={() => dispatch(decrement())}
                classname="px-4 py-2 border text-xl border-gray-300 rounded-lg hover:bg-btn_color hover:text-white"
                btn_text={`-`}
              />
              <span className="text-xl border px-6 py-2 border-gray-300 rounded-md font-semibold">{product_quantity}</span>
              <Button
                onClick={() => dispatch(increment())}
                classname="px-4 py-2 border text-xl border-gray-300 rounded-lg hover:bg-btn_color hover:text-white"
                btn_text={`+`}
              />
              </div>
              <div className="flex gap-3 justify-center items-end">
              <Button classname="px-16 py-3 bg-btn_color rounded-lg text-white" btn_text={`Buy Now`}/>
              <CiHeart onClick={handleFill} className={`text-5xl ${fill ? 'bg-yellow-400' : 'text-current'} ${fill ? 'text-white' : 'text-current'} flex justify-center items-center border border-black rounded-md px-2 cursor-pointer`}/>
              </div>
            </div>
              

            {/* Delivery Information */}
            <div className="flex flex-col border-2 pt-4 mt-10 text-sm text-gray-500 w-fit">
              <div className="flex border-b-2 justify-start items-center p-4">
              <Image src={'/icon-delivery-black.svg'} width={50} height={50} objectFit="cover" className="text-sm" alt="delivery img"/>
              <p className="mx-4 text-md font-normal">Free Delivery: Free personal courier delivery available.</p>
              </div>
              <div className="flex justify-start items-center p-4">
              <Image src={'/Icon-return.svg'} width={50} height={50} objectFit="cover" className="text-sm" alt="delivery img"/>
              <p className="mx-4 text-md font-normal">Return Delivery: Return within 30 days for a full refund.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <Image
                  src={"/Frame 611.svg"}
                  width={200}
                  height={150}
                  objectFit="contain"
                  alt={`related item ${index + 1}`}
                  className="rounded-md"
                />
                <h3 className="text-lg font-medium mt-4">
                  Related Product {index + 1}
                </h3>
                <p className="text-gray-700">$150.00</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
