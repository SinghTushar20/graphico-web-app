import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, CheckCircle } from 'lucide-react';

export function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890';
    const message = encodeURIComponent('Hi! I would like to know more about your heat transfer foil products.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>HeatFoils - Premium Heat Transfer Foils & In-Mold Labeling Solutions</title>
        <meta name="description" content="Leading manufacturer of high-quality heat transfer foils, heat transfer films, and in-mold labeling solutions. Custom solutions for textile, packaging, and industrial applications." />
        <meta name="keywords" content="heat transfer foil, heat transfer film, in-mold labeling, IML, heat transfer technology, metallic foils, holographic foils, textile printing" />
        <link rel="canonical" href="https://www.heatfoils.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HeatFoils - Premium Heat Transfer Solutions" />
        <meta property="og:description" content="Leading manufacturer of high-quality heat transfer foils, heat transfer films, and in-mold labeling solutions." />
        <meta property="og:image" content="https://www.heatfoils.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HeatFoils - Premium Heat Transfer Solutions" />
        <meta name="twitter:description" content="Leading manufacturer of high-quality heat transfer foils, heat transfer films, and in-mold labeling solutions." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HeatFoils",
            "description": "Premium manufacturer of heat transfer foils and in-mold labeling solutions",
            "url": "https://www.heatfoils.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-123-456-7890",
              "contactType": "customer service",
              "email": "info@heatfoils.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Business Street",
              "addressLocality": "City",
              "addressRegion": "State",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://facebook.com/heatfoils",
              "https://instagram.com/heatfoils"
            ]
          })}
        </script>
      </Helmet>

      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Premium Heat Transfer Foils</h1>
              <p className="text-xl mb-8">Transform your designs with our high-quality heat transfer foils. Perfect for textiles, crafts, and commercial applications.</p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition duration-300"
              >
                <MessageCircle size={20} />
                <span>Contact us on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About HeatFoils</h2>
              <p className="text-gray-600 mb-6">
                With over a decade of expertise in heat transfer technology, HeatFoils has established itself as an industry leader in providing premium quality heat transfer solutions. Our commitment to innovation and excellence has made us the preferred choice for businesses worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>Premium Quality Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>Expert Technical Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>Fast Turnaround Time</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80" 
                alt="Heat Transfer Foil Manufacturing Process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
                  alt="Heat Transfer Foil Application in Fashion"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">LuxeFashion</h3>
              <p className="text-gray-600 mb-4">
                "HeatFoils has revolutionized our clothing line with their premium metallic transfers. The quality and consistency are unmatched in the industry."
              </p>
              <div className="text-sm text-gray-500">
                Sarah Johnson, Creative Director
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1515191107209-c28698631303?auto=format&fit=crop&q=80"
                  alt="Heat Transfer Film Application in Sports"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">SportsPro</h3>
              <p className="text-gray-600 mb-4">
                "The durability of HeatFoils' products on our sports jerseys is exceptional. They maintain their quality even after multiple washes."
              </p>
              <div className="text-sm text-gray-500">
                Mike Thompson, Production Manager
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
                  alt="In-Mold Labeling Solutions"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">CreativeStudio</h3>
              <p className="text-gray-600 mb-4">
                "Their holographic foils have added a new dimension to our design capabilities. The customer support is outstanding."
              </p>
              <div className="text-sm text-gray-500">
                Lisa Chen, Design Lead
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}