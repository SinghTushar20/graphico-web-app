import React from "react";
import { Facebook, Instagram } from "lucide-react";
import {
  COMPANY_EMAIL_ADDRESS,
  COMPANY_MOTO,
  COMPANY_TAGLINE,
  PHONE_NUMBER,
} from "../utils/constant";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Graphico</h3>
            <p className="text-gray-400">
              {COMPANY_MOTO} <br />
              {COMPANY_TAGLINE}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-400 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <br />
              <div className="flex space-x-4">
                <a
                  href="tel:+91 6200861130"
                  className="text-gray-400 hover:text-white"
                >
                  {PHONE_NUMBER}
                </a>
                <br />
                <a
                  href="mailto:sales.graphico.in@gmail.com"
                  className="text-gray-400 hover:text-white"
                >
                  {COMPANY_EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2014 Heat Transfer Foils. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
