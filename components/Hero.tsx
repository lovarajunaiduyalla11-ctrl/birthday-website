"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-pink-100 to-rose-200">

      <motion.img
        src={images.hero}
        alt={content.name}
        className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-5xl font-bold text-rose-600 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {content.heroTitle}
      </motion.h1>

      <p className="mt-6 text-gray-700 text-lg max-w-md">
        {content.heroSubtitle}
      </p>

      <p className="mt-3 text-gray-600">
        {content.name}
      </p>

    </section>
  );
}
