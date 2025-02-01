'use client'
import React, { useState } from 'react';

interface Product {
  imageUrl: string;
  brand: string;
  sku: string;
  productType: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  materialGrade: string;
  deliveryTime: string;
  features: string[];
}

const products: Product[] = [
  {
    "imageUrl": '/images/gateImages/gate1.jpg', // Replace with your image path
    "brand": 'S3',
    "sku": 'GLRA0005-24752014',
    "productType": 'Railing',
    "originalPrice": '¥850',
    "discountedPrice": '¥750',
    "discountPercentage": '12% OFF',
    "materialGrade": 'Grade 304',
    "deliveryTime": 'Delivery between 2 hours to 2 days',
    "features": [
      'Material - Stainless Steel 304 grade',
      'Thickness: 1.2 mm',
      'Used in Staircase And Balcony',
      'Price Per Running Feet',
    ],
  },
];

const SteelRailing: React.FC = () => {
  // const [quantity, setQuantity] = useState(1);
   const product = products[0]; // Assuming we are displaying the first product
   
  function handleQuantityChange(arg0: number): void {
    throw new Error('Function not implemented.');
  }

  // const handleQuantityChange = (delta: number) => {
  //   setQuantity((prev) => Math.max(1, prev + delta));
  // };

  return (
    <div className="max-w-4xl mx-auto rounded overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105 flex flex-col md:flex-row">
       {/* <button
                  onClick={() => setSelectedGate(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Close
                </button> */}
       <div className="w-full md:w-2/4">
        <img className="w-full h-64 md:h-full object-cover" src={product.imageUrl} alt="Steel Railing" />
      </div>
      
      <div className="w-full md:w-1/3 p-4 md:p-6">
        <div className="font-bold text-xl mb-2">Steel Railing</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Brand:</span> {product.brand}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">SKU:</span> {product.sku}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Product Type:</span> {product.productType}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-lg line-through text-gray-500">{product.originalPrice}</span>
          <span className="text-2xl font-bold text-red-600 ml-2">{product.discountedPrice}</span>
          <span className="text-sm bg-red-200 text-red-800 font-semibold ml-2 px-2 py-1 rounded-full">
            {product.discountPercentage}
          </span>
        </div>
        <p className="text-gray-700 text-base mt-2">
          <span className="font-semibold">Price Per Sq. Ft. For Material:</span> {product.materialGrade}
        </p>
        {/* <div className="flex items-center mt-4">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
          >
            -
          </button>
          <span className="bg-gray-100 px-4 py-2 text-gray-700">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
          >
            +
          </button>
        </div> */}
        <p className="text-gray-700 text-base mt-2">{product.deliveryTime}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full transition-all duration-300 hover:scale-110">
          GET QUOTE
        </button>
        <p className="text-gray-600 text-sm mt-2">
          Immediately return goods on delivery in case of any damages found.
        </p>
        <div className="mt-4 ">
  {product.features.map((feature, index) => (
    <span
      key={index}
      className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1"  // Changed inline-block to block
    >
      {feature}
    </span>
  ))}
</div>

      </div>
    </div>
  );
};

export default SteelRailing;
