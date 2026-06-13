"use client";

import { content } from "@/lib/content";

export default function LoveLetter() {
  return (
    <section className="py-20 px-6 bg-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        A Letter To You ❤️
      </h2>

      <div className="max-w-3xl mx-auto bg-pink-50 p-8 rounded-2xl shadow">
        <pre className="whitespace-pre-wrap text-gray-700 leading-8 font-sans">
          {content.letter}
        </pre>
      </div>

    </section>
  );
}
