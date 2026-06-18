"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function Hero() {
return ( <section className="relative min-h-screen overflow-hidden">

```
  <img
    src={images.hero}
    alt="Mounika"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/45" />

  <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white tracking-[0.3em] uppercase"
    >
      19 June 2026
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white text-5xl md:text-7xl font-bold mt-6"
    >
      Happy Birthday ❤️
    </motion.h1>

    <h2 className="text-pink-200 text-3xl md:text-5xl mt-4">
      Mounika
    </h2>

    <p className="text-white/90 max-w-xl mt-8 text-lg">
      Every love story is beautiful.
      <br />
      But ours is my favorite.
    </p>

  </div>

</section>

);
}

