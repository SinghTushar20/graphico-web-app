import React from 'react';

export function About() {
  return (
    <div className="pt-16">
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80" 
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Your Trusted Partner in Heat Transfer Solutions</h3>
              <p className="text-gray-600">
                With over a decade of experience in the industry, we've established ourselves as a leading provider of high-quality heat transfer foils. Our commitment to innovation and quality has made us the preferred choice for businesses across various sectors.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Industry-leading quality standards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extensive range of colors and finishes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technical support and consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}