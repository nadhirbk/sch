"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans">
      {/* Section Hero */}
      <section id="hero" className="flex items-center justify-center w-full">
        <main className="w-full max-w-5xl flex flex-row items-stretch justify-between px-8 py-24 min-h-[700px]">
          {/* Image SCH à gauche avec animation */}
          <motion.div
            className="flex-1 flex items-stretch justify-center"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, duration: 1 }}
          >
            <Image
              src="/main-sch.png"
              alt="SCH"
              width={500}
              height={700}
              className="object-cover h-full drop-shadow-2xl"
              priority
            />
          </motion.div>
          {/* Logo SCH à droite avec animation */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center gap-8"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, duration: 1 }}
          >
            <Image
              src="/sch-logo.png"
              alt="Logo SCH"
              width={600}
              height={270}
              className="mb-6"
              priority
            />
            <div className="flex flex-row gap-4">
              <a
                href="#biographie"
                className="px-8 py-3 rounded-full bg-zinc-900 text-zinc-50 font-semibold text-lg shadow-lg hover:bg-zinc-800 transition"
              >
                Biographie
              </a>
              <a
                href="#discographie"
                className="px-8 py-3 rounded-full border border-zinc-700 text-zinc-50 font-semibold text-lg hover:bg-zinc-900 transition"
              >
                Discographie
              </a>
            </div>
          </motion.div>
        </main>
      </section>
      {/* Section Discographie */}
      <section
        id="discographie"
        className="relative w-full h-[400px] flex items-center justify-center overflow-hidden"
      >
        {/* Image de fond cinématographique, à placer dans public/discographie-bg.jpg */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/discographie-bg2.jpg"
            alt="Fond cinématographique SCH"
            className="w-full h-full object-cover object-top brightness-[.65] contrast-105"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h2 className="text-5xl font-extrabold text-zinc-50 mb-8 drop-shadow-lg">
            Discographie
          </h2>
          <a
            href="#explorer-discographie"
            className="px-10 py-4 rounded-full bg-zinc-900/80 text-zinc-50 text-xl font-bold shadow-xl hover:bg-zinc-800/90 transition"
          >
            Explorer
          </a>
        </div>
      </section>
      {/* Section Biographie */}
      <section
        id="biographie"
        className="relative w-full h-[400px] flex items-center justify-center overflow-hidden"
      >
        {/* Image de fond biographie, à placer dans public/biographie-bg.jpg */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/biographie-bg.jpg"
            alt="Fond biographie SCH"
            fill
            className="object-cover object-top brightness-[.7] contrast-105"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
          <h2 className="text-5xl font-extrabold text-zinc-50 mb-6 drop-shadow-lg">
            Biographie
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed max-w-2xl text-center">
            SCH, de son vrai nom Julien Schwarzer, est un artiste marseillais
            reconnu pour son univers cinématographique et ses textes percutants.
            Depuis ses débuts, il s’est imposé comme une figure majeure du rap
            français, mêlant storytelling, esthétique sombre et productions
            innovantes.
          </p>
        </div>
      </section>
    </div>
  );
}
