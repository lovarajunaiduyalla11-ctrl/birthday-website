"use client";

import { images } from "@/lib/images";

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">

      <h2 className="text-4xl font-bold text-center text-rose-600 mb-4">
        Beautiful Memories 📸
      </h2>

      <p className="text-center text-gray-600 mb-12">
        A collection of moments that became memories ❤️
      </p>

      <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4">

        {images.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Memory ${index + 1}`}
            className="mb-4 rounded-2xl shadow-xl w-full hover:scale-[1.02] transition duration-300"
          />
        ))}

      </div>

    </section>
  );
}
