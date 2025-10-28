"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  // Référence pour le header
  const headerRef = useRef<HTMLDivElement>(null);

  // Masquer le header au scroll vers le bas, le montrer au scroll vers le haut
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (headerRef.current) {
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          // Scroll vers le bas : masquer le header
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          // Scroll vers le haut : afficher le header
          headerRef.current.style.transform = "translateY(0)";
        }
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        const pick = candidates[Math.floor(Math.random() * candidates.length)];
        newRow.push(pick);
      }
      rows.push(newRow);
    }
    return rows;
  };

  return (
    <div className="min-h-screen bg-transparent text-zinc-50 font-sans overflow-hidden">
      {/* === HEADER PREMIUM === */}
      <header
        ref={headerRef}
        className="w-full px-4 py-2 flex items-center justify-center bg-gradient-to-r from-zinc-900/90 via-zinc-800/80 to-zinc-900/90 border-b-2 border-yellow-400/80 shadow-yellow-400/10 shadow-lg backdrop-blur-md contrast-125 fixed top-0 left-0 z-50 transition-transform duration-300"
      >
        <nav className="flex gap-3 text-base font-extrabold tracking-widest">
          <a
            href="#hero"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            ACCUEIL
          </a>
          <a
            href="#tournee"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            TOURNÉE
          </a>
          <a
            href="/discographie"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            DISCOGRAPHIE
          </a>
          <a
            href="#galerie"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            GALERIE
          </a>
          <a
            href="#contact"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            CONTACT
          </a>
        </nav>
      </header>

      {/* === SECTION HERO === */}
      <section
        id="hero"
        className="relative flex items-center justify-center w-full overflow-hidden"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-[200%] flex flex-col album-wall-scroll">
            {/* 12 rangées aléatoires et dupliquées pour boucle parfaite */}
            {generateRows().map((row, idx) => (
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
            {generateRows().map((row, idx) => (
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
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
        </div>
        <main className="relative z-10 w-full max-w-5xl flex flex-row items-stretch justify-between px-8 min-h-[700px] h-full">
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
                href="#billetterie"
                className="sch-cta"
                style={{
                  fontFamily: "InstrumentSans, sans-serif",
                  letterSpacing: "0.12em",
                  boxShadow: "0 2px 24px 0 rgba(255, 215, 0, 0.08)",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-yellow-400 drop-shadow-lg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="7"
                    width="18"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="#facc15"
                    fillOpacity="0.15"
                  />
                  <path d="M7 7v10" stroke="#facc15" strokeWidth="1.5" />
                  <path d="M17 7v10" stroke="#facc15" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
                Billetterie
              </a>
              <a
                href="/discographie"
                className="sch-cta"
                style={{
                  fontFamily: "InstrumentSans, sans-serif",
                  letterSpacing: "0.12em",
                  boxShadow: "0 2px 24px 0 rgba(255, 215, 0, 0.08)",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-yellow-400 drop-shadow-lg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="#facc15"
                    fillOpacity="0.15"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="#facc15"
                    fillOpacity="0.35"
                  />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  <path
                    d="M12 2a10 10 0 0 1 10 10"
                    stroke="#facc15"
                    strokeWidth="1.5"
                  />
                </svg>
                Discographie
              </a>
            </div>
          </motion.div>
        </main>
      </section>

      {/* === SECTION ACTUALITÉ === */}
      <section
        id="actualite"
        className="relative w-full flex flex-col md:flex-row items-center justify-center py-16 bg-gradient-to-b from-zinc-950 via-zinc-900/80 to-zinc-950 gap-8"
      >
        <div
          className="absolute top-0 left-0 w-full flex justify-center pointer-events-none"
          style={{ zIndex: 2, paddingTop: "2.5rem" }}
        >
          <h2
            className="text-4xl font-extrabold mb-8 drop-shadow-lg uppercase tracking-widest text-center bg-clip-text text-transparent sch-gold-outline"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Actualité
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center mb-8 md:mb-0 md:pt-16">
          <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden border-2 border-yellow-400/80 shadow-yellow-400/10 shadow-xl backdrop-blur-md bg-zinc-900/80">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UI6MNEduTL8?si=tqI36I3NaICyHUIl"
                title="SCH - Dernier clip"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <a
            href="https://youtu.be/UI6MNEduTL8?si=tqI36I3NaICyHUIl"
            target="_blank"
            rel="noopener noreferrer"
            className="sch-cta mt-8"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.12em",
              boxShadow: "0 2px 24px 0 rgba(255, 215, 0, 0.08)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="text-yellow-400 drop-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
                fill="#facc15"
                fillOpacity="0.15"
              />
              <path d="M7 7v10" stroke="#facc15" strokeWidth="1.5" />
              <path d="M17 7v10" stroke="#facc15" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
            Regarder sur YouTube
          </a>
        </div>
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
          <h2
            className="text-5xl font-extrabold text-zinc-50 mb-6 drop-shadow-lg uppercase"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            TOURNÉE
          </h2>
          <a href="#billetterie" className="sch-cta mt-6 px-10 py-4 text-xl">
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
          <h2
            className="text-5xl font-extrabold text-zinc-50 mb-8 drop-shadow-lg uppercase"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            DISCOGRAPHIE
          </h2>
          <a
            href="#explorer-discographie"
            className="sch-cta px-10 py-4 text-xl"
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
