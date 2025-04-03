import React from 'react';

export function Gallery() {
  return (
    <div className="pt-16">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80" 
                alt="Metallic Foil"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold">Metallic Gold Foil</h3>
              <p className="text-gray-600">Perfect for luxury branding and special editions</p>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80" 
                alt="Holographic Foil"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold">Holographic Collection</h3>
              <p className="text-gray-600">Eye-catching designs for modern applications</p>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80" 
                alt="Matte Foil"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold">Matte Finish Series</h3>
              <p className="text-gray-600">Sophisticated look for premium products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}