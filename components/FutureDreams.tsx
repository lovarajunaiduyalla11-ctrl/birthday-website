"use client";

import { content } from "@/lib/content";

export default function FutureDreams() {
  return (
    <section className="py-20 px-6 bg-rose-50">

      <h2 className="text-4xl font-bold text-center mb-10">
        Our Future Dreams ✨
      </h2>

      <div className="grid gap-4 max-w-4xl mx-auto">
        {content.dreams.map((dream, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >
            {dream}
          </div>
        ))}
      </div>

    </section>
  );
}
