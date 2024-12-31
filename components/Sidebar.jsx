import React from 'react'

const Sidebar = () => {
  return (
    <aside className="sidebar mx-20 border-r border-black w-fit p-5">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="list-none">
        <li className="py-2 cursor-pointer">Electronics</li>
        <li className="py-2 cursor-pointer">Jewelry</li>
        <li className="py-2 cursor-pointer">Men's Clothing</li>
        <li className="py-2 cursor-pointer">Women's Clothing</li>
      </ul>
    </aside>
  )
}

export default Sidebar