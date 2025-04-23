import React from "react";
import { products as items } from "../utils/products";

export function Gallery() {
  return (
    <div className="pt-16">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {items.map((item, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <img
                  src={item.image_src}
                  alt={item.title}
                  className="w-full h-64 object-contain rounded-lg shadow-md"
                />
                <p className="text-gray-600">{item.description_short}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
