import React from "react";
import { groupedProducts } from "../utils/products";

export function Products() {
  return (
    <div className="pt-16">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>

          {groupedProducts.map((group, idx) => (
            <div className="mb-20" key={idx}>
              <h3 className="text-2xl font-semibold mb-8">{group.sectionTitle}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {group.items.map((product, pIdx) => (
                  <div key={pIdx} className="bg-gray-50 p-6 rounded-lg">
                    <img
                      src={product.image_src}
                      alt={product.title}
                      className="w-full h-80 object-contain rounded mb-4"
                    />
                    <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
                    <p className="text-gray-600">{product.description_long}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
