'use client';
import { motion } from 'framer-motion';
import { galleryItems } from "@/commonConstant/constant"

export default function Gallery() {
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
            <img
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
