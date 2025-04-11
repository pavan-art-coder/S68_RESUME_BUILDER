import React, { useEffect, useState } from 'react';
import { Productcard } from '../Component/Productcard';

  const productdetails=[
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product1",
      price:"$100",
      description:"new product"
    },
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product2",
      price:"$100",
      description:"new product"
    },
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product3",
      price:"$100",
      description:"new product"
    },
    
  ]
  
  export const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:5000/product/get-products") 
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        })
        .catch((err) => {
          console.error("❌ Error fetching products:", err);
          setError(err.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <div className="text-white p-4">Loading...</div>;
    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  
    return (
      <div className='w-full min-h-screen bg-neutral-800'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {products.map((product, index) => (
            <Productcard key={product._id || index} {...product} />
          ))}
        </div>
      </div>
    );
  };
  