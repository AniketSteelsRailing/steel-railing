'use client'
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import AuthForm from '../authentication/authform';
import BookServiceForm from '../Form/form'

const HomePageContact = () => {
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
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          Reach out to us for high-quality steel railing and window solutions? Whether you’re looking for custom designs, installations, or repairs, our expert team at Steel & Window Solutions ensures precision and durability in every project. Let us enhance the security, beauty, and functionality of your space with our premium services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div >
        {isSuccessful ? (
          <p className="text-green-500 text-center text-lg font-semibold">Welcome!</p>
        ) : (
          <BookServiceForm/>
          // <AuthForm mode="Query" onSubmit={handleQuery} />
        )}
            
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-2xl rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@steelcraft.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      123 Craftsmanship Lane<br />
                      Suite 100<br />
                      Design District, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Emergency Service
              </h3>
              <p className="text-gray-600 mb-2">
                Available 24/7 for urgent repairs and maintenance.
              </p>
              <p className="text-gray-600 mb-2">
              We provide fast, reliable emergency services for steel railings, windows, and gates. Whether it's urgent repairs, replacements, or installations, our expert team is available.
              </p>
              <button className="w-full bg-red-400 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageContact;