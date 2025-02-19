import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
        <>
        <nav className="bg-gray-800 p-4">
            <NavLink to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
            <NavLink to="/my-product" className="text-white px-3 py-2 rounded-md text-sm font-medium">My-product</NavLink>
            <NavLink to="/add-product" className="text-white px-3 py-2 rounded-md text-sm font-medium">Add-product</NavLink>
            <NavLink to="/cart" className="text-white px-3 py-2 rounded-md text-sm font-medium">Cart</NavLink>
        </nav>
        </>
  )
}

export default NavBar