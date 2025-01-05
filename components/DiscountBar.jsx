import React from 'react'

const DiscountBar = ({discountedPrice, classname}) => {

  return (
    <div className={`bg-red-600 text-white text-sm px-4 py-1 rounded w-fit ${classname}`}>
      -{discountedPrice}%
    </div>
  )
}

export default DiscountBar