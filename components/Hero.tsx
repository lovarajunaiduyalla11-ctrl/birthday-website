"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-100 via-pink-100 to-white flex items-center justify-center">

      {/* Floating background blur */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-rose-300/30 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.4em] text-rose-500 text-sm"
        >
          19 June 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-8xl font-bold text-rose-600 mt-6"
        >
          Mounika ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 text-xl md:text-2xl text-gray-700 leading-relaxed"
        >
          Every love story is beautiful.
          <br />
          But ours is my favorite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16"
        >
          <p className="text-gray-500">
            A story that started on
          </p>

          <p className="text-2xl font-semibold text-rose-500 mt-2">
            10 February 2023
          </p>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-16 text-4xl text-rose-400"
        >
          ↓
        </motion.div>

      </div>
    </section>
  );
}
