// components/BookServiceForm.tsx
"use client";
import React, { useState, useTransition } from "react";
// import { devices, brandModels, issues } from "@/commonConstant/constant";
import { serviceInterestedIn } from "@/commonConstant/constant";
import { serviceRequestForm } from "@/api-services/service-request-form/service-request-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormData {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  serviceInterestedIn: string;
  terms: boolean;
}

const BookServiceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    serviceInterestedIn: serviceInterestedIn[0],
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
      [name]: type === "checkbox" ? e.target.checked : value,
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

    if (!formData.serviceInterestedIn) {
      newErrors.issue = "Please select a service in which you are interested.";
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
        serviceInterestedIn: formData.serviceInterestedIn,
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
            serviceInterestedIn: "",
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
      <div className="p-6 bg-white shadow-2xl rounded-lg mt-10 mb-10">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Book Your Service
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

          {/* Device Dropdown */}
          {/* <div className="relative">
            <label
              htmlFor="device"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Select Device
            </label>
            <select
              id="device"
              name="device"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.device}
              onChange={handleChange}
              disabled={isPending}
            >
              <option value="" disabled>
                Select Device
              </option>
              {devices.map((device, index) => (
                <option key={device + index} value={device}>
                  {device}
                </option>
              ))}
            </select>
            {errors.device && (
              <p className="text-sm text-red-500">{errors.device}</p>
            )}
          </div> */}

          {/* Brand/Model Dropdown */}
          {/* <div className="relative">
            <label
              htmlFor="brandModel"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Select Brand Model
            </label>
            <select
              id="brandModel"
              name="brandModel"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.brandModel}
              onChange={handleChange}
              disabled={isPending}
            >
              <option value="" disabled>
                Select Brand Model
              </option>
              {brandModels.map((brand, index) => {
                if (formData.device === "iPhone" && brand === "Apple") {
                  return (
                    <option key={brand + index} value={brand}>
                      {brand}
                    </option>
                  );
                }
                if (
                  formData.device === "Others" ||
                  (formData.device === "Android" && brand !== "Apple")
                ) {
                  return (
                    <option key={brand + index} value={brand}>
                      {brand}
                    </option>
                  );
                }
              })}
            </select>
            {errors.brandModel && (
              <p className="text-sm text-red-500">{errors.brandModel}</p>
            )}
          </div> */}

          {/* Device Name/Version */}
          {/* <div className="relative">
            <label
              htmlFor="deviceVersion"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Device Name/Version
            </label>
            <input
              type="text"
              id="deviceVersion"
              name="deviceVersion"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.deviceVersion}
              onChange={handleChange}
              disabled={isPending}
            />
            {errors.deviceVersion && (
              <p className="text-sm text-red-500">{errors.deviceVersion}</p>
            )}
          </div> */}

          {/* Issue Dropdown */}
          <div className="relative">
            <label
              htmlFor="issue"
              className="absolute top-0 left-3 text-sm text-gray-500 transform -translate-y-1/2 bg-white px-1"
            >
              Select Issue
            </label>
            <select
              id="issue"
              name="issue"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
              value={formData.serviceInterestedIn}
              onChange={handleChange}
              disabled={isPending}
            >
              <option value="" disabled>
                Select Issue
              </option>
              {serviceInterestedIn.map((serviceInterestedIn, index) => (
                <option key={serviceInterestedIn + index} value={serviceInterestedIn}>
                  {serviceInterestedIn}
                </option>
              ))}
            </select>
            {errors.issue && (
              <p className="text-sm text-red-500">{errors.issue}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
              disabled={isPending}
            />
            <span className="text-sm text-gray-600">
              I agree to Gadget Fixers ~ Terms & Conditions
            </span>
          </label>
          {errors.terms && (
            <p className="text-sm text-red-500 !mt-0">{errors.terms}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isPending ? (
              <div className="flex items-center justify-center">
                Submitting...
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white ml-2"></div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookServiceForm;
