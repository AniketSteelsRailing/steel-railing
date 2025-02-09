'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rakesh Sharma',
      image: '/Images/boy1.png',
      rating: '⭐⭐⭐⭐⭐',
      feedback: 'Modern steel railing team transformed our home with stunning railings that not only look beautiful but also enhance our safety. The team was professional and attentive to our needs.',
    },
    {
      name: 'Arjun Sing',
      image: '/Images/boy2.png',
      rating: '⭐⭐⭐⭐⭐',
      feedback: 'The window installation service was seamless from start to finish. The new windows have made a huge difference in energy efficiency and appearance. Highly recommend!',
    },
    {
      name: 'Krishna Reddy',
      image: '/Images/boy3.png',
      rating: '⭐⭐⭐⭐⭐',
      feedback: 'Our experience with modern steel railing team was fantastic. They delivered on time and exceeded our expectations with their attention to detail. Our new railings are a perfect blend of functionality and style.',
    },
    {
      name: 'Aahana Kapoor',
      image: '/Images/girl1.png',
      rating: '⭐⭐⭐⭐⭐',
      feedback: 'Working with modern steel railing team was a fantastic experience. They delivered ahead of schedule and their attention to detail was remarkable. The railings are not only stylish but also incredibly sturdy, adding the perfect finishing touch to our home',
    },
    {
      name: 'Ishani Yadav',
      image: '/Images/girl2.png',
      rating: '⭐⭐⭐⭐⭐',
      feedback: 'modern steel railing team truly impressed us with their service. From the initial consultation to the final installation, everything was seamless. The new windows and railings have transformed our home, combining both beauty and durability.',
    }
  ];

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
