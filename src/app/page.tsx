"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  // Génère des rangées aléatoires sans doublons verticaux (pas deux fois le même album dans la même colonne)
  const generateRows = (rowCount = 12, colCount = 6): string[][] => {
    // On commence par une première rangée random
    const rows: string[][] = [];
    rows.push([...albums].sort(() => Math.random() - 0.5).slice(0, colCount));
    for (let r = 1; r < rowCount; r++) {
      const prevRow: string[] = rows[r - 1];
      const newRow: string[] = [];
      for (let c = 0; c < colCount; c++) {
        // On évite de reprendre le même album que la colonne au-dessus
        const candidates: string[] = albums.filter(
          (a) => a !== prevRow[c] && !newRow.includes(a)
        );
        // Si plus de candidats, on autorise le doublon horizontal
        const pick: string =
          candidates.length > 0
            ? candidates[Math.floor(Math.random() * candidates.length)]
            : albums[Math.floor(Math.random() * albums.length)];
        newRow.push(pick);
      }
      rows.push(newRow);
    }
    return rows;
  };
  // Génère 36 rangées aléatoires premium
  const [rows] = useState(() => generateRows(36, 6));

  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans overflow-hidden">
      {/* === SECTION HERO === */}
      <section
        id="hero"
        className="relative flex items-center justify-center w-full overflow-hidden"
      >
        {/* === BACKGROUND : Mur d’albums animé === */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-[200%] flex flex-col album-wall-scroll">
            {/* 12 rangées aléatoires et dupliquées pour boucle parfaite */}
            <>
              {rows.map((row, idx) => (
                <div
                  key={"a" + idx}
                  className="grid grid-cols-6 gap-[2px] opacity-70 contrast-90"
                >
                  {row.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="Album cover"
                      width={250}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  ))}
                </div>
              ))}
              {rows.map((row, idx) => (
                <div
                  key={"b" + idx}
                  className="grid grid-cols-6 gap-[2px] opacity-70 contrast-90"
                >
                  {row.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="Album cover"
                      width={250}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  ))}
                </div>
              ))}
            </>
          </div>

          {/* Overlay sombre pour contraste, moins prononcé */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 pointer-events-none"></div>
        </div>

        {/* === FOREGROUND : ton contenu principal === */}
        <main className="relative z-10 w-full max-w-5xl flex flex-row items-stretch justify-between px-8 min-h-[700px] h-full">
          {/* Portrait SCH animé */}
          <motion.div
            className="flex-1 flex items-stretch justify-center"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              duration: 1,
            }}
          >
            <div className="flex items-end h-full w-full">
              <Image
                src="/main-sch.png"
                alt="SCH"
                width={700}
                height={1000}
                className="object-contain h-full drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </motion.div>

          {/* Logo SCH animé */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center gap-8"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              duration: 1,
            }}
          >
            <Image
              src="/sch-logo2.png"
              alt="Logo SCH"
              width={600}
              height={270}
              className="mb-6"
              priority
            />
            <div className="flex flex-row gap-4">
              <a
                href="#biographie"
                className="px-8 py-3 rounded-full bg-zinc-900/80 text-zinc-50 font-semibold text-lg shadow-lg hover:bg-zinc-800 transition"
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

      {/* === SECTION TOURNÉE === */}
      <section
        id="tournee"
        className="relative w-full h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/sch-velodrome.jpg"
            alt="Fond tournée SCH"
            fill
            className="w-full h-full object-cover object-[center_45%] brightness-[.65] contrast-105"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
          <h2 className="text-5xl font-extrabold text-zinc-50 mb-6 drop-shadow-lg">
            Tournée
          </h2>
          <a
            href="#billetterie"
            className="mt-6 px-10 py-4 rounded-full bg-zinc-900/80 text-zinc-50 text-xl font-bold shadow-xl hover:bg-zinc-800/90 transition"
          >
            Réserver ma place
          </a>
        </div>
      </section>

      {/* === SECTION DISCOGRAPHIE === */}
      <section
        id="discographie"
        className="relative w-full h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/discographie-bg2.jpg"
            alt="Fond cinématographique SCH"
            fill
            className="w-full h-full object-cover object-top brightness-[.65] contrast-105"
            priority
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
    </div>
  );
}

/* === LISTE DES ALBUMS === */
const albums = [
  "/albums/a7.jpeg",
  "/albums/anarchie.jpeg",
  "/albums/deo-favente.jpeg",
  "/albums/jvlivs1.jpeg",
  "/albums/rooftop.jpeg",
  "/albums/jvlivs2.jpeg",
  "/albums/autobahn.jpeg",
  "/albums/jvlivs-prequel-julio.jpeg",
  "/albums/jvlivs3.jpeg",
];
