'use client'
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Modern Staircase Railing',
    category: 'railings',
    image: '\/images\/railingImages\/glassRailing\/glass_rail1.png'
  },
  {
    id: 2,
    title: 'Energy-Efficient Windows',
    category: 'windows',
    image: '\/images\/windowImages\/aluminiumWin\/alumwin10.png'
  },
  {
    id: 3,
    title: 'Glass Balcony Railing',
    category: 'railings',
    image: '\/images\/railingImages\/glassRailing\/glass_rail7.png'
  },
  {
    id: 4,
    title: 'Commercial Windows',
    category: 'windows',
    image: '\/images\/windowImages\/aluminiumWin\/alumwin7.png'
  },
  {
    id: 5,
    title: 'Commercial Gates',
    category: 'gates',
    image: '\/images\/gateImages\/slidinggate\/slide_gate5.png'
  },
  {
    id: 6,
    title: 'Custom Steel Railing',
    category: 'railings',
    image: '\/images\/railingImages\/steelRailing\/steel_rai4.png'
  },
  {
    id: 7,
    title: 'Custom Sliding Gates',
    category: 'gates',
    image: '\/images\/gateImages\/slidinggate\/slide_gate1.png'
  },
  {
    id: 8,
    title: 'Residential Windows',
    category: 'windows',
    image: '\/images\/windowImages\/steelGrillWin\/grill_win2.png'
  },
  {
    id: 9,
    title: 'Residential Gates',
    category: 'gates',
    image: '\/images\/gateImages\/doubledoorgate\/door_gate9.png'
  }
];

const OurRailingProject = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-textColor sm:text-4xl">
            Our Latest Projects
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Explore our portfolio of custom railings, windows and gates installations
          </p>
          <p className="mt-5 text-gray-600">
          Transform your space with our premium steel railing, windows, and gate solutions, designed for both durability and elegance. Crafted with precision, our steel railings offer safety without compromising on style, adding a modern touch to balconies, staircases, and more. Our custom steel windows provide sleek, contemporary aesthetics with exceptional strength and energy efficiency. For an added layer of security and curb appeal, our robust steel gates are built to last and create an impressive first impression. Whether you're enhancing your home's exterior or designing an industrial masterpiece, our steelwork is the ideal choice for functionality and sophistication.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 text-sm font-medium rounded-l-md ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              } border border-gray-300`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('railings')}
              className={`px-6 py-2 text-sm font-medium ${
                filter === 'railings'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              } border-t border-b border-gray-300`}
            >
              Railings
            </button>
            <button
              onClick={() => setFilter('windows')}
              className={`px-6 py-2 text-sm font-medium ${
                filter === 'windows'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-textColor hover:bg-gray-200'
              } border border-gray-300`}
            >
              Windows
            </button>
            <button
              onClick={() => setFilter('gates')}
              className={`px-6 py-2 text-sm font-medium rounded-r-md ${
                filter === 'gates'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              } border border-gray-300`}
            >
              Gates
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 capitalize">
                    Category: {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRailingProject;