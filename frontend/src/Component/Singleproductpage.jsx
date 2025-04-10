import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Singleproductpage = () => {
  const [product, setproduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setquantity] = useState(1); // Start from 1 for better UX
  const { id } = useParams();

  const cart = async (email, productid, productname, quantity) => {
    try {
      const response = await axios.post('http://localhost:5000/cart', {
        email: email, // Replace this with logged-in user's email if available
        productid: productid,
        productname: productname,
        quantity: quantity,
      });
      console.log('Added to cart:', response.data.cart);
      alert('Item added to cart successfully!');
    } catch (err) {
      console.error('Cart error:', err);
      alert('Failed to add item to cart.');
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        console.log('Fetched product:', response.data.product);
        setproduct(response.data.product);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrement = () => {
    setquantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setquantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Failed to load product. Please try again later.</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        {product.images && product.images.length > 0 ? (
          <img
            src={`http://localhost:5000${product.images[0]}`}
            alt={product.name}
            className="w-full object-contain max-h-[500px]"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            No Image Available
          </div>
        )}
      </div>

      {/* Right: Details */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>

        <div>
          <h2 className="text-xl font-medium text-gray-700">Description</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>

        <div className="flex flex-wrap gap-x-10">
          <div>
            <h2 className="text-xl font-medium text-gray-700">Category</h2>
            <p className="text-gray-600 mt-2">{product.category}</p>
          </div>

          {product.tags && product.tags.length > 0 && (
            <div>
              <h2 className="text-xl font-medium text-gray-700">Tags</h2>
              <div className="mt-2 flex flex-wrap">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-10 mt-5">
          <div>
            <h2 className="text-xl font-medium text-gray-700">Price</h2>
            <p className="text-gray-600 text-lg font-semibold">${product.price}</p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-700">Quantity</h2>
            <div className="flex items-center gap-2 mt-2">
              <div
                onClick={handleDecrement}
                className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 active:scale-95"
              >
                <FaMinus />
              </div>
              <div className="px-4 py-1 bg-gray-100 rounded-lg text-center pointer-events-none">
                {quantity}
              </div>
              <div
                onClick={handleIncrement}
                className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 active:scale-95"
              >
                <FaPlus />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => cart('user@example.com', product._id, product.name, quantity)}
          className="mt-4 bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 transition-transform duration-200 hover:-translate-y-1 active:translate-y-0"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Singleproductpage;
