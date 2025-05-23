import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Productcard = ({ id,name, images, price, description }) => {
const [imgIndex,setImgIndex] = useState(0);
const navigate=useNavigate()

useEffect(() => {
  const interval = setInterval(() => {
    setImgIndex(prev => (prev + 1) % images.length);
  }, 1000);

  return () => clearInterval(interval);
}, [images.length]);


  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 transition-all hover:shadow-2xl">
      {/* Left Side - Image & Info */}
      <div className="w-full md:w-1/2">
        <img 
          src={images[imgIndex]} 
          alt={name} 
          className="w-full h-60 object-cover rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>

      {/* Right Side - Price & Button */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-gray-900 my-3">{price}</h1>
        <button className="w-full text-white px-5 py-3 rounded-lg bg-black hover:bg-gray-800 transition-colors"  onClick={()=>navigate(`      product/${id}`)}>
          More Info
        </button>
      </div>
    </div>
  );
};