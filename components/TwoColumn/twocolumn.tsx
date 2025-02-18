'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Get_Quote } from "@/commonConstant/constant";
import Link from 'next/link';
export default function RailingSolutions() {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 md:px-12 py-12 bg-white">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full md:w-1/2"
      >
        <div className="absolute inset-0 bg-teal-100 rounded-lg scale-110 -z-10"></div>
        <Image
          src="/Images/railingImages/glassRailing/glass_rail1.png" // Ensure the correct path
          alt="Glass Railing"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textColor">
          Premium Railing & Window Solutions
        </h2>
        <p className="mt-4 text-textColor">
          Elevate your property with our custom designs that ensure exceptional durability and safety. Experience tailor-made installations that enhance both aesthetics and functionality.
        </p>
        <ul className="mt-4 mb-10 text-textColor space-y-2">
          <li>✔️ Custom railings designed to match your unique style</li>
          <li>✔️ Expert installations prioritizing safety and efficiency</li>
          <li>✔️ Reliable repair services to maintain your investments</li>
          <li>✔️ Ongoing maintenance packages for lasting performance</li>
        </ul>
        <Link
          href="/service-form"
          className="inline-block px-8 py-2.5 bg-blue-400 text-white font-semibold rounded-full hover:bg-accent transition-transform transform hover:scale-105 duration-300 animate-fade-in-up delay-300"
        >
          {Get_Quote}
        </Link>
      </motion.div>
    </section>
  );
}
