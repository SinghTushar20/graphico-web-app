import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-16">
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex-none w-96">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80"
                    alt="Metallic Foils"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Metallic Foils</h3>
                    <p className="text-gray-600">
                      Premium metallic foils perfect for luxury packaging and high-end textile applications.
                      Available in gold, silver, rose gold, and custom colors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-none w-96">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
                    alt="Holographic Foils"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Holographic Foils</h3>
                    <p className="text-gray-600">
                      Eye-catching holographic foils that create stunning visual effects.
                      Perfect for special editions and promotional materials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-none w-96">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80"
                    alt="Matte Foils"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Matte Foils</h3>
                    <p className="text-gray-600">
                      Sophisticated matte finish foils for a premium look.
                      Ideal for luxury packaging and high-end applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-none w-96">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515191107209-c28698631303?auto=format&fit=crop&q=80"
                    alt="Custom Solutions"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
                    <p className="text-gray-600">
                      Tailored heat transfer solutions for your specific needs.
                      Custom colors, patterns, and applications available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}