"use client";

export default function RelationshipCounter() {

  const start = new Date("2023-02-10");
  const today = new Date();

  const diff =
    Math.floor(
      (today.getTime() - start.getTime()) /
      (1000 * 60 * 60 * 24)
    );

  return (
    <section className="py-20 text-center bg-white">

      <h2 className="text-4xl font-bold mb-8">
        Our Journey So Far ❤️
      </h2>

      <p className="text-6xl font-bold text-rose-500">
        {diff}
      </p>

      <p className="mt-4 text-xl">
        Days Since The First Message
      </p>

    </section>
  );
}
