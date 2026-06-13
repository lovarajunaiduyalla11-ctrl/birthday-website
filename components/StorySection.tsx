"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  text: string;
}

export default function StorySection({
  title,
  text,
}: Props) {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-rose-600">
          {title}
        </h2>

        <p className="text-xl leading-10 whitespace-pre-line text-gray-700">
          {text}
        </p>

      </div>
    </motion.section>
  );
}
