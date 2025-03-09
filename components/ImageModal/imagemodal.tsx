'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
interface Gate {
  id: number;
  title: string;
  image: string;
  description: string;
  brand: string;
  sku: string;
  productType: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  materialGrade: string;
  features: string;
}

interface SteelImageGalleryProps {
  gates: Gate[]; // Array of Gate objects being passed
}

const SteelImageGallery: React.FC<SteelImageGalleryProps> = ({ gates }) => {
  const [selectedGate, setSelectedGate] = useState<Gate | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  // Safely handle undefined or empty gates array
  const totalPages = gates?.length ? Math.ceil(gates.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGates = (Array.isArray(gates) ? gates : []).slice(startIndex, endIndex);

  // const currentGates = gates?.slice(startIndex, endIndex) || [];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // const [quantity, setQuantity] = useState(1);

  // const handleQuantityChange = (delta: number) => {
  //   setQuantity((prev) => Math.max(1, prev + delta));
  // };

  return (
    <div className="container mx-auto p-4">
      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentGates.map((gate) => (
          <motion.div
            key={gate.id}
            className="cursor-pointer rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedGate(gate)}
          >
            <div className="relative group">
              <img
                src={gate.image}
                alt={gate.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg">View More</span>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold text-center">{gate.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded-lg ${currentPage === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          &larr;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-lg ${currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 rounded-lg ${currentPage === totalPages
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          &rarr;
        </button>
      </div>

      {/* Dialog - Only show if a gate is selected */}
      {selectedGate && (
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          open={!!selectedGate}
          onClose={() => setSelectedGate(null)}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-6xl mx-auto rounded overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105 flex flex-col md:flex-row">
              <button
                onClick={() => setSelectedGate(null)}
                className="absolute top-0 right-0 w-6 h-6 mt-3.5 mr-5 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-700"
              >
                <span className="text-2xl">×</span>
              </button>

              <div className="w-full md:w-3/4">
                <img className="w-full md:h-full object-cover" src={selectedGate.image} alt="Gate" />
              </div>

              <div className="w-full md:w-2/3 md:p-6">
                <div className="font-bold text-xl mb-2">{selectedGate.title}</div>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">Brand:</span> {selectedGate.brand}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">SKU:</span> {selectedGate.sku}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">Product Type:</span> {selectedGate.productType}
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-lg line-through text-gray-500">{selectedGate.originalPrice}</span>
                  <span className="text-2xl font-bold text-red-600 ml-2">{selectedGate.discountedPrice}</span>
                  <span className="text-sm bg-red-200 text-red-800 font-semibold ml-2 px-2 py-1 rounded-full">
                    {selectedGate.discountPercentage}
                  </span>
                </div>
                <p className="text-gray-700 text-base mt-2">
                  <span className="font-semibold">Material Grade:</span> {selectedGate.materialGrade}
                </p>

                <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full transition-all duration-300 hover:scale-110">
                  GET QUOTE
                </button>

                <p className="text-gray-600 text-sm mt-2">
                  Immediately return goods on delivery in case of any damages found.
                </p>

                <div className="mt-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 mr-2"
                    >
                      {selectedGate.features}
                    </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </div>
  );
};

export default SteelImageGallery;
