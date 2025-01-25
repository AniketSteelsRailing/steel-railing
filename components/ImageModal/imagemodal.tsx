'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

interface Gate {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Gallery = () => {
  const [selectedGate, setSelectedGate] = useState<Gate | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  const gates: Gate[] = [
    { id: 1, title: 'Main Front Gate', image: '/images/main-front-gate.jpg', description: 'Elegant and modern main front gate design.' },
    { id: 2, title: 'Stainless Steel Gate', image: '/images/stainless-steel-gate.jpg', description: 'Durable and sleek stainless steel gate.' },
    { id: 3, title: 'Iron Main Front Gate', image: '/images/iron-main-front-gate.jpg', description: 'Classic and strong iron main front gate.' },
    { id: 4, title: '4 Folding Gate Design', image: '/images/4-folding-gate.jpg', description: 'Space-saving 4 folding gate design.' },
    { id: 5, title: 'Simple Iron Gate', image: '/images/simple-iron-gate.jpg', description: 'Minimalistic and simple iron gate.' },
    { id: 6, title: 'Curtain Man Gate', image: '/images/curtain-man-gate.jpg', description: 'Intricately designed curtain man gate.' },
    { id: 1, title: 'Main Front Gate', image: '/images/main-front-gate.jpg', description: 'Elegant and modern main front gate design.' },
    { id: 2, title: 'Stainless Steel Gate', image: '/images/stainless-steel-gate.jpg', description: 'Durable and sleek stainless steel gate.' },
    { id: 3, title: 'Iron Main Front Gate', image: '/images/iron-main-front-gate.jpg', description: 'Classic and strong iron main front gate.' },
    { id: 4, title: '4 Folding Gate Design', image: '/images/4-folding-gate.jpg', description: 'Space-saving 4 folding gate design.' },
    { id: 5, title: 'Simple Iron Gate', image: '/images/simple-iron-gate.jpg', description: 'Minimalistic and simple iron gate.' },
    { id: 6, title: 'Curtain Man Gate', image: '/images/curtain-man-gate.jpg', description: 'Intricately designed curtain man gate.' },
    { id: 1, title: 'Main Front Gate', image: '/images/main-front-gate.jpg', description: 'Elegant and modern main front gate design.' },
    { id: 2, title: 'Stainless Steel Gate', image: '/images/stainless-steel-gate.jpg', description: 'Durable and sleek stainless steel gate.' },
    { id: 3, title: 'Iron Main Front Gate', image: '/images/iron-main-front-gate.jpg', description: 'Classic and strong iron main front gate.' },
    { id: 4, title: '4 Folding Gate Design', image: '/images/4-folding-gate.jpg', description: 'Space-saving 4 folding gate design.' },
    { id: 5, title: 'Simple Iron Gate', image: '/images/simple-iron-gate.jpg', description: 'Minimalistic and simple iron gate.' },
    { id: 6, title: 'Curtain Man Gate', image: '/images/curtain-man-gate.jpg', description: 'Intricately designed curtain man gate.' },
    { id: 1, title: 'Main Front Gate', image: '/images/main-front-gate.jpg', description: 'Elegant and modern main front gate design.' },
    { id: 2, title: 'Stainless Steel Gate', image: '/images/stainless-steel-gate.jpg', description: 'Durable and sleek stainless steel gate.' },
    { id: 3, title: 'Iron Main Front Gate', image: '/images/iron-main-front-gate.jpg', description: 'Classic and strong iron main front gate.' },
    { id: 4, title: '4 Folding Gate Design', image: '/images/4-folding-gate.jpg', description: 'Space-saving 4 folding gate design.' },
    { id: 5, title: 'Simple Iron Gate', image: '/images/simple-iron-gate.jpg', description: 'Minimalistic and simple iron gate.' },
    { id: 6, title: 'Curtain Man Gate', image: '/images/curtain-man-gate.jpg', description: 'Intricately designed curtain man gate.' },
    // Add more gate items here as needed
  ];

  const totalPages = Math.ceil(gates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGates = gates.slice(startIndex, endIndex);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Gate Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentGates.map((gate) => (
          <motion.div
            key={gate.id}
            className="cursor-pointer rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedGate(gate)}
          >
            <img
              src={gate.image}
              alt={gate.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold text-center">{gate.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded-lg ${
            currentPage === 1
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
            className={`px-3 py-1 rounded-lg ${
              currentPage === index + 1
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
          className={`px-2 py-1 rounded-lg ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          &rarr;
        </button>
      </div>

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
            <div className="flex flex-col md:flex-row">
              <img
                src={selectedGate.image}
                alt={selectedGate.title}
                className="w-full md:w-1/2 h-64 object-cover"
              />
              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{selectedGate.title}</h3>
                <p className="text-gray-700 mb-4">{selectedGate.description}</p>
                <button
                  onClick={() => setSelectedGate(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </div>
  );
};

export default Gallery;


