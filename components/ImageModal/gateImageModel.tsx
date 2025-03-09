"use client";
import React, { useState } from "react";
import SteelImageGallery from "./imagemodal"; // Assuming this is the component that receives the 'gates' prop
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gate Designs",
};
interface GateProduct {
  id: number;
  title: string;
  image: string;
  description: string;
  brand: string;
  sku: string;
  productType: string;
  category: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  materialGrade: string;
  features: string;
}

const GateProject = ({ gates }: { gates: GateProduct[] }) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? gates : gates.filter((gate) => gate.category === filter);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center justify-center mb-12">
          <h2 className="text-2xl font-bold text-textColor sm:text-3xl text-center">
            Expert Gate Design & Craftsmanship for Every Property
          </h2>
          <p className="mt-6 text-lg text-textColor text-center">
            At Modern Steel Railing Services, we create custom gates that blend
            security with style. Whether you need a classic or modern design,{" "}
            <br /> our skilled team crafts gates using high-quality materials
            for durability and long-lasting performance. From sliding gates to
            decorative grills, <br /> we offer tailored solutions for
            residential, commercial, and industrial properties. Enhance your
            property’s curb appeal with our expertly crafted gates designed to
            fit your unique needs.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 text-sm font-medium rounded-l-md ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-textColor hover:bg-gray-200"
              } border border-gray-200`}
            >
              All Gates Project
            </button>
            <button
              onClick={() => setFilter("DoubleDoorGate")}
              className={`px-6 py-2 text-sm font-medium ${
                filter === "DoubleDoorGate"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-textColor hover:bg-gray-200"
              } border-t border-b border-gray-200`}
            >
              Double Door Gate
            </button>
            <button
              onClick={() => setFilter("SlidingGate")}
              className={`px-6 py-2 text-sm font-medium rounded-r-md ${
                filter === "SlidingGate"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-textColor hover:bg-gray-200"
              } border border-gray-200`}
            >
              Sliding Gate
            </button>
          </div>
        </div>
        <SteelImageGallery gates={filteredProjects} />
      </div>
    </section>
  );
};

export default GateProject;
