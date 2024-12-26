import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCaretDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className=" w-full bg-neutral-800 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-yellow-500">
              Prime Asset Management
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden relative left-24 md:flex space-x-8 mt-2 ">
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
            <div className="flex">
              <a href="#services" className="hover:text-yellow-500">
                Services
              </a>
              <IoCaretDownOutline className="mt-2 ml-2" />

            </div>

            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>

          </div>
          <button className="bg-yellow-500 px-4 py-2 mt-2 rounded-md hover:bg-yellow-600">
            Sign Up
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-200 hover:text-yellow-500"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90">
          <a
            href="#home"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button
            className="w-full bg-yellow-500 px-4 py-2 mt-2 rounded-md hover:bg-yellow-600"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
