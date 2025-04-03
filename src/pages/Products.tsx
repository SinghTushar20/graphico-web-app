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
                  src="heat-transfer-film.jpg" 
                  alt="Heat Transfer Foils"
                  className="w-full h-80 object-contain rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Cool Foils</h4>
                <p className="text-gray-600">
                  Premium metallic foils available in gold, silver, and custom colors.
                  Perfect for luxury packaging and high-end applications.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="service1.png" 
                  alt="Bharat Benz Foils"
                  className="w-full h-80 object-contain rounded mb-4"
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
            <h3 className="text-2xl font-semibold mb-8">Heat Transfer Films</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="all1.png" 
                  alt="Custom Molds"
                  className="w-full h-100 object-contain rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Custom Molds</h4>
                <p className="text-gray-600">
                  Tailored heat transfer molds designed to your specifications.
                  Ideal for consistent, high-volume production.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="all2.png" 
                  alt="Industrial Molds"
                  className="w-full h-100 object-contain rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Industrial Molds</h4>
                <p className="text-gray-600">
                  Heavy-duty molds for industrial applications.
                  Built for durability and precision.
                </p>
              </div>
            </div>
          </div>
          
          {/* Heat Transfer Molds Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">IN MOLD LABELING</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="plasticTray.png" 
                  alt="Custom Molds"
                  className="w-full h-80 object-contain rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Custom Molds</h4>
                <p className="text-gray-600">
                  Tailored heat transfer molds designed to your specifications.
                  Ideal for consistent, high-volume production.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="plasticJug.png" 
                  alt="Industrial Molds"
                  className="w-full h-80 object-contain rounded mb-4"
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
            <h3 className="text-2xl font-semibold mb-8">Our Products</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">BharatBenz .co</h4>
                <p className="text-gray-600 mb-4">
                  "The metallic foils provided by HeatFoils have become an integral part of our premium clothing line. The quality and consistency are unmatched."
                </p>
                <img 
                  src="bharatbenz_1.jpeg" 
                  alt="Fashion Brand"
                  className="w-full h-80 object-contain rounded"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Foils and Roles For Cosmetic & Food Industry</h4>
                <p className="text-gray-600 mb-4">
                  "We've been using HeatFoils for our custom jersey numbers and logos. The durability through washing and wear is exceptional."
                </p>
                <img 
                  src="service.png" 
                  alt="Sports Apparel"
                  className="w-full h-80 object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}