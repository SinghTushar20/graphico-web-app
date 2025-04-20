import React from 'react';

export function About() {
  return (
    <div className="pt-16">
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>

          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-semibold">Your Trusted Partner in Heat Transfer Solutions</h3>
              <p className="text-gray-600">
                Welcome to <strong>Graphico</strong>, a leading name in Heat Transfer Printing and In-Mould Labelling. With a legacy rooted in innovation and quality, we specialize in developing proprietary coatings to deliver cost-effective, customer-focused decoration solutions across industries.
              </p>
              <p className="text-gray-600">
                Our customized Heat Transfer Foils and In-Mould Labels seamlessly enhance the look and durability of your products. These solutions are widely trusted in applications ranging from stationery and home appliances to cosmetics and industrial articles.
              </p>
              <ul className="space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Industry-leading quality and durability</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized solutions for various substrates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced pigments, solvents, and resins sourced globally</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">State-of-the-Art Infrastructure</h3>
              <p className="text-gray-600">
                Our cutting-edge production units in <strong>Vapi</strong> and <strong>Surat, Gujarat</strong>, are equipped with fully automatic rotogravure machines featuring computerized registration and up to 12-colour printing capability. With 4 high-speed machines and a full-fledged quality control department, we ensure consistent excellence with every batch.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Our Product Range</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside text-left mx-auto max-w-2xl">
                <li>Custom HTL foils for houseware, thermoware, paint, lubricant, and stationery industries</li>
                <li>Wood-finished foils for automotive parts, casseroles, decorative switches, photo frames, and gift items</li>
                <li>In-mould labels for houseware, water coolers, paint and lubricant containers, heaters, air conditioners, and more</li>
                <li>Foils for footwear, glassware, steel, and sanitary products</li>
                <li>Orange peel textures for ice cream and frozen food containers</li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-lg">
                At <strong>Graphico</strong>, we’re driven by a commitment to quality, innovation, and customer satisfaction. We welcome the opportunity to serve you and invite you to experience our industry-leading solutions firsthand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
