import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Productcardforseller = ({id, name, image, price, description }) => {
const [imgIndex,setImgIndex] = useState(0);
const navigate = useNavigate();

const handleEdit = () => {
    navigate(`/productform/${id}`)
}

useEffect(() => {
  const interval = setInterval(() => {
    setImgIndex(prev => (prev + 1) % image.length);
  }, 1000);

  return () => clearInterval(interval);
}, [image.length]);


  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 transition-all hover:shadow-2xl">
      {/* Left Side - Image & Info */}
      <div className="w-full md:w-1/2">
        <img 
          src={image[imgIndex]} 
          alt={name} 
          className="w-full h-60 object-cover rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>

      {/* Right Side - Price & Button */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-gray-900 my-3">{price}</h1>
        <button className="w-full text-white px-5 py-3 rounded-lg bg-red-600 hover:bg-gray-800 transition-colors" onClick={handleDelete}>
          Delete
        </button>
        <button className="w-full text-white px-5 py-3 rounded-lg bg-black hover:bg-gray-800 transition-colors" onClick={handleEdit}>
          edit
        </button>
      </div>
    </div>
  );
};