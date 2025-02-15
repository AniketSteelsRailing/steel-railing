'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from "@/commonConstant/constant"

export default function Testimonials() {
  return (
    <section className="px-6 md:px-12 py-12 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-textColor">Our Happy Clients</h2>
      <p className="text-textColor mt-4 mb-8">Discover why our clients rave about the exceptional quality and craftsmanship of our custom railing and window solutions.</p>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 w-50 px-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg p-6 relative min-w-[300px] md:min-w-[350px]"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-textColor">{testimonial.name}</h3>
              <p className="text-yellow-500">{testimonial.rating}</p>
              <p className="text-textColor mt-2">{testimonial.feedback}</p>
              <span className="absolute top-3 left-3 text-gray-600 text-4xl">“</span>
              <span className="absolute bottom-3 right-3 text-gray-600 text-4xl">”</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
