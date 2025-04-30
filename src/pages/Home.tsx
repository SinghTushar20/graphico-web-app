import React from "react";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle } from "lucide-react";
import { COMPANY_MOTO, PHONE_NUMBER } from "../utils/constant";
import { Typewriter } from "react-simple-typewriter";

export function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = PHONE_NUMBER;
    const message = encodeURIComponent(
      "Hi! I would like to know more about your heat transfer foil products."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  return (
    <>
      <Helmet>
        <title>
          Graphico | Heat Transfer Foils, In-Mould Labelling & Printing
          Solutions
        </title>
        <meta
          name="description"
          content="Graphico is a leading manufacturer of Heat Transfer Foils and In-Mould Labelling solutions. We offer premium heat transfer printing foils and raw materials for a wide range of industries."
        />
        <meta
          name="keywords"
          content="Heat transfer foils, Heat Transfer Printing, In-Mould Labelling, Graphico, Graphico labels, foils, raw material, heat transfer film, packaging foils, labeling solutions"
        />
        <link rel="canonical" href="https://www.heatfoils.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Graphico | Heat Transfer Foils & In-Mould Labelling Experts"
        />
        <meta
          property="og:description"
          content="Explore high-quality Heat Transfer Foils, In-Mould Labelling, and raw materials by Graphico – Trusted by global brands for heat transfer printing excellence."
        />
        <meta
          property="og:image"
          content="https://www.heatfoils.com/og-image.jpg"
        />
        <meta property="og:url" content="https://www.heatfoils.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Graphico | Heat Transfer Foils & In-Mould Labelling Experts"
        />
        <meta
          name="twitter:description"
          content="Graphico offers premium heat transfer foils and in-mould labeling solutions. Discover our heat transfer printing raw materials tailored for packaging, houseware, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.heatfoils.com/og-image.jpg"
        />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Graphico",
            description:
              "Graphico is a manufacturer and supplier of Heat Transfer Foils and In-Mould Labels for industrial applications.",
            url: "https://www.heatfoils.com",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-123-456-7890",
              contactType: "customer service",
              email: "info@heatfoils.com",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Business Street",
              addressLocality: "City",
              addressRegion: "State",
              postalCode: "12345",
              addressCountry: "US",
            },
            sameAs: [
              "https://facebook.com/graphicolabels",
              "https://instagram.com/graphicolabels",
            ],
          })}
        </script>
      </Helmet>

      <div className="ml-28 text-black text-xl font-bold max-w-md hidden md:block">
        <Typewriter
          words={[COMPANY_MOTO]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div
        className="h-screen mt-100 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("graphicoBackground1.png")',
        }}
      >``
        <div className="absolute inset-0 bg-black bg-opacity-70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-gray-200 max-w-2xl mt-200">
              {/* <h1 className="text-5xl font-bold mb-6">Graphico</h1> */}
              {/* <p className="text-xl font-semibold mb-8">
                Mfg. of Heat Transfer Foils/In-mould Label for PP, ABS, PS, PC,
                SAN, WOOD, PE & PET.
                <br />
                "Service and Quality differentiate us from our competitors!"
              </p> */}
              <button
                onClick={handleWhatsAppClick}
                className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition duration-300"
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
              <h2 className="text-3xl font-bold mb-6">About Graphico</h2>
              <p className="text-gray-600 mb-6">
                Welcome to Graphico, a leading name in Heat Transfer Printing
                and In-Mould Labelling. With a legacy rooted in innovation and
                quality, we specialize in developing and manufacturing
                proprietary coatings that enable cost-effective,
                customer-focused decoration solutions for a wide range of
                industries. Our core technology allows us to deliver customized
                Heat Transfer Foils and In-Mould Labels that enhance the
                aesthetic appeal and durability of products by seamlessly
                transferring our coatings or laminating them onto a variety of
                substrates.
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
                src="photo-collection.png"
                alt="Heat Transfer Foil Manufacturing Process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img
                  src="clearBlueDef.png"
                  alt="Indian Oil AdBlue"
                  className="w-full h-60 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Indian Oil AdBlue</h3>
              <p className="text-gray-600 mb-4">
                We provide heat transfer foils to the lubricant and chemical
                industries, which use them as raw material for branding and
                labeling of their packaging containers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img
                  src="all1.png"
                  alt="Heat Transfer Film Application in Sports"
                  className="w-full h-60 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jolly Containers </h3>
              <p className="text-gray-600 mb-4">
                Our heat transfer foils are used as raw material in the
                houseware and packaging industries to decorate plastic
                containers, adding visual appeal and durability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img
                  src="shreeji.png"
                  alt="In-Mold Labeling Solutions"
                  className="w-full h-60 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shree Pharma Pack</h3>
              <p className="text-gray-600 mb-4">
                We supply heat transfer foils to the Shree Pharma formerly known
                as Shree Plastics , where they are used as raw materials in
                labeling and branding applications on plastic packaging.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
