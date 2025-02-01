"use client"
import Link from "next/link";
import NavLinks from "./navLinks";
import logo from "../../public/logo/gf_logo_footer.png";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Get_Quote } from "@/commonConstant/constant";

const navLinks = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "GATE DESIGNS",
    href: "/imagemodel/gate",
  },
  {
    name: "RAILING DESIGNS",
    href: "/imagemodel/railing",
  },
  {
    name: "WINDOW DESIGNS",
    href: "/imagemodel/window",
  },
  {
    name: "ABOUT US",
    href: "/aboutus",
  },
  {
    name: "CONTACT US",
    href: "/contact-us",
  },
];
const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const isActive = (href: string) => pathname === href;
  return (
    // fixed header tag values of classname "bg-gray-900 shadow-md"
    <header className="w-full top-0 left-0 z-30 bg-primary">
      <div className="flex justify-left">
        {/* Logo Section */}
        <div className="container flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold flex items-center">
            <Link href="/">
              {/* <Image
                height={70}
                width={70}
                src={logo}
                alt="Logo"
                className="h-13 w-auto"
              /> */}
            </Link>
          </div>

          {/* Navigation Links - Collapse on small screens */}
          <div className="hidden lg:flex flex-grow justify-end items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-white hover:text-textColor ${isActive(link.href) && "border-b-2 border-highlight"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>,

          </div>

          <div className={`${isMobileMenuOpen ? 'hidden' : 'block'} hidden lg:flex flex-grow justify-end items-center space-x-8`}>
            <Link href="/service-form" className="bg-blue-400 text-white px-6 py-1 rounded-full hover:bg-accent focus:outline-none focus:ring focus:ring-blue-300">
              {Get_Quote}
            </Link>
            <a href="https://wa.me/9172790843" className="relative text-right text-top text-gray-500 hover:text-gray-700">
              <Image
                src="/Images/whatsapp.png"
                height={30}
                width={30}
                alt="whatsapp"
                objectFit="cover"
                className="rounded-lg "
              />
            </a>
          </div>
        </div>

        {/* Action Buttons - Stack on mobile and align on large screens */}

        {/* Mobile Navigation Toggle (Hamburger Menu) */}
        <div className=" flex lg:hidden items-center mr-5">
          <button className="text-white" onClick={() => { toggleMobileMenu() }}>
            <span className="block w-8 h-1 bg-white mb-2"></span>
            <span className="block w-8 h-1 bg-white mb-2"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, shown when toggle is clicked) */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4`} >
        <div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white hover:text-accent font-semibold ${isActive(link.href) && "border-b-2 border-textColor"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Dialog (Overlay) */}
          <div
            className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setMobileMenuOpen(false)} // Close menu when clicking outside
          >
            {/* Navigation Links Dialog */}
            <div
              className={`fixed top-0 left-0 w-2/3 bg-gray-800 text-white h-full transition-transform transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
                    className={`text-white hover:text-textColor font-semibold text-lg ${isActive(link.href) && "border-b-2 border-orange-400"
                      }`}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col items-center py-6 space-y-6">
                <Link href="/service-form" className="bg-blue-500 text-white px-5 py-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                  {Get_Quote}
                </Link>
                <a href="https://wa.me/9172790843" className="relative text-right text-top text-gray-500 hover:text-gray-700">
                  <Image
                    src="/Images/whatsapp.png"
                    height={40}
                    width={40}
                    alt="whatsapp"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;
{/* <div className="flex space-x-4">
          <Link href="/login" className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            {LOGIN}
          </Link>
          <Link
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            {SIGN_UP}
          </Link>
        </div> */}