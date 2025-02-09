'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
  const galleryItems = [
    {
      title: 'Transform Your Space',
      description: 'Elevate your property with our tailored railing solutions, combining aesthetic appeal with superior safety.',
      image: '/Images/gallery3.png',
    },
    {
      title: 'Unmatched Quality',
      description: 'Our precision window installations are designed to improve energy efficiency while enhancing your property’s visual appeal.',
      image: '/Images/gallery5.png',
    },
    {
      title: 'Safety and Durability',
      description: 'Our railings are built with the highest standards of safety and durability, ensuring peace of mind for every homeowner.',
      image: '/Images/gallery4.png',
    },
    {
      title: 'Custom Designs',
      description: 'Bespoke railing designs tailored to fit your unique style and functional needs can transform any space into a statement.',
      image: '/Images/gallery2.png',
    },
    {
      title: 'Elevate Aesthetics',
      description: 'Windows that match your décor and enhance your home’s charm while maintaining energy efficiency are within your reach.',
      image: '/Images/gallery9.png',
    },
    {
      title: 'Precision Installation',
      description: 'Our expert team guarantees seamless installations, adhering to the tightest schedules while maintaining the highest standards.',
      image: '/Images/gallery7.png',
    },
    {
      title: 'Inspiring Craftsmanship',
      description: 'Highlighting fine details, each railing and window reflects a commitment to artistry and quality that you can rely on.',
      image: '/Images/gallery8.png',
    },
    {
      title: 'Timeless Appeal',
      description: 'Discover how our premium materials and sleek designs combine to create enduring beauty in your living and workspaces.',
      image: '/Images/gallery6.png',
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-textColor text-center mb-8">
        Our Exquisite Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-textColor">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
