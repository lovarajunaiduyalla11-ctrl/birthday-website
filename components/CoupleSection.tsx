"use client";

import { images } from "@/lib/images";

export default function CoupleSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50">

      <h2 className="text-4xl font-bold text-center text-rose-600 mb-4">
        Our Photo ❤️
      </h2>

      <p className="text-center text-gray-600 mb-12">
        One photo. Countless memories.
      </p>

      <div className="max-w-md mx-auto">

        <img
          src={images.couple}
          alt="Us Together"
          className="rounded-3xl shadow-2xl w-full border-4 border-white"
        />

      </div>

      <div className="max-w-2xl mx-auto mt-10 text-center">

        <p className="text-lg text-gray-700 leading-8">
          Out of all the photos in the world,
          this one means the most to me.
        </p>

        <p className="text-lg text-gray-700 leading-8 mt-4">
          Because it reminds me that some moments
          are too beautiful to be measured by time.
        </p>

        <p className="text-xl font-semibold text-rose-500 mt-8">
          ❤️ One Photo. A Thousand Memories.
        </p>

      </div>

    </section>
  );
}
