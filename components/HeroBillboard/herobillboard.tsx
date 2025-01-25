// components/HeroWithVideo.js

import Link from "next/link";
const HeroBillboard = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/Videos/railingvideo1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

  {/* Hero Content */}
  <div className="relative z-20 text-center text-white px-4 sm:px-8 md:px-16">
    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 animate-fade-in-up">
    Durable Steel Railings & Windows: Strong, Secure, Stylish
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-10 animate-fade-in-up delay-150">
    Enhance your space with premium steel railings and custom window designs. Offering unmatched strength, safety, and sleek aesthetics for every project. Built to last, crafted to impress.
    </p>
    <Link
      href="/service-form"
      className="inline-block px-8 py-4 bg-white text-textColor font-semibold rounded-full hover:bg-accent transition-transform transform hover:scale-105 duration-300 animate-fade-in-up delay-300"
    >
      Get A Quote
    </Link>
  </div>
</section>
  );
};

export default HeroBillboard;
