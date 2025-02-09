import React from 'react';
import { Shield, AppWindow as Window, PenTool as Tool, Settings } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Custom Railing Design',
    description: 'Bespoke railing solutions tailored to your specific needs and style preferences.'
  },
  {
    icon: <Window className="w-12 h-12 text-blue-600" />,
    title: 'Window Installation',
    description: 'Professional window installation services with energy-efficient options.'
  },
  {
    icon: <Tool className="w-12 h-12 text-blue-600" />,
    title: 'Repair Services',
    description: 'Expert repair services for both railings and windows to ensure lasting durability.'
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: 'Maintenance',
    description: 'Regular maintenance services to keep your installations in perfect condition.'
  }
];

const OurServices = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-textColor sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for all your railing and window needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
            >
              <div className="flex flex-col items-center text-center opacity-0 animate-fade-in animate-delay-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-textColor mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
