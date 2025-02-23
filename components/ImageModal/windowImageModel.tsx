'use client'
import React, { useState } from 'react';
import SteelImageGallery from './imagemodal'; // Assuming this is the component that receives the 'gates' prop
import { windows } from '@/commonConstant/constant'; // Ensure that this path is correct
import { Metadata } from 'next';

export const metadata :Metadata = {
  title:"Window Designs"
}

const WindowProject = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? windows
    : windows.filter(window => window.category === filter);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center justify-center mb-12">
          <h2 className="text-2xl font-bold text-textColor sm:text-3xl text-center">
          Precision Window Craftsmanship: Tailored for Your Home’s Elegance
          </h2>
          <p className="mt-6 text-lg text-textColor text-center">
          Upgrade your property with our high-quality, custom-made windows. Expertly designed to fit your style, our windows bring natural light, <br/>energy efficiency, and sophisticated charm to your home.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 text-sm font-medium rounded-l-md ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-textColor hover:bg-gray-200'
              } border border-gray-200`}
            >
              All Window Projects
            </button>
            <button
              onClick={() => setFilter('aluminiumwindow')}
              className={`px-6 py-2 text-sm font-medium ${
                filter === 'aluminiumwindow'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-textColor hover:bg-gray-200'
              } border-t border-b border-gray-200`}
            >
              Aluminium Window
            </button>
            <button
              onClick={() => setFilter('grillwindow')}
              className={`px-6 py-2 text-sm font-medium rounded-r-md ${
                filter === 'grillwindow'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-textColor hover:bg-gray-200'
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
