import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Phone } from "lucide-react";
import {
  COMPANY_EMAIL_ADDRESS,
  PHONE_NUMBER,
  COMPANY_MOTO,
  COMPANY_NAME,
} from "../utils/constant";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a
                href="mailto:sales.graphico.in@gmail.com"
                className="hover:text-blue-400"
              >
                {COMPANY_EMAIL_ADDRESS}
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <a href="tel:+91 6200861130" className="hover:text-blue-400">
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-lg w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <Link to="/" className="text-xl font-bold text-blue-600">
                {/* {COMPANY_NAME} */}
                <img src="graphico_logo.jpeg" alt="Graphico Logo" className="h-12" />
              </Link>
              {/* <span className="text-sm text-gray-600 italic">
                {COMPANY_MOTO}
              </span> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600"
              >
                Products
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600"
              >
                Services
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-blue-600">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">
                Contact Us
              </Link>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/services"
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/gallery"
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
