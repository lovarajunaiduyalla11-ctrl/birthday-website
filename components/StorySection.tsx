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
className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100"
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
>
<motion.div
initial={{ y: 80, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="max-w-4xl w-full"
>


    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-pink-100 p-8 md:p-14">

      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center text-rose-600">
        {title}
      </h2>

      <div className="w-24 h-1 bg-rose-300 mx-auto mb-10 rounded-full" />

      <p className="text-xl md:text-2xl leading-10 md:leading-[3rem] whitespace-pre-line text-gray-700 text-center">
        {text}
      </p>

    </div>

  </motion.div>
</motion.section>

);
}

