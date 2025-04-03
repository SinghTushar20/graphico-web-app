import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@heatfoils.com" className="hover:text-blue-400">info@heatfoils.com</a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <a href="tel:+11234567890" className="hover:text-blue-400">+1 (123) 456-7890</a>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <Link to="/" className="text-xl font-bold text-blue-600">HeatFoils</Link>
              <span className="text-sm text-gray-600 italic">You think, we create</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/gallery" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}