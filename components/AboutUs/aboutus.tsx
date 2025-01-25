import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: '20+ Years Experience',
    description: 'Decades of expertise in custom railing and window solutions.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Expert Team',
    description: 'Highly skilled craftsmen and certified installers.'
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: 'Quality Guaranteed',
    description: 'Premium materials and industry-leading warranties.'
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: 'Timely Delivery',
    description: 'On-time project completion and professional installation.'
  }
];

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Crafting Excellence in Every Detail
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At SteelCraft, we combine traditional craftsmanship with modern innovation to create
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;