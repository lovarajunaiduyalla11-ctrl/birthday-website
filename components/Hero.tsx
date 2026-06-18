"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <img
        src={images.hero}
        alt="Mounika"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white tracking-[0.3em] uppercase text-sm"
        >
          19 June 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-7xl font-bold mt-6"
        >
          Happy Birthday ❤️
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-pink-200 text-3xl md:text-5xl mt-4"
        >
          Mounika
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/90 max-w-xl mt-8 text-lg leading-relaxed"
        >
          Every love story is beautiful.
          <br />
          But ours is my favorite.
        </motion.p>

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

    </section>
  );
}
