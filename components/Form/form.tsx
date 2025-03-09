"use client";
import React, { useState, useTransition } from "react";
import {railingServices, windowServices, gateServices } from "@/commonConstant/constant";
import { serviceRequestForm } from "@/api-services/service-request-form/service-request-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  selectedService: string;
  serviceDetails: string;
  message: string;
  terms: boolean;
}

const BookServiceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    selectedService: "", // Dropdown for selecting service (railing, window, gate)
    serviceDetails: "", // Corresponding service details
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

	const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      selectedService: e.target.value,
      serviceDetails: "", // Reset the service details when the main service changes
    });
  };																		

  const validateForm = () => {
    const newErrors = {} as Record<string, string>;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    const pincodeRegex = /^\d{6}$/;
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required.";
    } else if (!pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode.";
    }

    if (!formData.selectedService) {
      newErrors.selectedService = "Please select a service type.";
    }

    if (!formData.serviceDetails) {
      newErrors.serviceDetails = "Please select a specific service for the selected type.";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions.";
    }
    setErrors(newErrors);  

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors in the form.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        pincode: formData.pincode,
        serviceType: formData.selectedService,
        serviceDetails: formData.serviceDetails,
        message: formData.message,
      };

      startTransition(async () => {
        try {
          const res = await serviceRequestForm(payload);
          if (res.statusText !== "ok") {
            throw new Error("Form submission failed. Please try again.");
          }
          toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setFormData({
            name: "",
            phone: "",
            address: "",
            pincode: "",
            selectedService: "",
            serviceDetails: "",
            message: "",
            terms: false,
          });
        } catch (error: any) {
          toast.error('Form submission failed. Please try again.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.error(error);
        }
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-6 bg-white shadow-2xl rounded-lg mb-10">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Get a Quote
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.name}
              onChange={handleChange}
              disabled={isPending}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.phone}
              onChange={handleChange}
              disabled={isPending}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="relative">
            <label
              htmlFor="address"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Your Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.address}
              onChange={handleChange}
              disabled={isPending}
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address}</p>
            )}
          </div>

          {/* Pincode */}
          <div className="relative">
            <label
              htmlFor="pincode"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Enter Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.pincode}
              onChange={handleChange}
              disabled={isPending}
            />
            {errors.pincode && (
              <p className="text-sm text-red-500">{errors.pincode}</p>
            )}
          </div>

          {/* Service Dropdown */}
          <div className="relative">
            <label
              htmlFor="selectedService"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Select Service Type
            </label>
            <select
              id="selectedService"
              name="selectedService"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.selectedService}
              onChange={handleServiceChange}				  
            >
              <option value="" disabled>
                Select Service Type
              </option>
              <option value="Railing">Railing</option>
              <option value="Window">Window</option>
              <option value="Gate">Gate</option>
            </select>
            {errors.selectedService && (
              <p className="text-sm text-red-500">{errors.selectedService}</p>
            )}
          </div>

          {/* Service-specific Dropdown */}
          {formData.selectedService && (
            <div className="relative">
              <label
                htmlFor="serviceDetails"
                className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
              >
                Select {formData.selectedService} Service
              </label>
              <select
                id="serviceDetails"
                name="serviceDetails"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
                value={formData.serviceDetails}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select {formData.selectedService} Service
                </option>

                {formData.selectedService === "Railing" &&
                  railingServices.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}

                {formData.selectedService === "Window" &&
                  windowServices.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}

                {formData.selectedService === "Gate" &&
                  gateServices.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
              </select>
              {errors.serviceDetails && (
                <p className="text-sm text-red-500">{errors.serviceDetails}</p>
              )}
            </div>
          )}

          {/* Message */}
          <div className="relative">
             <label
              htmlFor="message"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Your Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-blue-500 cursor-pointer">
                terms and conditions
              </span>
            </span>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms}</p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default BookServiceForm;