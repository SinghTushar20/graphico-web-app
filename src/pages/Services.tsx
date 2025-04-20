import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
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
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft size={28} />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-8 scrollbar-hide scroll-smooth px-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* HEAT TRANSFER FOILS/FILMS */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                  <img
                    src="heat-transfer-film.jpg"
                    alt="HEAT TRANSFER FOILS/FILMS"
                    className="w-full h-85 object-contain rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-4">
                    HEAT TRANSFER FOILS / FILMS
                  </h3>
                  <p className="text-gray-600 leading-relaxed space-y-2">
                    ➣ A dry printing process where ink pigments and metallic
                    inks are transferred from polyester film to products using
                    heat and pressure.
                    <br />
                    ➣ Offers seamless one-step decoration that is durable,
                    chemical-resistant, and vibrant.
                    <br />
                    ➣ Ideal for decorating various substrates including plastic,
                    glass, steel, and more.
                    <br />➣ Common applications include containers, pens,
                    buckets, mirrors, cosmetic jars, and industrial articles.
                  </p>
                </div>

                {/* IN MOULD LABELING */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                  <img
                    src="in-mold-labels.png"
                    alt="IN MOLD LABELING"
                    className="w-full h-85 object-contain rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-4">
                    IN MOULD LABELING
                  </h3>
                  <p className="text-gray-600 leading-relaxed space-y-2">
                    ➣ Advanced process where labels are inserted into the mould
                    during the injection or blow molding process.
                    <br />
                    ➣ The label fuses with the product, becoming part of
                    it—creating a “no label” look.
                    <br />➣ Ensures high durability, premium appearance, and
                    reduces the need for post-decoration steps.
                  </p>
                </div>

                {/* APPLICATION AREAS */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    APPLICATION AREAS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our solutions are used across multiple industries and
                    product categories:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1">
                    <li>
                      Stationery (Pens, Tiffin Boxes, Pencil Boxes, Markers)
                    </li>
                    <li>Houseware (Buckets, Containers, Mugs, Accessories)</li>
                    <li>Thermoware (Casseroles, Flasks, Tiffins)</li>
                    <li>FMCG (Ice Cream, Dairy, Ghee Packaging)</li>
                    <li>Paints, Lubricants, Batteries</li>
                    <li>Pharma (Measuring Cups, Bottles)</li>
                    <li>Baby Products (Feeding Bottles, Cups)</li>
                    <li>Fancy Items (Hair Clips, Combs, Mirrors)</li>
                    <li>HDPE Drums & Bottles, Photo Frames, Number Plates</li>
                  </ul>
                </div>

                {/* FUTURE PROSPECTS */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    FUTURE PROSPECTS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    With rising demand and regulatory shifts like mandatory DEF
                    usage in all vehicles, the market for Heat Transfer Foils
                    and In-Mould Labels is expanding rapidly. As more industries
                    transition from screen and pad printing to these modern
                    methods, we are scaling up our capacity to meet the demand
                    in automotive, HDPE, and pharmaceutical sectors.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
