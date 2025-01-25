"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  isMobileMenuOpen:boolean;
}
const NavLinks = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
   var [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Gate Designs",
      href: "/services",
    },
    {
      name: "Railing Designs",
      href: "/services",
    },
    {
      name: "Window Designs",
      href: "/services",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 py-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-white hover:text-orange-400 font-semibold ${
              isActive(link.href) && "border-b-2 border-orange-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Hamburger Icon */}
      {/* <div className="md:hidden flex items-center">
        <button
          className="text-white p-2"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block w-6 h-1 bg-white mb-2"></span>
          <span className="block w-6 h-1 bg-white mb-2"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div> */}

      {/* Mobile Menu Dialog (Overlay) */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)} // Close menu when clicking outside
      >
        {/* Navigation Links Dialog */}
        <div
          className={`fixed top-0 left-0 w-2/3 bg-gray-800 text-white h-full transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl"
            >
              &times; {/* Close Icon */}
            </button>
          </div>
          <div className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white hover:text-orange-400 font-semibold text-lg ${
                  isActive(link.href) && "border-b-2 border-orange-400"
                }`}
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
