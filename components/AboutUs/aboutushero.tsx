import React from 'react';
import Link from "next/link";
import { features } from "@/commonConstant/constant"
import 'animate.css';
import { Metadata } from 'next';

export const metadata :Metadata = {
  title :"About Us"
}

const AboutUsHero = () => {
  return (
    <section className="bg-gray-50">
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              We Provide Premium Railing & Window Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Elevate your space with custom designs, exceptional durability, and unmatched safety
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/service-form" className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-all transform hover:scale-105">
                <span>Get Quote</span>
              </Link>
              <Link href="/railingproject" className="bg-transparent border-2 border-white text-white px-4 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105">
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="mb-12 lg:mb-0 animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="text-3xl font-bold text-textColor sm:text-4xl mb-6">
              Crafting Excellence in Every Detail
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Modern Steel Railing Services, we combine traditional craftsmanship with modern innovation to create
              stunning railing and window solutions that stand the test of time. Our commitment
              to quality and customer satisfaction has made us a trusted name in the industry.
            </p>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Our mission is to enhance the beauty, safety, and functionality of your space
                through expert craftsmanship and innovative design solutions. We work closely
                with homeowners, architects, and contractors to bring their vision to life.
              </p>
              <p>
                Whether it's a custom railing for your dream home or energy-efficient windows
                for your commercial property, we deliver excellence in every project we undertake.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 animate__animated animate__fadeIn animate__delay-2s">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 items-center text-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-textColor mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
