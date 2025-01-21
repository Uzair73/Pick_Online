import React from 'react'
import { FaUser, FaBox, FaTimesCircle, FaStar, FaSignOutAlt } from 'react-icons/fa';

const Account_menu = () => {
  return (
    <>
    <menu className='absolute z-[1000] top-32 right-14 transition ease-in-out delay-150'>
    <div className="bg-gradient-to-br from-purple-800 to-purple-600 flex w-fit float-end rounded-md">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg text-white w-56">
        <div className="flex items-center mb-4 cursor-pointer">
          <FaUser className="mr-3" />
          <span>Manage My Account</span>
        </div>
        <div className="flex items-center mb-4 cursor-pointer">
          <FaBox className="mr-3" />
          <span>My Order</span>
        </div>
        <div className="flex items-center mb-4 cursor-pointer">
          <FaTimesCircle className="mr-3" />
          <span>My Cancellations</span>
        </div>
        <div className="flex items-center mb-4 cursor-pointer">
          <FaStar className="mr-3" />
          <span>My Reviews</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <FaSignOutAlt className="mr-3" />
          <span>Logout</span>
        </div>
      </div>
    </div>
    </menu>
    </>
  )
}

export default Account_menu