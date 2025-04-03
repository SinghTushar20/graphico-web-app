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
                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                  <img
                    src="heat-transfer-film.jpg"
                    alt="HEAT TRANSFER FOILS/FILMS"
                    className="w-full h-85 object-contain rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-4">
                    HEAT TRANSFER FOILS/FILMS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    ➣ Heat transfer foil creates a smooth, seamless, and
                    high-quality look on products. This process allows for a
                    full 360-degree design application, giving products a
                    premium, “no-label” appearance.
                    <br />
                    ➣ The heat transfer method uses controlled heat and pressure
                    to apply color and designs without harming the surface. It
                    is a clean, eco-friendly process that ensures strong
                    adhesion and long-lasting durability, even in high-moisture
                    environments.
                    <br />➣ Heat transfer can be applied to various container
                    shapes and sizes (from small bottles to large containers)
                    with precision. The labels are fully recyclable, resistant
                    to squeezing and product exposure, and maintain their color
                    and opacity over time.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                  <img
                    src="in-mold-labels.png"
                    alt="IN MOLD LABELING"
                    className="w-full h-100 object-contain rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-4">
                  <br />
                    IN MOLD LABELING
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
    
                    ➣ In-mold labeling is a pre-decorating technique for both
                    injection molding containers and blow molding bottles.
                    <br />
                    ➣ Pre-decoration is the application of a label to a
                    container or bottle before it is filled with a product.
                    <br />➣ The IML label appears as a part of the container and
                    bottle. It means it has no label-look image.
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
