'use client'
import React, { useState } from 'react';
import SteelImageGallery from './imagemodal'; // Assuming this is the component that receives the 'gates' prop
import { windows } from '@/commonConstant/constant'; // Ensure that this path is correct

// Define the Gate interface to type-check the props being passed

// The Home component that will pass the gates array to SteelImageGallery
// export default function SteelGateGallery() {
//   return <SteelImageGallery gates={gates} />; // Ensure gates is being passed as a prop
// }

// Define the Gate interface to type-check the props being passed

// The Home component that will pass the gates array to SteelImageGallery
// export default function SteelGateGallery() {
//   return <SteelImageGallery gates={gates} />; // Ensure gates is being passed as a prop
// }



const WindowProject = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? windows
    : windows.filter(window => window.category === filter);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Latest Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our portfolio of custom railings and window installations
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 text-sm font-medium rounded-l-md ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
            >
              All Window Projects
            </button>
            <button
              onClick={() => setFilter('aluminiumwindow')}
              className={`px-6 py-2 text-sm font-medium ${
                filter === 'aluminiumwindow'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-gray-200`}
            >
              Aluminium Window
            </button>
            <button
              onClick={() => setFilter('grillwindow')}
              className={`px-6 py-2 text-sm font-medium rounded-r-md ${
                filter === 'grillwindow'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
            >
              Grill Window
            </button>
          </div>
        </div>
            <SteelImageGallery gates={filteredProjects} />
      </div>
    </section>
  );
};

export default WindowProject;
