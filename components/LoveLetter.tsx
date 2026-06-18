"use client";

import { content } from "@/lib/content";

export default function LoveLetter() {
return ( <section className="py-24 px-6 bg-gradient-to-b from-pink-50 to-rose-100">

  <div className="max-w-4xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-rose-600 mb-4">
      A Letter To You ❤️
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Written with love, respect, patience and hope.
    </p>

    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 border border-pink-100">

      <pre className="whitespace-pre-wrap text-lg md:text-xl leading-10 text-gray-700 font-serif">

{content.letter} </pre>

      <div className="mt-12 pt-8 border-t border-pink-100 text-center">

        <p className="text-rose-500 text-lg italic">
          "Some people enter our lives and quietly change everything."
        </p>

        <p className="mt-8 text-2xl text-rose-600">
          ❤️
        </p>

      </div>

    </div>

  </div>

</section>

);
}
