"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";

export default function Timeline() {
  return (
    <section className="py-20 px-6 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Journey ❤️
      </h2>

      <div className="max-w-3xl mx-auto space-y-10">
        {content.timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-pink-50 p-6 rounded-2xl shadow"
          >
            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="text-rose-500 mt-2">
              {item.date}
            </p>

            <p className="mt-4 text-gray-700">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
