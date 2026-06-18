"use client";

export default function RelationshipCounter() {

const start = new Date("2023-02-10");
const today = new Date();

const diff =
Math.floor(
(today.getTime() - start.getTime()) /
(1000 * 60 * 60 * 24)
);

return ( <section className="py-24 px-6 bg-gradient-to-b from-rose-900 via-rose-800 to-pink-100">


  <div className="max-w-4xl mx-auto">

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10 text-center shadow-2xl">

      <p className="uppercase tracking-[0.3em] text-pink-200 text-sm">
        Our Journey
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
        Our Journey So Far ❤️
      </h2>

      <div className="mt-10 text-7xl md:text-8xl font-bold text-pink-300">
        {diff}
      </div>

      <p className="mt-6 text-xl text-white/90">
        Days Since The First Message
      </p>

      <div className="mt-10 flex justify-center">
        <div className="w-24 h-1 rounded-full bg-pink-300"></div>
      </div>

      <p className="mt-8 text-white/80 text-lg">
        From 10 February 2023 until today ❤️
      </p>

    </div>

  </div>

</section>


);
}

