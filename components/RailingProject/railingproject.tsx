"use client"
import React, { useState } from 'react';

type Project = {
  title: string;
  category: string;
  location: string;
  imgSrc: string;
};

const RailingProjects = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    {
      title: 'THE EMPORIA',
      category: 'Commercial Buildings',
      location: 'Rajkot, Gujarat, India',
      imgSrc: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'KINGSTON',
      category: 'Residential Apartments',
      location: 'Rajkot, Gujarat, India',
      imgSrc: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'HIGH STREET',
      category: 'Residential Apartments',
      location: 'Rajkot, Gujarat, India',
      imgSrc: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'BELLE VUE',
      category: 'Residential Apartments',
      location: 'Rajkot, Gujarat, India',
      imgSrc: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'SUNRISE TOWER',
      category: 'Commercial Buildings',
      location: 'Rajkot, Gujarat, India',
      imgSrc: 'https://via.placeholder.com/300x200',
    },
  ];

  const projectsPerSlide = 4;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project);
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-textColor">Railing Projects</h1>
      </div>

      {/* Slider Section */}
      <div className="relative mt-12 max-w-6xl mx-auto">
        {/* Left Navigation */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 hover:text-white transition-all"
          aria-label="Previous"
        >
          &#x276E;
        </button>

        {/* Slider Content */}
        <div className="grid grid-cols-4 gap-6">
          {projects
            .slice(currentSlide * projectsPerSlide, (currentSlide + 1) * projectsPerSlide)
            .map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project)}
                className="bg-white shadow-lg rounded-lg overflow-hidden group transition-transform transform hover:-translate-y-3 cursor-pointer"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-textColor">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500">{project.category}</p>
                  <p className="text-xs mt-2 text-gray-400">{project.location}</p>
                </div>
                <div className="h-1 bg-accent group-hover:h-2 transition-all"></div>
              </div>
            ))}
        </div>

        {/* Right Navigation */}
        <button
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-accent hover:text-white transition-all"
          aria-label="Next"
        >
          &#x276F;
        </button>

        {/* Slider Indicator */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <span className="text-gray-700 text-sm font-semibold">
            {currentSlide + 1}
          </span>
          <div className="w-20 h-1 bg-gray-300 relative">
            <div
              className="absolute top-0 left-0 h-full bg-accent transition-all"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            ></div>
          </div>
          <span className="text-gray-700 text-sm font-semibold">{totalSlides}</span>
        </div>
      </div>

      {/* Modal Section */}
      {currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setCurrentProject(null)}
              className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full hover:bg-gray-400"
            >
              &times;
            </button>
            <img
              src={currentProject.imgSrc}
              alt={currentProject.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-textColor mt-4">
              {currentProject.title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {currentProject.category}
            </p>
            <p className="text-xs mt-2 text-gray-400">
              {currentProject.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RailingProjects;
