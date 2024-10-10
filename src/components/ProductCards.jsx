import React from 'react';
import products from '../products'; // Import the products data

const ProductCards = () => {
  return (
    <div className="flex flex-col space-y-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 max-w-xs mx-auto">
          <img
            src={product.images[0]} // Use the first image for the card
            alt={product.name}
            className="w-full h-32 object-cover rounded-t-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.shortDescription}</p>
          <p className="font-bold text-gray-800">{product.price}</p>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-200"
          >
            Buy Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
