import React from 'react';

export function Products() {
  return (
    <div className="pt-16">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>

          {/* Heat Transfer Foils Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">Heat Transfer Foils</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80" 
                  alt="Metallic Foils"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Metallic Foils</h4>
                <p className="text-gray-600">
                  Premium metallic foils available in gold, silver, and custom colors.
                  Perfect for luxury packaging and high-end applications.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80" 
                  alt="Holographic Foils"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Holographic Foils</h4>
                <p className="text-gray-600">
                  Eye-catching holographic effects for special editions and promotional materials.
                </p>
              </div>
            </div>
          </div>

          {/* Heat Transfer Molds Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">Heat Transfer Molds</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80" 
                  alt="Custom Molds"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Custom Molds</h4>
                <p className="text-gray-600">
                  Tailored heat transfer molds designed to your specifications.
                  Ideal for consistent, high-volume production.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1515191107209-c28698631303?auto=format&fit=crop&q=80" 
                  alt="Industrial Molds"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Industrial Molds</h4>
                <p className="text-gray-600">
                  Heavy-duty molds for industrial applications.
                  Built for durability and precision.
                </p>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Fashion Brand - StyleCo</h4>
                <p className="text-gray-600 mb-4">
                  "The metallic foils provided by HeatFoils have become an integral part of our premium clothing line. The quality and consistency are unmatched."
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
                  alt="Fashion Brand"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Sports Apparel - AthleteX</h4>
                <p className="text-gray-600 mb-4">
                  "We've been using HeatFoils for our custom jersey numbers and logos. The durability through washing and wear is exceptional."
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1515191107209-c28698631303?auto=format&fit=crop&q=80" 
                  alt="Sports Apparel"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}