"use client";
import React from "react";
import Image from 'next/image';
import { useState } from "react";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleQuery = async (data: { fname: string; lname: string; email: string; phone: string; message: string; }) => {
    const res = await fetch("/api/auth/password/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setMessage(result.message);

    if (res.status === 201) {
      setIsSuccessful(true);
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <section className="bg-gray-50 py-12">
      {/* Section Header */}
      <div className="animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-center text-3xl font-bold text-gray-700 mb-8 transform transition duration-300 ease-in-out hover:scale-105">
          Get in Touch
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 opacity-75 transform transition duration-300 ease-in-out hover:opacity-100">
          Reach out to us for high-quality steel railing and window solutions? Whether you’re looking for custom designs, installations, or repairs, our expert team at Steel & Window Solutions ensures precision and durability in every project. Let us enhance the security, beauty, and functionality of your space with our premium services
        </p>
      </div>

      {/* Container for Address, Phone, Email, and Social Media */}
      <div className="container mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Address */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg hover:bg-highlight transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 relative transform transition duration-300 ease-in-out hover:scale-105">
            Address
            <span className="block w-12 h-0.5 bg-primary absolute justify-center md:left-0 -bottom-1 transform -translate-x-1/2 md:translate-x-0"></span>
          </h3>
          <p className="text-gray-600">
            Gadget Fixers Services <br />
            Baba Farid Nagar, <br />
            Near Nagoba Sai Mandir, Faras <br />
            Zingabai Takali 440030
          </p>
        </div>

        {/* Phone */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg hover:bg-highlight transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 relative transform transition duration-300 ease-in-out hover:scale-105">
            Phone
            <span className="block w-10 h-0.5 bg-primary absolute left-1/2 md:left-0 -bottom-1 transform -translate-x-1/2 md:translate-x-0"></span>
          </h3>
          <p className="text-gray-600">+91 9172790843</p>
        </div>

        {/* Email */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg hover:bg-highlight transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 relative transform transition duration-300 ease-in-out hover:scale-105">
            Email
            <span className="block w-10 h-0.5 bg-primary absolute left-1/2 md:left-0 -bottom-1 transform -translate-x-1/2 md:translate-x-0"></span>
          </h3>
          <p className="text-gray-600">contact.gadgetfixers@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg hover:bg-highlight transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 relative transform transition duration-300 ease-in-out hover:scale-105">
            Follow us
            <span className="block w-14 h-0.5 bg-primary absolute left-1/2 md:left-0 -bottom-1 transform -translate-x-1/2 md:translate-x-0"></span>
          </h3>
          <div className="flex space-x-4 justify-center md:justify-start mt-2">
            <a href="https://www.facebook.com/gadgetfixers2.0/" className="text-gray-500 hover:text-gray-700 transform transition duration-300 ease-in-out hover:scale-110">
              <Image
                src="/logo/facebook.png"
                height={30}
                width={30}
                alt="facebook"
                objectFit="cover"
                className="rounded-lg"
              />
            </a>
            <a href="https://www.instagram.com/gadgetfixer2.0/" className="text-gray-500 hover:text-gray-700 transform transition duration-300 ease-in-out hover:scale-110">
              <Image
                src="/logo/instagram.png"
                height={30}
                width={30}
                alt="instagram"
                objectFit="cover"
                className="rounded-lg"
              />
            </a>
            <a href="https://www.linkedin.com/in/gadget-fixers/" className="text-gray-500 hover:text-gray-700 transform transition duration-300 ease-in-out hover:scale-110">
              <Image
                src="/logo/linkedin.png"
                height={30}
                width={30}
                alt="linkedin"
                objectFit="cover"
                className="rounded-lg"
              />
            </a>
            <a href="https://wa.me/9172790843" className="text-gray-500 hover:text-gray-700 transform transition duration-300 ease-in-out hover:scale-110">
              <Image
                src="/logo/whatsapp.png"
                height={30}
                width={30}
                alt="whatsapp"
                objectFit="cover"
                className="rounded-lg"
              />
            </a>
            <a href="https://www.youtube.com/@gadgetfixer-x8w" className="text-gray-500 hover:text-gray-700 transform transition duration-300 ease-in-out hover:scale-110">
              <Image
                src="/logo/youtube.png"
                height={30}
                width={30}
                alt="youtube"
                objectFit="cover"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map and Contact Form */}
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-center items-start gap-8 animate__animated animate__fadeIn animate__delay-6s">
        {/* Map */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.945408653561!2d79.0766478!3d21.1943275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c10025054983%3A0x8f9344d8b694a018!2sGadget%20Fixer!5e0!3m2!1sen!2sin!4v1730658381086!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
          ></iframe>
        </div>

        {/* Contact Form */}
        {/* <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-xl"> */}
        {/* Add your contact form code here */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default ContactUs;
