"use client";

import { images } from "@/lib/images";

export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-pink-100">

      <h2 className="text-4xl font-bold text-center mb-10">
        Beautiful Memories 📸
      </h2>

      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {images.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Memory ${index}`}
            className="rounded-xl shadow-lg"
          />
        ))}
      </div>

    </section>
  );
}
