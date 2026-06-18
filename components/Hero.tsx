"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function Hero() {
return ( <section className="relative min-h-screen overflow-hidden">


  <img
    src={images.hero}
    alt="Mounika"
    className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-center"
  />

  <div className="absolute inset-0 bg-black/45" />

  <div className="relative z-10 min-h-screen flex items-center">

    <div className="max-w-6xl mx-auto w-full px-8">

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white tracking-[0.3em] uppercase text-sm"
      >
        19 June 2026
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-5xl md:text-7xl font-bold mt-6"
      >
        Happy Birthday ❤️
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-pink-200 text-3xl md:text-5xl mt-3"
      >
        Mounika
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-white/90 text-xl md:text-2xl mt-8 leading-relaxed max-w-xl"
      >
        Every love story is beautiful.
        <br />
        But ours is my favorite.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10"
      >
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
          <p className="text-white text-sm uppercase tracking-widest">
            Our Journey
          </p>

          <p className="text-3xl font-bold text-pink-200 mt-2">
            1224 Days ❤️
          </p>

          <p className="text-white/80 mt-2">
            Since 10 February 2023
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-16 text-white text-4xl"
      >
        ↓
      </motion.div>

    </div>

  </div>

</section>


);
}
