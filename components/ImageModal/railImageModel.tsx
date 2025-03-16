'use client'
import React, { useState } from 'react';
import SteelImageGallery from './imagemodal'; 
import { Metadata } from 'next';

export const metadata :Metadata = {
  title:"Railing Designs"
}

interface RailingProjectProps {
  id: number;
  title: string;
  image: string;
  description: string;
  brand: string;
  sku: string;
  productType: string;
  category: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  materialGrade: string;
  features: string;
}

const RailingProject = ({railings} : {railings: RailingProjectProps[]}) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? railings
      : railings?.filter((railing) => railing.category === filter);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center justify-center mb-12">
          <h2 className="text-2xl font-bold text-textColor sm:text-3xl text-center">
            Custom Railing Designs: Strength and Style for Every Property
          </h2>
          <p className="mt-6 text-lg text-textColor text-center">
            Enhance the beauty and safety of your home with our expertly crafted
            railings. Designed to fit your unique style, <br />
            our railings offer both durability and aesthetic appeal for any
            property.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 text-sm font-medium rounded-l-md ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-textColor hover:bg-gray-200"
              } border border-gray-200`}
            >
              All Railing Projects
            </button>
            <button
              onClick={() => setFilter("glassrailing")}
              className={`px-6 py-2 text-sm font-medium ${
                filter === "glassrailing"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-textColor hover:bg-gray-200"
              } border-t border-b border-gray-200`}
            >
              Glass Railing
            </button>
            <button
              onClick={() => setFilter("steelrailing")}
              className={`px-6 py-2 text-sm font-medium rounded-r-md ${
                filter === "steelrailing"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-textColor hover:bg-gray-200"
              } border border-gray-200`}
            >
              Stainless Steel Railing
            </button>
          </div>
        </div>
        <SteelImageGallery gates={filteredProjects} />
      </div>
    </section>
  );
};

export default RailingProject;