'use client'
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Modern Staircase Railing',
    category: 'railings',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Energy-Efficient Windows',
    category: 'windows',
    image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Glass Balcony Railing',
    category: 'railings',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Commercial Windows',
    category: 'windows',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Custom Steel Railing',
    category: 'railings',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c8e00e1fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Residential Windows',
    category: 'windows',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

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
              All Projects
            </button>
            <button
              onClick={() => setFilter('railings')}
              className={`px-6 py-2 text-sm font-medium ${
                filter === 'railings'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-gray-200`}
            >
              Railings
            </button>
            <button
              onClick={() => setFilter('windows')}
              className={`px-6 py-2 text-sm font-medium rounded-r-md ${
                filter === 'windows'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
            >
              Windows
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

export default Gallery;